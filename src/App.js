import { FormularioLogin } from "./sections/loginForm";
import { NavBar } from "./sections/navBar";
import { Cart } from "./sections/cart";

//Componetes de Router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import TrueHome from "./sections/displayProducts";
import { useEffect, useState } from "react";
import RegisterForm from "./sections/registerForm";
import ElectroCategory from "./components/electroCategory";
import IndumentariaCategoria from "./components/indumentariaCategoria";
import HogarCategoria from "./components/hogarCategoria";
import DeporteCategory from "./components/deporteCategory";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  useEffect(() => {
    let id = localStorage.getItem("sesion");
    if (id) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      {location.pathname === "/" ? null : (
        <header className="w-full h-40 bg-[#2d2d2d] ">
          <NavBar />
        </header>
      )}
      <main className="w-full h-fit bg-[#ebebeb] ">
        <Routes>
          <Route
            path="/"
            element={
              currentForm === "login" ? (
                <FormularioLogin onFormSwitch={toggleForm} />
              ) : (
                <RegisterForm onFormSwitch={toggleForm} />
              )
            }
          />
          <Route path="/home" element={<TrueHome />} />
          <Route path="/catElectro" element={<ElectroCategory />} />
          <Route path="/catIndumen" element={<IndumentariaCategoria />} />
          <Route path="/catHogar" element={<HogarCategoria />} />
          <Route path="/catDeporte" element={<DeporteCategory />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
