import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Ads } from "./screens/Ads/Ads";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Ads />
  </StrictMode>,
);
