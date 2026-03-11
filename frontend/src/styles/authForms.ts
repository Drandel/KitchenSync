import { SxProps, Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import corkTexture from "../assets/cork_texture.webp";

// ── Colors ────────────────────────────────────────────────────────────────────
// Defined in tokens.ts — imported for local use and re-exported for backward compatibility.

import {
  DARK_GREEN,
  ICON_BROWN,
  LINEN,
  ERROR_RED,
  WARNING_AMBER,
  MUTED_GRAY,
  SUBTITLE_GRAY,
  LEGAL_LINK_GRAY,
} from "./tokens";

export {
  DARK_GREEN,
  ICON_BROWN,
  LINEN,
  ERROR_RED,
  WARNING_AMBER,
  MUTED_GRAY,
  SUBTITLE_GRAY,
  LEGAL_LINK_GRAY,
} from "./tokens";

// ── Page layout ──────────────────────────────────────────────────────────────

export const pageWrapperSx: SxProps<Theme> = {
  flexGrow: 1,
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  py: 6,
  px: 2,
};

// ── Header (logo + title + subtitle) ─────────────────────────────────────────

export const logoBoxSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  mb: 2,
  color: DARK_GREEN,
};

export const logoTextSx: SxProps<Theme> = {
  color: DARK_GREEN,
  letterSpacing: 0.5,
};

export const pageTitleSx: SxProps<Theme> = {
  color: DARK_GREEN,
  textAlign: "center",
  mb: 1,
  maxWidth: 420,
};

export const pageSubtitleSx: SxProps<Theme> = {
  color: SUBTITLE_GRAY,
  mb: 3,
  textAlign: "center",
};

// ── Card sections ─────────────────────────────────────────────────────────────

export const outerCardSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: 480,
  borderRadius: 3,
  overflow: "hidden",
  border: "1px solid #d3d3d3",
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

// ── Cream section content ─────────────────────────────────────────────────────

export const toggleTextSx: SxProps<Theme> = {
  textAlign: "center",
  color: DARK_GREEN,
  fontWeight: 600,
  mb: 2,
};

export const toggleLinkSx: SxProps<Theme> = {
  color: DARK_GREEN,
  fontWeight: 700,
};

export const legalTextSx: SxProps<Theme> = {
  display: "block",
  textAlign: "center",
  color: MUTED_GRAY,
  mt: 2,
};

export const legalLinkSx: SxProps<Theme> = {
  color: LEGAL_LINK_GRAY,
  fontWeight: 700,
};

// ── Password requirements ─────────────────────────────────────────────────────

export const passwordRequirementsBoxSx: SxProps<Theme> = {
  backgroundColor: "rgba(250, 247, 240, 0.75)",
  borderRadius: "0 0 4px 4px",
  px: 1.5,
  py: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
};

export const requirementRowSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const requirementsClipSx = (show: boolean): SxProps<Theme> => ({
  overflow: "hidden",
  maxHeight: show ? "200px" : "0px",
  transition: "max-height 0.3s ease",
});

export const requirementsInnerSx = (show: boolean): SxProps<Theme> => ({
  ...passwordRequirementsBoxSx,
  transform: show ? "translateY(0)" : "translateY(-100%)",
  transition: "transform 0.3s ease",
});

// ── Feedback boxes ────────────────────────────────────────────────────────────

export const warningBoxSx: SxProps<Theme> = {
  backgroundColor: "#fffbeb",
  border: "1px solid #fcd34d",
  borderRadius: "4px",
  px: 1.5,
  py: 1,
};

export const errorBoxSx: SxProps<Theme> = {
  backgroundColor: "#fef2f2",
  border: "1px solid #fca5a5",
  borderRadius: "4px",
  px: 1.5,
  py: 1,
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
