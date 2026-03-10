import { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuth } from "../context/AuthContext";

const AUTH_NAV_ITEMS = [
  { label: "Home", route: "/" },
  { label: "Recipes", route: "/recipes" },
  { label: "Groups", route: "/groups" },
  { label: "Shopping List", route: "/shopping-list" },
  { label: "My Kitchen", route: "/my-kitchen" },
];

const GUEST_NAV_ITEMS = [{ label: "Login / Sign Up", route: "/login" }];

const DARK_GREEN = "#2d5a27";
const WARM_WHITE = "#faf9f6";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { isAuthenticated } = useAuth();

  const navItems = isAuthenticated ? AUTH_NAV_ITEMS : GUEST_NAV_ITEMS;

  return (
    <>
      <AppBar position="sticky" elevation={1} sx={{ backgroundColor: WARM_WHITE }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between", px: 2 }}>
          {/* Logo */}
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: DARK_GREEN,
            }}
          >
            <RestaurantMenuIcon sx={{ color: DARK_GREEN }} />
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: DARK_GREEN, letterSpacing: 0.5 }}
            >
              KitchenSync
            </Typography>
          </Box>

          {/* Desktop nav */}
          {isDesktop ? (
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {navItems.map(({ label, route }) => (
                <Button
                  key={route}
                  component={NavLink}
                  to={route}
                  end={route === "/"}
                  sx={{
                    color: DARK_GREEN,
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    "&.active": {
                      fontWeight: 700,
                      textDecoration: "underline",
                      textUnderlineOffset: 4,
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              aria-label="open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: DARK_GREEN }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 240, pt: 2 }}>
          {navItems.map(({ label, route }) => (
            <ListItemButton
              key={route}
              component={NavLink}
              to={route}
              end={route === "/"}
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: DARK_GREEN,
                "&.active": {
                  fontWeight: 700,
                  backgroundColor: "rgba(45, 90, 39, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{ fontWeight: "inherit" }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
