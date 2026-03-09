import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
