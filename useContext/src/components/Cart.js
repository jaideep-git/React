import React from 'react';
import { useCart} from '../context/Cart';

const Cart = () => {
    const cart = useCart();

    const total = cart.items.reduce((a,b) => a+ b.price, 0)

    const cartItems = cart.items.map((item) => {
        return (
            <div key={item.id}>
                <p><strong>{item.name}</strong>- ${item.price}</p>
                <button
                    onClick={() => cart.setItems(cart.items.filter((c) => c.id !== item.id))}
                >
                    Remove
                </button>
            </div>
        )
    })

    return (
        <div className='cart'>
            <h1>Cart</h1>
            <div>
                {cartItems}
            </div> 
            <div>
                <h3>Total: ${ total }</h3>
            </div>
        </div>
    )
}

export default Cart