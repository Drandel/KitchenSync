import { useState } from "react";
import Box from "@mui/material/Box";
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import LoginForm from "../components/Login";
import SignupForm from "../components/Signup";
import { pageWrapperSx } from "../styles/authForms";

type Mode = "signup" | "login";

interface AuthPageProps {
  defaultMode?: Mode;
}

export default function AuthPage({ defaultMode = "signup" }: AuthPageProps) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    isLoading: registerLoading,
    error: registerError,
  } = useRegister();
  const { login, isLoading: loginLoading, error: loginError } = useLogin();
  const { loginWithGoogle, isLoading: googleLoading } = useGoogleLogin();

  const isLoading = registerLoading || loginLoading || googleLoading;
  const error = registerError ?? loginError;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "signup") {
      await register({ firstName, lastName, email, password });
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
    setFirstName("");
    setLastName("");
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
    <Box sx={pageWrapperSx}>
      {mode === "signup" ? (
        <SignupForm
          {...sharedProps}
          firstName={firstName}
          lastName={lastName}
          onFirstNameChange={setFirstName}
          onLastNameChange={setLastName}
        />
      ) : (
        <LoginForm {...sharedProps} />
      )}
    </Box>
  );
}
