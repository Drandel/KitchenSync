import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
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
  requirementRowSx,
  requirementsClipSx,
  requirementsInnerSx,
  warningBoxSx,
  errorBoxSx,
  oauthButtonSx,
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
      <Box sx={logoBoxSx}>
        <RestaurantMenuIcon sx={{ fontSize: 28 }} />
        <Typography variant="h6" fontWeight={700} sx={logoTextSx}>
          KitchenSync
        </Typography>
      </Box>

      <Typography variant="h4" fontWeight={700} sx={pageTitleSx}>
        Create Your Account
      </Typography>
      <Typography variant="body2" sx={pageSubtitleSx}>
        Sign up to start saving &amp; sharing your favorite recipes.
      </Typography>

      <Box sx={outerCardSx}>
        <Box component="form" onSubmit={onSubmit} noValidate sx={corkSectionSx}>
          <AuthTextInput
            variant="firstName"
            value={authFormData.firstName}
            onChange={(val) =>
              dispatch({ type: "firstNameUpdated", payload: val })
            }
          />

          <AuthTextInput
            variant="lastName"
            value={authFormData.lastName}
            onChange={(val) =>
              dispatch({ type: "lastNameUpdated", payload: val })
            }
          />

          <AuthTextInput
            variant="username"
            value={authFormData.username}
            onChange={(val) =>
              dispatch({ type: "usernameUpdated", payload: val })
            }
          />

          <AuthTextInput
            variant="email"
            value={authFormData.email}
            onChange={(val) => dispatch({ type: "emailUpdated", payload: val })}
          />

          <Box>
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
              onFocus={() => setHasPasswordFocused(true)}
              passwordValid={allRequirementsMet}
            />
            <Box sx={requirementsClipSx(showRequirements)}>
              <Box sx={requirementsInnerSx(showRequirements)}>
                {passwordRequirements.map(({ label, met }) => (
                  <Box key={label} sx={requirementRowSx}>
                    {met ? (
                      <CheckIcon sx={{ fontSize: 14, color: DARK_GREEN }} />
                    ) : (
                      <CloseIcon sx={{ fontSize: 14, color: ERROR_RED }} />
                    )}
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

        <Box sx={creamSectionSx}>
          <Typography variant="body2" sx={toggleTextSx}>
            Already have an account?{" "}
            <Link
              component="button"
              type="button"
              onClick={onToggleMode}
              sx={toggleLinkSx}
            >
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
