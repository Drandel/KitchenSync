import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const { login: authLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(data: { email: string; password: string }) {
    setIsLoading(true);
    setError(null);
    try {
      await authLogin(data.email, data.password);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isLoading, error, clearError: () => setError(null) };
}
