import { HashRouter as Router, Route, Routes } from "react-router-dom";
import StudyModePage from "@/pages/StudyModePage/StudyModePage";
import { CardsPage } from "@/pages/CardsPage/CardsPage";
import RootLayout from "./RootLayout";

function RouterProvider() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<StudyModePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<p>Unknow Page</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterProvider;
