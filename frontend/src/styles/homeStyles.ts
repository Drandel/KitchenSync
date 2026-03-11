import { SxProps, Theme } from "@mui/material";
import corkTexture from "../assets/cork_texture.webp";
import { DARK_GREEN, ICON_BROWN, SUBTITLE_GRAY, CARD_LABEL_DARK } from "./tokens";

// ── Hero Section ──────────────────────────────────────────────────────────────

export const heroSectionSx: SxProps<Theme> = {
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  pt: { xs: 6, md: 10 },
  pb: { xs: 5, md: 8 },
  px: 2,
};

export const heroAppNameSx: SxProps<Theme> = {
  color: DARK_GREEN,
  fontWeight: 800,
  fontSize: { xs: "3rem", md: "4.5rem" },
  lineHeight: 1.1,
  mb: 1.5,
};

export const heroHeadlineSx: SxProps<Theme> = {
  color: DARK_GREEN,
  fontWeight: 700,
  fontSize: { xs: "1.25rem", md: "1.75rem" },
  mb: 2,
  maxWidth: 640,
};

export const heroBodySx: SxProps<Theme> = {
  color: SUBTITLE_GRAY,
  fontSize: { xs: "0.95rem", md: "1.05rem" },
  lineHeight: 1.7,
  mb: 4,
  maxWidth: 520,
};

export const heroFreeNoteSx: SxProps<Theme> = {
  color: SUBTITLE_GRAY,
  fontSize: "0.9rem",
  mt: 1.5,
};

export const heroCTAButtonSx: SxProps<Theme> = {
  px: 6,
  fontSize: "1.05rem",
};

// ── Cork Band (Recipe Cards) ──────────────────────────────────────────────────
// The cork sash is absolutely positioned so cards can overflow above and below it.

export const corkBandWrapperSx: SxProps<Theme> = {
  position: "relative",
  px: { xs: 1.5, md: 3 },
  pb: 3,
};

// Cork ends partway up so the card labels float below it.
// Adjust `bottom` to control how much of the card overlaps below the cork.
// Negative `top` intentionally bleeds into the hero section above —
// do NOT add overflow:hidden to corkBandWrapperSx or the bleed will be clipped.
export const corkSashSx: SxProps<Theme> = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: { xs: "2.5rem", md: "3rem" },
  top: { xs: "-1rem", md: "-1.5rem" },
  backgroundImage: `url(${corkTexture})`,
  backgroundSize: "auto",
};

export const recipeGridSx: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
  gap: { xs: 1.5, md: 2 },
  maxWidth: 960,
  mx: "auto",
  position: "relative",
  zIndex: 1,
};

export const recipeCardSx: SxProps<Theme> = {
  borderRadius: 2,
  overflow: "hidden",
  backgroundColor: "#fff",
  cursor: "pointer",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  border: "1px solid #a68d61",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.22)",
  },
};

export const recipeCardImageAreaSx: SxProps<Theme> = {
  width: "100%",
  aspectRatio: "4/3",
  display: "block",
  objectFit: "cover",
  overflow: "hidden",
};

export const recipeCardLabelSx: SxProps<Theme> = {
  px: 1.5,
  py: 1,
  fontSize: { xs: "0.78rem", md: "0.88rem" },
  fontWeight: 600,
  color: CARD_LABEL_DARK,
};

// ── Features Section ──────────────────────────────────────────────────────────

export const featuresSectionSx: SxProps<Theme> = {
  py: { xs: 6, md: 8 },
  px: { xs: 2, md: 4 },
};

export const featuresRowSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  maxWidth: 900,
  mx: "auto",
  gap: { xs: 5, sm: 0 },
};

export const featureColumnSx: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  px: { xs: 0, sm: 3 },
};

export const featureDividerSx: SxProps<Theme> = {
  display: { xs: "none", sm: "block" },
  width: "1px",
  backgroundColor: "#d4cfc7",
  alignSelf: "stretch",
  my: 1,
};

export const featureIconSx: SxProps<Theme> = {
  fontSize: "2.5rem",
  color: ICON_BROWN,
  mb: 1.5,
};

export const featureTitleSx: SxProps<Theme> = {
  color: DARK_GREEN,
  fontWeight: 700,
  fontSize: "1.05rem",
  mb: 1,
};

export const featureDescSx: SxProps<Theme> = {
  color: SUBTITLE_GRAY,
  fontSize: "0.88rem",
  lineHeight: 1.65,
};
