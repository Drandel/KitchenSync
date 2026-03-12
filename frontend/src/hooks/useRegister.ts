import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/axiosInstance";

export function useRegister() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function register(data: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }) {
    setIsLoading(true);
    setError(null);
    try {
      await api.post("/user/register", data);
      await login(data.email, data.password);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { register, isLoading, error, clearError: () => setError(null) };
}
