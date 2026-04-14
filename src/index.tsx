import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <Desktop />
    </LanguageProvider>
  </StrictMode>,
);
