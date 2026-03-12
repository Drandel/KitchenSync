import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f0ebe0",
        borderTop: "1px solid #e0d8cc",
        py: 3,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="caption" sx={{ color: "#888", display: "block" }}>
        <Link href="#" underline="hover" sx={{ color: "#555", fontWeight: 700, mr: 1 }}>
          Terms of Service
        </Link>
        ·
        <Link href="#" underline="hover" sx={{ color: "#555", fontWeight: 700, ml: 1 }}>
          Privacy Policy
        </Link>
      </Typography>
      <Typography variant="caption" sx={{ color: "#aaa", mt: 0.5, display: "block" }}>
        © {new Date().getFullYear()} KitchenSync. All rights reserved.
      </Typography>
    </Box>
  );
}
