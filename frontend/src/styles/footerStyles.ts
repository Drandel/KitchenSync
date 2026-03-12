import { SxProps, Theme } from "@mui/material";
import corkTexture from "../assets/cork_texture.webp";

export const footerWrapperSx: SxProps<Theme> = {
  backgroundImage: `url(${corkTexture})`,
  backgroundSize: "auto",
  py: 3,
  px: 2,
  textAlign: "center",
};

export const footerLinkRowSx: SxProps<Theme> = {
  color: "#f0ebe0",
  display: "block",
};

export const footerLinkSx: SxProps<Theme> = {
  color: "#faf7f0",
  fontWeight: 700,
};

export const footerCopyrightSx: SxProps<Theme> = {
  color: "#faf7f0",
  mt: 0.5,
  display: "block",
};
