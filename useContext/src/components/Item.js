import React, { useContext } from 'react';
import { useCart } from '../context/Cart';

const Item = ({ products }) => {
    const cart = useCart();

    const productsList = products.map((product) => {
        return (
            <React.Fragment key={product.id}>
                <h3>{product.name}</h3>
                <p>Price- ${product.price}</p>
                <button onClick={() => cart.setItems([...cart.items, product])}>Add To Cart</button>
            </React.Fragment>
        );    
    })


    return (
        <div className='item-card'>
            <h1>Products Available</h1>
            <div>
                {productsList}
            </div>
        </div>
    )
}

export default Item
