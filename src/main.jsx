import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipesPage from "./pages/RecipesPage.jsx";
import DocsPage from "./pages/DocsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageContainer from "./components/PageContainer.jsx";

const router = createBrowserRouter([
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
