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
  outerCardSx,
  corkSectionSx,
  creamSectionSx,
  oauthButtonSx,
  AuthTextField,
  SubmitButton,
} from "../styles/authForms";

export interface LoginFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
  isLoading: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleLogin: () => void;
  onToggleMode: () => void;
}

export default function LoginForm({
  email,
  onEmailChange,
  password,
  onPasswordChange,
  showPassword,
  onTogglePassword,
  isLoading,
  error,
  onSubmit,
  onGoogleLogin,
  onToggleMode,
}: LoginFormProps) {
  return (
    <>
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, color: DARK_GREEN }}>
        <RestaurantMenuIcon sx={{ fontSize: 28 }} />
        <Typography variant="h6" fontWeight={700} sx={{ color: DARK_GREEN, letterSpacing: 0.5 }}>
          KitchenSync
        </Typography>
      </Box>

      {/* Title */}
      <Typography variant="h4" fontWeight={700} sx={{ color: DARK_GREEN, textAlign: "center", mb: 1, maxWidth: 420 }}>
        Welcome Back
      </Typography>
      <Typography variant="body2" sx={{ color: "#6b6b6b", mb: 3, textAlign: "center" }}>
        Sign in to continue to KitchenSync.
      </Typography>

      {/* Unified card: cork top + cream bottom */}
      <Box sx={outerCardSx}>
        {/* Cork section: form fields + submit */}
        <Box component="form" onSubmit={onSubmit} sx={corkSectionSx}>
          <AuthTextField
            fullWidth
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
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
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
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
                      onClick={onTogglePassword}
                      edge="end"
                      size="small"
                      sx={{ color: ICON_BROWN }}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          {error && (
            <Typography variant="caption" sx={{ color: "#c0392b" }}>
              {error}
            </Typography>
          )}

          <SubmitButton type="submit" fullWidth variant="contained" disabled={isLoading}>
            Sign In
          </SubmitButton>
        </Box>

        {/* Cream/linen section: toggle link + OAuth + legal */}
        <Box sx={creamSectionSx}>
          <Typography variant="body2" sx={{ textAlign: "center", color: DARK_GREEN, fontWeight: 600, mb: 2 }}>
            Don't have an account?{" "}
            <Link component="button" type="button" onClick={onToggleMode} sx={{ color: DARK_GREEN, fontWeight: 700 }}>
              Sign up
            </Link>
          </Typography>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: "#888" }}>
              Or sign in with
            </Typography>
          </Divider>

          <Button fullWidth variant="outlined" startIcon={<GoogleG />} onClick={onGoogleLogin} disabled={isLoading} sx={oauthButtonSx}>
            Continue with Google
          </Button>

          <Typography variant="caption" sx={{ display: "block", textAlign: "center", color: "#888", mt: 2 }}>
            By signing in, you agree to the{" "}
            <Link href="#" underline="hover" sx={{ color: "#555", fontWeight: 700 }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" sx={{ color: "#555", fontWeight: 700 }}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
