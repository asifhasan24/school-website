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
        <div className="card text-center" style={{backgroundColor: 'blueviolet',fontWeight :'700',color:'white'}} >
  <div className="card-header" >
  <h2> Purchased Details</h2>
  
  </div>
  <div className="card-body ">
    <h4 className="card-title ">Course  Purchased : {cart.length}</h4>
    <h4 className="card-text">Total Price : {formatNumber(total)}</h4>
    <a href="/purchased" className="btn btn-primary">Go to courses</a>
  </div>
 
</div>
        
    );
};

export default Cart;