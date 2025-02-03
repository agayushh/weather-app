import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Cities from "./pages/Cities";
import Maps from "./pages/Maps";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
