import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as Sx from "../styles/footerStyles";

export default function Footer() {
  return (
    <Box component="footer" sx={Sx.footerWrapperSx}>
      <Typography variant="caption" sx={Sx.footerLinkRowSx}>
        <Link href="#!" underline="hover" sx={{ ...Sx.footerLinkSx, mr: 1 }}>
          Terms of Service
        </Link>
        ·
        <Link href="#!" underline="hover" sx={{ ...Sx.footerLinkSx, ml: 1 }}>
          Privacy Policy
        </Link>
      </Typography>
      <Typography variant="caption" sx={Sx.footerCopyrightSx}>
        © {new Date().getFullYear()} KitchenSync. All rights reserved.
      </Typography>
    </Box>
  );
}
