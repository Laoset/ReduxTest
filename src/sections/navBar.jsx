//Si quiero leer el STORE necesito :
import { useSelector,useDispatch } from "react-redux"
import { unsetUser } from "../reducers/user/userSlice"
import { useNavigate, useLocation } from 'react-router-dom'
// import { useState } from "react"
// import ModalCreateProducts from "./modalProducts"

export const NavBar = () => {
    const user = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //MODAL ADD PRODUCT
    // const [openModal, setOpenModal] = useState(false);
    //
    const current = useLocation()
    //Mi funcion de deslogeo
    const handleLogout = ()=>{
        dispatch(unsetUser());
        navigate('/')
    }
    //
    const handleToCart = ()=>{
        if(current.pathname === '/home'){
            navigate('/cart')
        }else if(current.pathname === '/catIndumen'){
            navigate('/cart')
        }else if(current.pathname === '/catElectro'){
            navigate('/cart')
        }else if(current.pathname === '/catDeporte'){
            navigate('/cart')
        }else if(current.pathname === '/catHogar'){
            navigate('/cart')
        }
        else{
            navigate('/home')
        }
    }
    const handleToElectro = ()=>{
        if(current.pathname === '/home'){
            navigate('/catElectro')
        }else if(current.pathname === '/cart'){
            navigate('/catElectro')
        }else if(current.pathname === '/catDeporte'){
            navigate('/catElectro')
        }else if(current.pathname === '/catHogar'){
            navigate('/catElectro')
        }else if(current.pathname === '/catIndumen'){
            navigate('/catElectro')
        }
        else{
            navigate('/home')
        }
    }
    const handleToDeporte = ()=>{
        if(current.pathname === '/home'){
            navigate('/catDeporte')
        }else if(current.pathname === '/cart'){
            navigate('/catDeporte')
        }else if(current.pathname === '/catElectro'){
            navigate('/catDeporte')
        }else if(current.pathname === '/catHogar'){
            navigate('/catDeporte')
        }else if(current.pathname === '/catIndumen'){
            navigate('/catDeporte')
        }
        else{
            navigate('/home')
        }
    }
    const handleToHogar = ()=>{
        if(current.pathname === '/home'){
            navigate('/catHogar')
        }else if(current.pathname === '/cart'){
            navigate('/catHogar')
        }else if(current.pathname === '/catElectro'){
            navigate('/catHogar')
        }else if(current.pathname === '/catDeporte'){
            navigate('/catHogar')
        }else if(current.pathname === '/catIndumen'){
            navigate('/catHogar')
        }
        else{
            navigate('/home')
        }
    }
    const handleToIndumentaria = ()=>{
        if(current.pathname === '/home'){
            navigate('/catIndumen')
        }else if(current.pathname === '/cart'){
            navigate('/catIndumen')
        }else if(current.pathname === '/catElectro'){
            navigate('/catIndumen')
        }else if(current.pathname === '/catDeporte'){
            navigate('/catIndumen')
        }else if(current.pathname === '/catHogar'){
            navigate('/catIndumen')
        }
        else{
            navigate('/home')
        }
    }

    return(
        <div className='bg-black fixed w-full top-0 '>
            <div className='flex items-center justify-around  w-full h-20 px-4'>
                <div className="flex items-center">
                    <h2 className='text-white text-4xl font-bold mr-64'>Shooping Cart</h2>
                    <p className='text-white '>Bienvenid@ {user.fullName} - {user.email}</p>
                </div>
                <div className='flex gap-14 w-fit'>
                    <div className="">
                        <button onClick={handleToElectro} className='text-white rounded-md p-1 w-24'>{current.pathname === '/home' || current.pathname === '/catHogar' || current.pathname === '/catDeporte' || current.pathname === '/catIndumen' || current.pathname === '/cart'? 'Electro' : 'Home'}</button>
                            
                        <button onClick={handleToDeporte} className='text-white rounded-md p-1 w-24'>{current.pathname === '/home' || current.pathname === '/catElectro' || current.pathname === '/catHogar' || current.pathname === '/catIndumen' || current.pathname === '/cart'? 'Deportes' : 'Home'}</button>
                            
                        <button onClick={handleToHogar} className='text-white rounded-md p-1 w-24'>{current.pathname === '/home' || current.pathname === '/catElectro' || current.pathname === '/catDeporte' || current.pathname === '/catIndumen' || current.pathname === '/cart'? 'Hogar' : 'Home'}</button>
                            
                        <button onClick={handleToIndumentaria} className='text-white rounded-md p-1 w-24'>{current.pathname === '/home' || current.pathname === '/catElectro' || current.pathname === '/catDeporte' || current.pathname === '/catHogar' || current.pathname === '/cart'? 'Indumentaria' : 'Home'}</button>
                    </div>
                    <div className="flex gap-1">
                        <button onClick={handleToCart} className='text-white bg-orange-600 rounded-md p-1'>{current.pathname === '/home' || current.pathname === '/catElectro' || current.pathname === '/catDeporte' || current.pathname === '/catHogar' || current.pathname === '/catIndumen'? 'Carrito' : 'Home'}</button>
                        
                        <button className="btn btn-primary text-white bg-orange-600 rounded-md p-1" onClick={handleLogout}>Log out</button>
                    </div>                  
                </div>
              <hr />
            </div>
        </div>
    )
}