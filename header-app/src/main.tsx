import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header";
import "./index.css";
import { ThemeInit } from "../.flowbite-react/init";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <Header />
  </StrictMode>,
);
