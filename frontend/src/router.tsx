import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <AuthPage defaultMode="login" /> },
      { path: "signup", element: <AuthPage defaultMode="signup" /> },
    ],
  },
]);
