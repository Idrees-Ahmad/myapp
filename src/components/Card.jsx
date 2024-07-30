import React from 'react'

function Card({product}) {
  return (
    <>
        
      <div className="col-md-3 pb-2">
                <div className="card" />
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.des}</p>
                    <a href="#" className="btn btn-primary">{product.price}</a>

                </div>

                
            </div>
    </>
  )
}

export default Card
