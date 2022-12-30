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


function App() {
  const location = useLocation();
  // const dispatch= useDispatch()
  //Este codigo me permite consumir lo que necesite de mi estado global!
  // const {email} = useSelector(state=> state.user);
  return (
    <div>
      <div>
        {location.pathname === '/'? null : <NavBar/> }
      </div>
      <Routes>
        <Route path="/" element={<FormularioLogin />} />
        <Route path="/home" element={<TrueHome />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div> 
  );
}

export default App;
