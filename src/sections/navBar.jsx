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
        }else{
            navigate('/home')
        }
        
    }

    return(
        <div className='flex flex-col bg-black absolute w-full top-0'>
            <div className='flex justify-between items-center w-full h-14 px-4'>
              <h2 className='text-white text-4xl font-bold mr-64'>Home</h2>
              <p className='text-white mx-96'>Welcome {user.fullName} - {user.email}</p>
              <div className='flex ml-6 gap-4'>
                <button onClick={handleToCart} className='text-white bg-orange-600 rounded-md p-1'>{current.pathname === '/home'? 'Carrito' : 'Home'}</button>
                <button className="btn btn-primary text-white bg-orange-600 rounded-md p-1" onClick={handleLogout}>Log out</button>
                {/* <button className="btn btn-primary text-white bg-orange-600 rounded-md p-1 transition-transform duration-500 " onClick={()=> {setOpenModal(true)}}>Add Products</button>
                {openModal && <ModalCreateProducts closeModal={setOpenModal}/>} */}
              </div>
              <hr />
            </div>
        </div>
    )
}