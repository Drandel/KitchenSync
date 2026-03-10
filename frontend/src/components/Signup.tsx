import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
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
  requirementRowSx,
  requirementsClipSx,
  requirementsInnerSx,
  warningBoxSx,
  errorBoxSx,
  oauthButtonSx,
  AuthTextField,
  SubmitButton,
} from "../styles/authForms";
import type {
  AuthFormState,
  AuthFormAction,
} from "../reducers/authFormReducer";

function getPasswordRequirements(password: string) {
  return [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
  ];
}

export interface SignupFormProps {
  authFormData: AuthFormState;
  dispatch: React.Dispatch<AuthFormAction>;
  isLoading: boolean;
  warning: string | null;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleLogin: () => void;
  onToggleMode: () => void;
}

export default function SignupForm({
  authFormData,
  dispatch,
  isLoading,
  warning,
  error,
  onSubmit,
  onGoogleLogin,
  onToggleMode,
}: SignupFormProps) {
  const [hasPasswordFocused, setHasPasswordFocused] = useState(false);

  const passwordRequirements = getPasswordRequirements(authFormData.password);
  const allRequirementsMet = passwordRequirements.every((r) => r.met);
  const showRequirements = hasPasswordFocused && !allRequirementsMet;

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
        Create Your Account
      </Typography>
      <Typography variant="body2" sx={pageSubtitleSx}>
        Sign up to start saving &amp; sharing your favorite recipes.
      </Typography>

      {/* Unified card: cork top + cream bottom */}
      <Box sx={outerCardSx}>
        {/* Cork section: form fields + submit */}
        <Box component="form" onSubmit={onSubmit} noValidate sx={corkSectionSx}>
          <AuthTextField
            fullWidth
            placeholder="First Name"
            value={authFormData.firstName}
            onChange={(e) =>
              dispatch({ type: "firstNameUpdated", payload: e.target.value })
            }
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: ICON_BROWN }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <AuthTextField
            fullWidth
            placeholder="Last Name"
            value={authFormData.lastName}
            onChange={(e) =>
              dispatch({ type: "lastNameUpdated", payload: e.target.value })
            }
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: ICON_BROWN }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <AuthTextField
            fullWidth
            placeholder="Username"
            value={authFormData.username}
            onChange={(e) =>
              dispatch({ type: "usernameUpdated", payload: e.target.value })
            }
            required
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: ICON_BROWN }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <AuthTextField
            fullWidth
            type="email"
            placeholder="Email"
            value={authFormData.email}
            onChange={(e) =>
              dispatch({ type: "emailUpdated", payload: e.target.value })
            }
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

          <Box>
            <AuthTextField
              fullWidth
              type={authFormData.showPassword ? "text" : "password"}
              placeholder="Password"
              value={authFormData.password}
              onChange={(e) =>
                dispatch({ type: "passwordUpdated", payload: e.target.value })
              }
              onFocus={() => setHasPasswordFocused(true)}
              required
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      {allRequirementsMet
                        ? <LockIcon sx={{ color: ICON_BROWN }} />
                        : <LockOpenIcon sx={{ color: ICON_BROWN }} />
                      }
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          dispatch({ type: "passwordVisibilityToggled" })
                        }
                        edge="end"
                        size="small"
                        sx={{ color: ICON_BROWN }}
                        aria-label={
                          authFormData.showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {authFormData.showPassword
                          ? <VisibilityOffIcon />
                          : <VisibilityIcon />
                        }
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            {/* Clip container — overflow hidden collapses the space when hidden */}
            <Box sx={requirementsClipSx(showRequirements)}>
              {/* Inner box slides up/down to sell the "from behind" illusion */}
              <Box sx={requirementsInnerSx(showRequirements)}>
                {passwordRequirements.map(({ label, met }) => (
                  <Box key={label} sx={requirementRowSx}>
                    {met
                      ? <CheckIcon sx={{ fontSize: 14, color: DARK_GREEN }} />
                      : <CloseIcon sx={{ fontSize: 14, color: ERROR_RED }} />
                    }
                    <Typography
                      variant="caption"
                      sx={{ color: met ? DARK_GREEN : MUTED_GRAY }}
                    >
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

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
            Create Account
          </SubmitButton>
        </Box>

        {/* Cream/linen section: toggle link + OAuth + legal */}
        <Box sx={creamSectionSx}>
          <Typography variant="body2" sx={toggleTextSx}>
            Already have an account?{" "}
            <Link component="button" type="button" onClick={onToggleMode} sx={toggleLinkSx}>
              Log in
            </Link>
          </Typography>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: MUTED_GRAY }}>
              Or sign up with
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
            By signing up, you agree to the{" "}
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
