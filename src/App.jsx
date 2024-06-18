import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./components/views/applicationViews";
import { Login } from "./components/auth/login";

import { Authorized } from "./components/views/authorized";
import { Register } from "./components/auth/register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  )
}

export default App;
