import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    const { img, name } = cart
    return (
        <div className='row align-items-center my-2 container cart'>
            <img className='col-4 col-sm-4 w-30 ' src={img} alt="" />
            <h6 className='col-6 col-sm-6'>{name}</h6>
        </div>
    )
};

export default Cart;