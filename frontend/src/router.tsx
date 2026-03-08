import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import HomePage from "./pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "some-route", element: <SomePage /> },
    ],
  },
]);
