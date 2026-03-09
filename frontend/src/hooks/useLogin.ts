import { useState } from "react";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(data: { email: string; password: string }) {
    setIsLoading(true);
    setError(null);
    try {
      const { user } = await loginUser(data);
      setUser(user);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isLoading, error };
}
