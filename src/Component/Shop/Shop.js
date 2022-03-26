import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (selectedProduct) => {
        let newCart = [...carts];

        const exists = carts.find(product => product.id === selectedProduct.id);
        if (!exists) {
            newCart.push(selectedProduct);
        }
        else {
            const rest = carts.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, exists];
        }

        console.log(newCart);
        if (carts.length > 3) {
            alert('You cant select more than 4')
            return;
        }
        setCarts(newCart);
    }
    const handleAddToClear = () => {
        setCarts([]);
    }
    const handleAddToChoose = () => {
        if (carts.length > 0) {
            const chooseProduct = carts[Math.floor(Math.random() * carts.length)];
            setCarts([chooseProduct])
        }
        else {
            return;
        }
    }
    return (
        <div className='shop-container'>

            <div className='products-container container'>

                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Cart</h1>
                {
                    carts.map(cart => <Cart
                        cart={cart}
                        key={cart.id}
                    ></Cart>)
                }
                <div className='btns'>
                    <button onClick={handleAddToChoose} className='clear-btn'>
                        <p>Clear Cart</p>
                    </button>
                    <button onClick={handleAddToClear} className='review-btn'>
                        <p>Choose Again</p>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Shop;