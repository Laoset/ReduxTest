//Importando mis actions del CART
import {addProductToCart, removeProductFromCart} from '../reducers/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


export const ProductsList= ({products}) => {
    const dispatch = useDispatch()
    //Leer mi estado global y ver que productos tengo en mi carro
    const {productsList} = useSelector(state=> state.cart)

    const handlerRemove= (productId) => {
        //Busco el producto que se necesita en mi array de products
        const product= products.find(product => product.id === productId)
        //Si el producto esta en el carro:
        if (productsList.find(pdt => pdt.id === productId)) {
            //Hago dispatch de mi action de remover
            dispatch(removeProductFromCart(productId));
          }        //Y lo despacho al store
           else {
            dispatch(addProductToCart(product));
          }

    }

    return (
        <div className='h-screen pt-12'>
        <h2 className='py-10 px-4 text-white'>Listado de productos</h2>
        <div className="grid grid-cols-6 mx-4 gap-8 px-6">
          {
            products.map(product => {
              return (
                <div key={product.id} className=" flex flex-col justify-center items-center border-gray-100 border-solid border-2 w-full h-52">
                  <div className='h-28'>
                    <h4 className='text-white'>{product.name}</h4>
                    <p className='text-white py-1'><b className='font-normal'>Price: $</b>{product.price}</p>
                    <p className='text-white'><b className='font-normal'>Category:</b> {product.category}</p>
                  </div>
                  <div className=''>
                    <button
                      className={`${productsList.find(pdt=> pdt.id === product.id) ? 'bg-red-700': 'bg-green-600'} text-white rounded-md p-1`}
                      onClick={() => handlerRemove(product.id)}
                    >
                     {productsList.find(pdt=> pdt.id === product.id) ? 'Remove': 'Add'} to Cart
                    </button>
                    </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
}