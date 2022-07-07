import React from 'react';
import Item from './components/Item';
import Cart from './components/Cart';

const products= [
    {
        id: 1,
        name: 'Macbook',
        price:2500
    },
    {
        id: 2,
        name: 'Iphone 13',
        price: 1000
    },
    {
        id: 3,
        name: 'Ipad Pro',
        price: 999
    }
]

function App() {
    return (
        <div style={{display:"flex", gap:"100px"}}>
            <Item products={products} />
            <Cart/>
        </div>
    );
}

export default App;
