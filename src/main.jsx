import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PageContainer from "./components/layout/PageContainer.jsx";
import DocsPage from "./pages/DocsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipesPage from "./pages/RecipesPage.jsx";
import "./styles.css";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recipes",
    element: <RecipesPage />,
  },
  {
    path: "/docs/:directory/:file",
    element: <DocsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageContainer>
      <RouterProvider router={router} />
    </PageContainer>
  </StrictMode>
);
