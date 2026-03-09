import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}
