import React from 'react'
import './Product.css';

function Product({title, image, price, rating}) {
    return (
        <div className = 'product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className= 'product__price'>
                    <small>{price}</small>
                    <strong>19.99</strong>
                </p>

                <div className='product__rating'>
                    <p>⭐</p>

                </div>
                
            
            </div>

            <img 
                src = 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' alt ='lean startup book cover' />

                <button>Add to basket</button>
            
        </div>
    )
}

export default Product
