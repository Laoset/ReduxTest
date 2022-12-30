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
            <div className="flex justify-center items-center h-screen pb-56">
                <form onSubmit={handleSubmit} className=" w-[30rem] h-[26rem] rounded-xl mt-0 p-16  bg-black text-white">
                    <h2 className="w-full pb-6 flex justify-center text-4xl font-semibold">FORMULARIO LOGIN</h2>
                    {/* <div className="flex flex-col items-baseline mb-3 "> */}
                        {/* <label className="">Email address</label> */}
                        <input placeholder='Email' type="email" className="text-black flex justify-center my-6 mx-auto  p-2  bg-white mb-6 rounded-md w-[80%] h-12" ref={emailField} />
                        {/* <label className="">Password</label> */}
                        <input placeholder='Password' type="password" className="text-black flex justify-center my-8 mx-auto  p-2  bg-white mb-6 rounded-md w-[80%] h-12" ref={passwordField}/>
                    {/* </div> */}
                    <div className="flex justify-center items-center bg-gray-500 rounded-md mt-10">
                        <button type="submit" className="py-3 px-5 text-md font-bold  text-white">Submit</button>
                    </div>
                </form>
            </div>
    )
}