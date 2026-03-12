import { useState } from "react";
import { loginWithGoogle } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export function useGoogleLogin() {
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loginWithGoogleToken(googleToken: string) {
    setIsLoading(true);
    setError(null);
    try {
      const { user } = await loginWithGoogle(googleToken);
      setUser(user);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Google login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { loginWithGoogle: loginWithGoogleToken, isLoading, error };
}
