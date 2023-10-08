import React from 'react'
import './SingleProuctOrganism.style.scss'
import SingleProductMolecule from '../../molecules/SingleProductMolecule/SingleProductMolecule'

const SingleProuctOrganism = () => {
  return (

    <div className="single-product-modal-container">
        <div className="spmc-image">
            <img src="/public/05.jpg" alt="product" />
        </div>
        <div className="spmc-details">
            <SingleProductMolecule />
        </div>
    </div>
    
  )
}

export default SingleProuctOrganism