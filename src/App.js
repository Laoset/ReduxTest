import {FormularioLogin}  from "./sections/loginForm";
import {NavBar}  from "./sections/navBar";
import { Cart } from "./sections/cart";

//Componetes de Router
import {Routes, Route, useLocation} from 'react-router-dom'
import TrueHome from "./sections/displayProducts";
import { useState } from "react";
import RegisterForm from "./sections/registerForm";
import ElectroCategory from "./components/electroCategory";
import IndumentariaCategoria from "./components/indumentariaCategoria";
import HogarCategoria from "./components/hogarCategoria";
import DeporteCategory from "./components/deporteCategory";


function App() {
  const location = useLocation();
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  

  return (
    <div className="bg-fondoEpic'">
        {location.pathname === '/'? null : <NavBar/> }
      <Routes>
        <Route path="/" element={currentForm === 'login' ? <FormularioLogin onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />} />
        <Route path="/home" element={<TrueHome />} />
        <Route path="/catElectro" element={<ElectroCategory />} />
        <Route path="/catIndumen" element={<IndumentariaCategoria />} />
        <Route path="/catHogar" element={<HogarCategoria />} />
        <Route path="/catDeporte" element={<DeporteCategory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div> 
  );
}

export default App;
