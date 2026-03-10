import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import GoogleG from "./GoogleG";
import {
  DARK_GREEN,
  ICON_BROWN,
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
  AuthTextField,
  SubmitButton,
} from "../styles/authForms";
import type { AuthFormState, AuthFormAction } from "../reducers/authFormReducer";

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
      {/* Logo */}
      <Box sx={logoBoxSx}>
        <RestaurantMenuIcon sx={{ fontSize: 28 }} />
        <Typography variant="h6" fontWeight={700} sx={logoTextSx}>
          KitchenSync
        </Typography>
      </Box>

      {/* Title */}
      <Typography variant="h4" fontWeight={700} sx={pageTitleSx}>
        Welcome Back
      </Typography>
      <Typography variant="body2" sx={pageSubtitleSx}>
        Sign in to continue to KitchenSync.
      </Typography>

      {/* Unified card: cork top + cream bottom */}
      <Box sx={outerCardSx}>
        {/* Cork section: form fields + submit */}
        <Box component="form" onSubmit={onSubmit} noValidate sx={corkSectionSx}>
          <AuthTextField
            fullWidth
            type="email"
            placeholder="Email"
            value={authFormData.email}
            onChange={(e) => dispatch({ type: "emailUpdated", payload: e.target.value })}
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: ICON_BROWN }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <AuthTextField
            fullWidth
            type={authFormData.showPassword ? "text" : "password"}
            placeholder="Password"
            value={authFormData.password}
            onChange={(e) => dispatch({ type: "passwordUpdated", payload: e.target.value })}
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: ICON_BROWN }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => dispatch({ type: "passwordVisibilityToggled" })}
                      edge="end"
                      size="small"
                      sx={{ color: ICON_BROWN }}
                      aria-label={authFormData.showPassword ? "Hide password" : "Show password"}
                    >
                      {authFormData.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
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

          <SubmitButton type="submit" fullWidth variant="contained" disabled={isLoading}>
            Sign In
          </SubmitButton>
        </Box>

        {/* Cream/linen section: toggle link + OAuth + legal */}
        <Box sx={creamSectionSx}>
          <Typography variant="body2" sx={toggleTextSx}>
            Don't have an account?{" "}
            <Link component="button" type="button" onClick={onToggleMode} sx={toggleLinkSx}>
              Sign up
            </Link>
          </Typography>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: MUTED_GRAY }}>
              Or sign in with
            </Typography>
          </Divider>

          <Button fullWidth variant="outlined" startIcon={<GoogleG />} onClick={onGoogleLogin} disabled={isLoading} sx={oauthButtonSx}>
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
