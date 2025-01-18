import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Lenis from "lenis";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { HelmetProvider } from "react-helmet-async";

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={Router} />
    </HelmetProvider>
  </StrictMode>
);
