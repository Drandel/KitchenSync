import { useState } from "react";
import Box from "@mui/material/Box";
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import LoginForm from "../components/Login";
import SignupForm from "../components/Signup";

const LINEN = "#f0ebe0";

type Mode = "signup" | "login";

interface AuthPageProps {
  defaultMode?: Mode;
}

export default function AuthPage({ defaultMode = "signup" }: AuthPageProps) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, isLoading: registerLoading, error: registerError } = useRegister();
  const { login, isLoading: loginLoading, error: loginError } = useLogin();
  const { loginWithGoogle, isLoading: googleLoading } = useGoogleLogin();

  const isLoading = registerLoading || loginLoading || googleLoading;
  const error = registerError ?? loginError;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "signup") {
      await register({ fullName, email, password });
    } else {
      await login({ email, password });
    }
    // TODO: navigate to "/" on success once auth backend is live
  }

  async function handleGoogleLogin() {
    // TODO: replace stub token with real Google OAuth flow token
    await loginWithGoogle("stub-google-token");
  }

  function toggleMode() {
    setMode((prev) => (prev === "signup" ? "login" : "signup"));
    setFullName("");
    setEmail("");
    setPassword("");
  }

  const sharedProps = {
    email,
    onEmailChange: setEmail,
    password,
    onPasswordChange: setPassword,
    showPassword,
    onTogglePassword: () => setShowPassword((v) => !v),
    isLoading,
    error,
    onSubmit: handleSubmit,
    onGoogleLogin: handleGoogleLogin,
    onToggleMode: toggleMode,
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: LINEN,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6,
        px: 2,
      }}
    >
      {mode === "signup" ? (
        <SignupForm {...sharedProps} fullName={fullName} onFullNameChange={setFullName} />
      ) : (
        <LoginForm {...sharedProps} />
      )}
    </Box>
  );
}
