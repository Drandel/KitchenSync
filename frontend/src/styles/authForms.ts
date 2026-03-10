import { SxProps, Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import corkTexture from "../assets/cork_texture.webp";

export const DARK_GREEN = "#2d5a27";
export const ICON_BROWN = "#8b7355";
export const LINEN = "#f0ebe0";

// ── Layout sx objects ────────────────────────────────────────────────────────

export const pageWrapperSx: SxProps<Theme> = {
  flexGrow: 1,
  backgroundColor: LINEN,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  py: 6,
  px: 2,
};

export const outerCardSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 480,
  borderRadius: 3,
  overflow: "hidden",
};

export const corkSectionSx: SxProps<Theme> = {
  backgroundImage: `url(${corkTexture})`,
  backgroundSize: "auto",
  p: 3,
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
};

export const creamSectionSx: SxProps<Theme> = {
  backgroundColor: "#faf7f0",
  p: 3,
};

export const oauthButtonSx: SxProps<Theme> = {
  backgroundColor: "#fff",
  borderColor: "#dadce0",
  color: "#3c4043",
  textTransform: "none",
  fontWeight: 500,
  py: 1,
  "&:hover": { backgroundColor: "#f8f9fa", borderColor: "#dadce0" },
};

// ── Styled components ────────────────────────────────────────────────────────

export const AuthTextField = styled(TextField)({
  backgroundColor: "#faf7f0",
  borderRadius: "4px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" },
  },
});

export const SubmitButton = styled(Button)({
  backgroundColor: DARK_GREEN,
  color: "#fff",
  fontWeight: 700,
  fontSize: "1rem",
  textTransform: "none",
  paddingTop: "10px",
  paddingBottom: "10px",
  borderRadius: "6px",
  "&:hover": { backgroundColor: "#1e3d1b" },
  "&.Mui-disabled": { backgroundColor: DARK_GREEN, color: "#fff", opacity: 0.6 },
});
