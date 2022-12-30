import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  //De aca saco todo los products
  const { productsList } = useSelector(state => state.cart);
    //Para eliminar dispacho mi action remove con su ID correspondiente
  const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <th scope='row'>{product.name}</th>
                <th scope="row">{product.price}</th>
                <th scope="row">{product.category}</th>
                <th scope="row"><button className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>Delete</button></th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}