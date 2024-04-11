import React from 'react'
import Image from "next/image";

const AkshayaTritiyaProductCard = ({ product }) => {
    const { title, weight, image } = product;
    return (
    <div className="card product-card">
              <div className="text-center card-img-top ">
                    <Image width={186} height={186} className="img-fluid" src={image} alt={`gold coin ${weight}`} />
                  </div>
                <div className="card-body">
                  

                  <div className="text-center">
                    <div className="fw-semibold fs-4 text-red">{weight}</div>
                    <div className="fs-5">{title}</div>
                    <div className="mt-3">
                    <a href="#" className="btn btn-outline buy-now-btn">Buy Now</a>
                    </div>

                  </div>


                </div>
              </div>
  )
}

export default AkshayaTritiyaProductCard