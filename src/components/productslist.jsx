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
        <>
        <h2>Listado de productos</h2>
        <div className="row">
          {
            products.map(product => {
              return (
                <div key={product.id} className="col-3 mt-3">
                  <h4>{product.name}</h4>
                  <p><b>Price:</b> {product.price}</p>
                  <p><b>Category:</b> {product.category}</p>
                  <button
                    className={`${productsList.find(pdt=> pdt.id === product.id) ? 'bg-red-700': 'bg-green-600'}`}
                    onClick={() => handlerRemove(product.id)}
                  >
                   {productsList.find(pdt=> pdt.id === product.id) ? 'Remove': 'Add'} to Cart
                  </button>
                </div>
              )
            })
          }
        </div>
      </>
    )
}