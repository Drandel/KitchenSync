import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import GoogleG from "./GoogleG";
import AuthTextInput from "./AuthTextInput";
import * as Sx from "../styles/authForms";
import { SubmitButton } from "../styles/authForms";
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
      <Box sx={Sx.logoBoxSx}>
        <RestaurantMenuIcon sx={{ fontSize: 28 }} />
        <Typography variant="h6" fontWeight={700} sx={Sx.logoTextSx}>
          KitchenSync
        </Typography>
      </Box>

      <Typography variant="h4" fontWeight={700} sx={Sx.pageTitleSx}>
        Welcome Back
      </Typography>
      <Typography variant="body2" sx={Sx.pageSubtitleSx}>
        Sign in to continue to KitchenSync.
      </Typography>

      <Box sx={Sx.outerCardSx}>
        <Box
          component="form"
          onSubmit={onSubmit}
          noValidate
          sx={Sx.corkSectionSx}
        >
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
            <Box sx={Sx.warningBoxSx}>
              <Typography variant="caption" sx={{ color: Sx.WARNING_AMBER }}>
                {warning}
              </Typography>
            </Box>
          )}

          {error && (
            <Box sx={Sx.errorBoxSx}>
              <Typography variant="caption" sx={{ color: Sx.ERROR_RED }}>
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

        <Box sx={Sx.creamSectionSx}>
          <Typography variant="body2" sx={Sx.toggleTextSx}>
            Don't have an account?{" "}
            <Link
              component="button"
              type="button"
              onClick={onToggleMode}
              sx={Sx.toggleLinkSx}
            >
              Sign up
            </Link>
          </Typography>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: Sx.MUTED_GRAY }}>
              Or sign in with
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleG />}
            onClick={onGoogleLogin}
            disabled={isLoading}
            sx={Sx.oauthButtonSx}
          >
            Continue with Google
          </Button>

          <Typography variant="caption" sx={Sx.legalTextSx}>
            By signing in, you agree to the{" "}
            <Link href="#" underline="hover" sx={Sx.legalLinkSx}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" sx={Sx.legalLinkSx}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
