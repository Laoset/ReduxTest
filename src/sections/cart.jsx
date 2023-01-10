import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  //De aca saco todo los products
  const { productsList, totalCount } = useSelector(state => state.notes);
    //Para eliminar dispacho mi action remove con su ID correspondiente
  const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId)); 
  //Creando un total price
  const total= 0

  let precioTotal = ()=>{
  }

  return (
    <div className='h-screen pt-24 bg-fondoEpic'>
        <div className='bg-white my-28 mx-auto w-[50%] border-black border-solid border-2 rounded-md'>
          <div className='flex justify-around items-center h-12'>Tu carrito hasta ahora : </div>
          <div>
           {productsList.map(product => {
             return (
               <div className='flex items-center pt-4 pl-4 pb-2 text-base font-bold mt-4 ml-[2%] border-solid border-2 ' key={product.id}>
                  <div className='w-24 h-auto mr-12'>
                    <img src={product.image} alt="" />
                  </div>
                   <div className='w-[25%] mr-20'>{product.name}</div>
                   <div className='w-[25%] mr-28'>${product.price}</div>
                   <div className='w-[25%]'>
                     <button className="btn btn-danger bg-red-600 rounded-md p-1" onClick={() => handleRemoveProduct(product.id)}>Delete</button>
                   </div>
                   
                </div>
            )
          })}
          </div>
          <div className='flex justify-between'>
            <div>
              <h2>Cantidad de productos :</h2>
              <p>{totalCount}</p>
            </div>
            <div>
              <h2>Precio total</h2>
              <p>{precioTotal}</p>
            </div>
            
            
          </div>
        </div> 
    </div>
  )
}