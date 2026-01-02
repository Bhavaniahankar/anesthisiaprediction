import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import ReportPage from "./Component/ReportPage";
import MedicalDetailsPage from "./Component/MedicalDetailsPage";
import ReportAnalysisPage from "./Component/ReportAnalysisPage";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/medical-details" element={<MedicalDetailsPage />} />
        <Route path="/report-analysis" element={<ReportAnalysisPage />} />
        <Route path="/report-page" element={<ReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
