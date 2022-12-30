import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  //De aca saco todo los products
  const { productsList } = useSelector(state => state.cart);
    //Para eliminar dispacho mi action remove con su ID correspondiente
  const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

  return (
        <div className='m-[10%] border-black border-solid border-2 rounded-md'>
           {productsList.map(product => {
            return (
              <div className='p-2 my-4 mx-4 flex flex-col justify-center items-center border-gray-300 border-solid border-2 rounded-lg gap-8' key={product.id}>
                <div>
                  <div className='hidden '>{product.id}</div>
                  <div >Producto: {product.name}</div>
                  <div >Precio: {product.price}</div>
                  <div >Categoria: {product.category}</div>
                </div>
                <div >
                  <button className="btn btn-danger bg-red-600 rounded-md p-1" onClick={() => handleRemoveProduct(product.id)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
  )
}