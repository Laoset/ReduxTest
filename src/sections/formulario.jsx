import Axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/user/userSlice";
//Este ref me permite pasar una referencia de un elemento, como un QuerySelector del document
import {useRef} from 'react'
//Router dom
import {useNavigate} from 'react-router-dom'

export const FormularioLogin = ()=>{
    //Router!
    const navigate = useNavigate()
    //Dispatch! 
    const dispatch= useDispatch()
    //UseRef!
    const emailField = useRef(null)
    const passwordField = useRef(null)

    //PETICION API
    const handleSubmit = evento=>{
        evento.preventDefault();
        Axios.get("https://frail-bass-handbag.cyclic.app/users")
            .then(response => {
            //Esta constante me trae todos los usuarios de mi API
            const users = response.data;
            //aca busco el usuario que necesito
            const userToLog = users.find(user => user.email === emailField.current.value);
            //Si tengo usuario entonces entro   
            if (userToLog) {
                //Si coincide mi password con lo que tengo actualmente en el input, ingreso
                if (userToLog.password === passwordField.current.value) {
                    console.log("OK")
                    dispatch(setUser({
                        email: userToLog.email,
                        fullName: `${userToLog.first_name} ${userToLog.last_name}`,
                        token: Date.now(),
                    }))
                    //Si accede a esto le mando a la siguiente ruta:
                 navigate("/home");
          }
        }
      })
    }
    return(
        <div className="grid justify-center">
            <div className="grid-cols-6">
                <h2 className="mb-4">FORMULARIO LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="">Email address</label>
                        <input type="email" className="bg-gray-600" ref={emailField} />
                    </div>
                    <div className="mb-3">
                        <label className="">Password</label>
                        <input type="password" className="bg-gray-600" ref={passwordField} />
                    </div>
                    <button type="submit" className="">Submit</button>
                </form>
            </div>
        </div>
    )
}