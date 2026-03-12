import { useState } from "react";
import { registerUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export function useRegister() {
  const { setUser } = useAuth();
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
      const { user } = await registerUser(data);
      setUser(user);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  }

  return { register, isLoading, error };
}
