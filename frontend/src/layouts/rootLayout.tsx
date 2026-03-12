import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import linenBackground from "../assets/linen-background.webp";

export default function RootLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: `url(${linenBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // iOS Safari does not support fixed background-attachment correctly;
        // fall back to scroll on mobile to avoid rendering bugs.
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      <NavBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
