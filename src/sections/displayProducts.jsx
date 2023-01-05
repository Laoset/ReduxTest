import React from 'react'
import {useState, useEffect} from 'react'
import { ProductsList } from '../components/productslist'
import Axios from "axios"

export const TrueHome = ({setOpenModal}) => {
        //Creando mi estado
        const [products, setProducts]= useState([])
        //Agregar algo, hacer algo cuando se cargue
        useEffect(()=> {
            Axios.get("https://api-to-vercel-olive.vercel.app/api/productos")
                .then(response=>{
                    setProducts(response.data)
                })
        }, [])

        

  return (
    <div className='bg-fondo'>
          <ProductsList products={products}/>
    </div>
  )
}

export default TrueHome