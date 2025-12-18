import { createRoot } from "react-dom/client";
import "./styles/style.scss";
import App from "./App.tsx";
import { StrictMode } from "react";
import {
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import { StudyMode } from "./components/pages/StudyMode/StudyMode.tsx";
import { AllCards } from "./components/pages/Cards/AllCards.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StudyMode />} />
          <Route path="cards" element={<AllCards />} />
          <Route path="*" element={<p>Unknow Page</p>} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
