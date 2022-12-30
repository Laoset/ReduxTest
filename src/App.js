//Permite consumir el estado del STORE
// import {useSelector, useDispatch} from 'react-redux'
//Me traigo mi action creator 
// import { setUser, unsetUser } from './reducers/user/userSlice';
import {FormularioLogin}  from "./sections/formulario";
import {Home}  from "./sections/home";
import { Cart } from "./sections/cart";

//Componetes de Router
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  // const dispatch= useDispatch()
  //Este codigo me permite consumir lo que necesite de mi estado global!
  // const {email} = useSelector(state=> state.user);
  return (
    <div>
      <Link className="text-2xl font-bold mx-2" to='/'>Login</Link>
      <Link className="text-2xl font-bold mx-2" to='/home'>Home</Link>
      <Link className="text-2xl font-bold mx-2" to='/cart'>Cart</Link>
      <Routes>
        <Route path="/" element={<FormularioLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
