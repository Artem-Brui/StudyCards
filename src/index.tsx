import { createRoot } from "react-dom/client";
import "./styles/style.scss";
import { StrictMode } from "react";
import RouterComponent from "./app/router/RouterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
