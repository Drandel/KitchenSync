import { useState } from "react";

export function useGoogleLogin() {
  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);

  async function loginWithGoogle(_googleToken: string) {
    // TODO: implement when Google SSO is added
  }

  return { loginWithGoogle, isLoading, error };
}
