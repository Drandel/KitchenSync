import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<AuthPage defaultMode="login" />} />
      <Route path="signup" element={<AuthPage defaultMode="signup" />} />
    </Route>
  )
);
