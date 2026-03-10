import { useReducer, useState } from "react";
import Box from "@mui/material/Box";
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import LoginForm from "../components/Login";
import SignupForm from "../components/Signup";
import { pageWrapperSx } from "../styles/authForms";
import {
  authFormReducer,
  initialAuthFormState,
} from "../reducers/authFormReducer";

type Mode = "signup" | "login";

interface AuthPageProps {
  defaultMode?: Mode;
}

export default function AuthPage({ defaultMode = "signup" }: AuthPageProps) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [warning, setWarning] = useState<string | null>(null);
  const [formState, dispatch] = useReducer(
    authFormReducer,
    initialAuthFormState,
  );

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
      const { firstName, lastName, username, email, password } = formState;
      if (!firstName || !lastName || !username || !email || !password) {
        setWarning("Please fill out all fields.");
        return;
      }
      setWarning(null);
      await register({ firstName, lastName, username, email, password });
    } else {
      const { email, password } = formState;
      if (!email || !password) {
        setWarning("Please fill out all fields.");
        return;
      }
      setWarning(null);
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
    setWarning(null);
    dispatch({ type: "formReset" });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const sharedProps = {
    authFormData: formState,
    dispatch,
    isLoading,
    warning,
    error,
    onSubmit: handleSubmit,
    onGoogleLogin: handleGoogleLogin,
    onToggleMode: toggleMode,
  };

  return (
    <Box sx={pageWrapperSx}>
      {mode === "signup" ? (
        <SignupForm {...sharedProps} />
      ) : (
        <LoginForm {...sharedProps} />
      )}
    </Box>
  );
}
