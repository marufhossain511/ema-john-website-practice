import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])
  const handleCart=(product)=>{
    const newCart=[...cart,product]
    setCart(newCart)
  }


    return (
        <div className='info-container'>
            <div className='product-container'>
               {
                products.map(product=><Product
                product={product}
                key={product.id}
                handleCart={handleCart}
                ></Product>)
               }
            </div>
            <div className='cart-container'>
               <h2>Order summery</h2>
               <h4>Selected items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;