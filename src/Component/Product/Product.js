import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price } = product;
    return (
        <div className='products'>
            <div className='product-text'>
                <img src={img} alt="cup" />
                <h5>{name}</h5>
                <h6>Price : ${price}</h6>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;