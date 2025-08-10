import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import "./index.css";

import { ProductsList } from "./pages/ProductsList/ProductsList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <ProductsList />
  </StrictMode>,
);
