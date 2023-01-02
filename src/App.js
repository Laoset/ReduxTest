//Permite consumir el estado del STORE
// import {useSelector, useDispatch} from 'react-redux'
//Me traigo mi action creator 
// import { setUser, unsetUser } from './reducers/user/userSlice';
import {FormularioLogin}  from "./sections/formulario";
import {NavBar}  from "./sections/home";
import { Cart } from "./sections/cart";

//Componetes de Router
import {Routes, Route, useLocation} from 'react-router-dom'
import TrueHome from "./sections/trueHome";
import { useState } from "react";
import RegisterForm from "./sections/registerForm";


function App() {
  const location = useLocation();
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div>
      <div>
        {location.pathname === '/'? null : <NavBar/> }
      </div>
      <Routes>
        <Route path="/" element={currentForm === 'login' ? <FormularioLogin onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />} />
        <Route path="/home" element={<TrueHome />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div> 
  );
}

export default App;
