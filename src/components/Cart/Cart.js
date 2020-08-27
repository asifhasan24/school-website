import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total,prd) => total + prd.price,0);
    const formatNumber = num =>{
        const digit = num.toFixed(2);
        return Number(digit);
 }
    return (
        <div>
            <p> Course  Purchased :{cart.length}</p> 
            <p> Total price : {formatNumber(total)} </p>

        </div>
    );
};

export default Cart;