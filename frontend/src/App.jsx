import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard Page */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Upload Page */}
        <Route
          path="/upload"
          element={<Upload />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;