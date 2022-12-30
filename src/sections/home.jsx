//Crear estado local en componente, clasicovich
import {useState, useEffect} from 'react'
//Si quiero leer el STORE necesito :
import { useSelector,useDispatch } from "react-redux"
import { unsetUser } from "../reducers/user/userSlice"
import { useNavigate } from 'react-router-dom'
//Componentes
import { ProductsList } from "../components/productslist"
//Axios!
import Axios from "axios"


export const Home = () => {
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //Creando mi estado
    const [products, setProducts]= useState([])
    //Agregar algo, hacer algo cuando se cargue
    useEffect(()=> {
        Axios.get("https://frail-bass-handbag.cyclic.app/products")
            .then(response=>{
                setProducts(response.data)
            })
    }, [])
    //Mi funcion de deslogeo
    const handleLogout = ()=>{
        dispatch(unsetUser());
        navigate('/')
    }

    return(
        <>
      <h2>Home</h2>
      <p>Welcome {user.fullName} - {user.email}</p>
      <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
      <hr />
      <ProductsList products={products} />
    </>
    )
}