import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import api from "../api/axiosInstance";
import { AuthUser, AuthContextValue } from "../api/auth";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const tokenRef = useRef<string | null>(null);
  tokenRef.current = accessToken;

  const silentRefresh = useCallback(async (): Promise<string | null> => {
    try {
      const res = await api.post<{ accessToken: string; user: AuthUser }>(
        "/auth/refresh",
      );
      setAccessToken(res.data.accessToken);
      setUser(res.data.user);
      return res.data.accessToken;
    } catch (error) {
      setAccessToken(null);
      setUser(null);
      return null;
    }
  }, []);

  // On mount — attempt to rehydrate session from the refresh token cookie
  useEffect(() => {
    silentRefresh().finally(() => setIsLoading(false));
  }, [silentRefresh]);

  // Axios interceptors — registered once, live for the lifetime of the provider
  useEffect(() => {
    const reqId = api.interceptors.request.use((config) => {
      const token = tokenRef.current;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const resId = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const original = error.config;
        const is401 = error.response?.status === 401;
        const alreadyRetried = original._retry;
        const isRefreshCall = original.url?.includes("/auth/refresh");

        if (is401 && !alreadyRetried && !isRefreshCall) {
          original._retry = true;
          const newToken = await silentRefresh();
          if (newToken) {
            original.headers.Authorization = `Bearer ${newToken}`;
            return api(original);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(reqId);
      api.interceptors.response.eject(resId);
    };
  }, [silentRefresh]);

  const login = useCallback(async (email: string, password: string) => {
    const res = await api.post<{ accessToken: string; user: AuthUser }>(
      "/auth/login",
      { email, password },
    );
    setAccessToken(res.data.accessToken);
    setUser(res.data.user);
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setAccessToken(null);
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, accessToken, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
