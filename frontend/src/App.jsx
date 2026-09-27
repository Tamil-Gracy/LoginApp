import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard"; // ✅ import added

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#eef4f1] flex p-4">

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;