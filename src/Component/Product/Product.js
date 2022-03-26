import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, img, price } = product;
    return (
        <div className='products'>
            <div className='product-text'>
                <div className='bg-color d-flex justify-content-center'>
                    <img src={img} alt="cup" />
                </div>
                <h5 className='text-center'>{name}</h5>
                <p className='text-center'><strong>Price : ${price}</strong></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;