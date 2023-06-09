import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,img,seller,ratings}=props.product;
    const handleCart=props.handleCart;

    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
              <h6 className='product-name'>{name}</h6>
              <p>Price: ${price}</p>
              <p>Manufacturer: {seller}</p>
              <p>Ratings: {ratings} Stars</p>
           </div>
           <button onClick={handleCart} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;