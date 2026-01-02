import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReportAnalysisPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      navigate("/report-page");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Upload EDF File</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".edf"
            onChange={handleFileChange}
            className="w-full p-2 border rounded mb-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            disabled={!file}
          >
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportAnalysisPage;
