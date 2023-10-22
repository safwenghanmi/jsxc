import React from 'react'
import Product from './Product'

const Image = () => {
  return (
    <div >
        <img className="image-container" src={Product.ImageUrl} alt="Product" />
    </div>
  )
}

export default Image