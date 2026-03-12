import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { AuthTextField, ICON_BROWN } from "../styles/authForms";

type StandardVariant = "firstName" | "lastName" | "username" | "email";

const VARIANT_CONFIG: Record<
  StandardVariant,
  { placeholder: string; type: string; Icon: React.ElementType }
> = {
  firstName: { placeholder: "First Name", type: "text", Icon: PersonIcon },
  lastName: { placeholder: "Last Name", type: "text", Icon: PersonIcon },
  username: { placeholder: "Username", type: "text", Icon: AccountCircleIcon },
  email: { placeholder: "Email", type: "email", Icon: EmailIcon },
};

interface StandardProps {
  variant: StandardVariant;
  value: string;
  onChange: (value: string) => void;
}

interface PasswordProps {
  variant: "password";
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
  onFocus: () => void;
  passwordValid: boolean;
}

type AuthTextInputProps = StandardProps | PasswordProps;

export default function AuthTextInput(props: AuthTextInputProps) {
  const { variant, value, onChange } = props;

  if (variant === "password") {
    const { showPassword, onTogglePassword, onFocus, passwordValid } = props;
    return (
      <AuthTextField
        fullWidth
        required
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {passwordValid ? (
                  <LockIcon sx={{ color: ICON_BROWN }} />
                ) : (
                  <LockOpenIcon sx={{ color: ICON_BROWN }} />
                )}
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
    );
  }

  const { placeholder, type, Icon } = VARIANT_CONFIG[variant];
  return (
    <AuthTextField
      fullWidth
      required
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Icon sx={{ color: ICON_BROWN }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
