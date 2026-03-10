import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import GoogleG from "./GoogleG";
import AuthTextInput from "./AuthTextInput";
import {
  DARK_GREEN,
  MUTED_GRAY,
  ERROR_RED,
  WARNING_AMBER,
  outerCardSx,
  corkSectionSx,
  creamSectionSx,
  logoBoxSx,
  logoTextSx,
  pageTitleSx,
  pageSubtitleSx,
  toggleTextSx,
  toggleLinkSx,
  legalTextSx,
  legalLinkSx,
  warningBoxSx,
  errorBoxSx,
  oauthButtonSx,
  SubmitButton,
} from "../styles/authForms";
import type {
  AuthFormState,
  AuthFormAction,
} from "../reducers/authFormReducer";

export interface LoginFormProps {
  authFormData: AuthFormState;
  dispatch: React.Dispatch<AuthFormAction>;
  isLoading: boolean;
  warning: string | null;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleLogin: () => void;
  onToggleMode: () => void;
}

export default function LoginForm({
  authFormData,
  dispatch,
  isLoading,
  warning,
  error,
  onSubmit,
  onGoogleLogin,
  onToggleMode,
}: LoginFormProps) {
  return (
    <>
      <Box sx={logoBoxSx}>
        <RestaurantMenuIcon sx={{ fontSize: 28 }} />
        <Typography variant="h6" fontWeight={700} sx={logoTextSx}>
          KitchenSync
        </Typography>
      </Box>

      <Typography variant="h4" fontWeight={700} sx={pageTitleSx}>
        Welcome Back
      </Typography>
      <Typography variant="body2" sx={pageSubtitleSx}>
        Sign in to continue to KitchenSync.
      </Typography>

      <Box sx={outerCardSx}>
        <Box component="form" onSubmit={onSubmit} noValidate sx={corkSectionSx}>
          <AuthTextInput
            variant="email"
            value={authFormData.email}
            onChange={(val) => dispatch({ type: "emailUpdated", payload: val })}
          />

          <AuthTextInput
            variant="password"
            value={authFormData.password}
            onChange={(val) =>
              dispatch({ type: "passwordUpdated", payload: val })
            }
            showPassword={authFormData.showPassword}
            onTogglePassword={() =>
              dispatch({ type: "passwordVisibilityToggled" })
            }
            onFocus={() => {}}
            passwordValid={true}
          />

          {warning && (
            <Box sx={warningBoxSx}>
              <Typography variant="caption" sx={{ color: WARNING_AMBER }}>
                {warning}
              </Typography>
            </Box>
          )}

          {error && (
            <Box sx={errorBoxSx}>
              <Typography variant="caption" sx={{ color: ERROR_RED }}>
                {error}
              </Typography>
            </Box>
          )}

          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
          >
            Sign In
          </SubmitButton>
        </Box>

        <Box sx={creamSectionSx}>
          <Typography variant="body2" sx={toggleTextSx}>
            Don't have an account?{" "}
            <Link
              component="button"
              type="button"
              onClick={onToggleMode}
              sx={toggleLinkSx}
            >
              Sign up
            </Link>
          </Typography>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: MUTED_GRAY }}>
              Or sign in with
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleG />}
            onClick={onGoogleLogin}
            disabled={isLoading}
            sx={oauthButtonSx}
          >
            Continue with Google
          </Button>

          <Typography variant="caption" sx={legalTextSx}>
            By signing in, you agree to the{" "}
            <Link href="#" underline="hover" sx={legalLinkSx}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" sx={legalLinkSx}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
