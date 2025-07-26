import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Protectedroute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protectedroute>
                <Home />
              </Protectedroute>
            }
          />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<RegisterAndLogout/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='*' element={<NotFound/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
