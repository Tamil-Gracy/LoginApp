import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "./components/Welcome";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard"; // ✅ import added

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#eef4f1] flex p-4">

        <Routes>
          <Route
            path="/login"
            element={
              <div className="w-full max-w-[1100px] min-h-[680px] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row mx-auto">
                <Welcome />
                <LoginForm />
              </div>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;