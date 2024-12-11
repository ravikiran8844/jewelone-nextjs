import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (params) => {
  return (
    <div className="product-item">
      <div className="card border-0 rounded-4 overflow-hidden">
        <div>
         <Link href={params.slug}>
         <Image
            className="img-fluid"
            src="/collections/product.webp"
            width={533}
            height={403}
            alt="product"
          />
         </Link>
        </div>
        <div className="card-body p-3 d-flex flex-column gap-1">
          <div className="fw-medium">
            <Link  href={params.slug} className="text-decoration-none text-black">
            Product No : <span>{params.title}</span>
            </Link>
          </div>
          <div className="fw-semibold text-red">Gold Jewel Set</div>

          <div className="d-flex flex-column gap-2">
            <div>
              <div className="fw-medium text-black">Weight</div>

              <div>
                Net weight : <span>25.5 g</span>
              </div>
              <div>
                Gross weight : <span>2.390 g</span>
              </div>
            </div>
            <div>
              <div className="fw-medium text-black">Purity</div>
              <div>22K</div>
            </div>
          </div>

          <div>
            <div className="fw-medium text-black">Product Customisable</div>

            <div className="d-flex gap-2 align-items-center mb-2">
              <div>
                <label className="d-flex gap-1 align-items-center">
                  {" "}
                  <input
                    type="checkbox"
                    name="customisable"
                    
                    style={{
                      width: "15px",
                      height: "15px",
                      accentColor: "#40D06C",
                    }}
                  />
                  Yes
                </label>
              </div>

              <div>
                <label className="d-flex gap-1 align-items-center">
                  <input
                    type="checkbox"
                    name="customisable"
                    style={{
                      width: "15px",
                      height: "15px",
                      accentColor: "#CE0D1B",
                    }}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div>
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8145 2.17987C11.4045 0.774902 9.52918 0.000823973 7.53137 0C3.41469 0 0.0643031 3.33426 0.0626472 7.43234C0.0620952 8.74237 0.405965 10.0212 1.05957 11.1484L0 15L3.95928 13.9664C5.05023 14.5586 6.27843 14.8707 7.52833 14.8711H7.53146C11.6477 14.8711 14.9984 11.5366 15 7.43829C15.0008 5.45215 14.2247 3.58475 12.8145 2.17987ZM7.53137 13.6158H7.52879C6.41494 13.6154 5.32253 13.3174 4.3693 12.7547L4.14272 12.6207L1.79322 13.2341L2.42033 10.9544L2.27269 10.7206C1.65127 9.737 1.32313 8.6001 1.32369 7.4328C1.32497 4.02658 4.10978 1.25537 7.53385 1.25537C9.19193 1.25592 10.7506 1.89935 11.9226 3.06711C13.0946 4.23486 13.7396 5.78705 13.7391 7.43784C13.7376 10.8443 10.953 13.6158 7.53137 13.6158ZM10.9364 8.98883C10.7498 8.89581 9.8323 8.44666 9.66119 8.38458C9.49027 8.3226 9.36571 8.29175 9.24143 8.4776C9.11696 8.66345 8.75938 9.08185 8.65046 9.20572C8.54154 9.32968 8.43281 9.34525 8.24615 9.25223C8.0595 9.1593 7.45824 8.9631 6.74538 8.33038C6.19066 7.83792 5.81616 7.22974 5.70724 7.04388C5.59851 6.85785 5.70632 6.76703 5.78912 6.66486C5.99113 6.41519 6.19342 6.15344 6.25561 6.02957C6.31789 5.90561 6.28671 5.79712 6.23997 5.70419C6.19342 5.61127 5.82021 4.69711 5.66474 4.32513C5.51314 3.96313 5.35942 4.01202 5.24479 4.00635C5.13606 4.00095 5.01159 3.99985 4.88713 3.99985C4.76275 3.99985 4.56055 4.04626 4.38944 4.2323C4.21843 4.41824 3.73639 4.86749 3.73639 5.78165C3.73639 6.6958 4.40508 7.57892 4.49836 7.70288C4.59164 7.82684 5.81432 9.70276 7.68629 10.5071C8.13153 10.6987 8.47908 10.8128 8.75018 10.8984C9.19727 11.0398 9.60397 11.0198 9.92558 10.972C10.2842 10.9187 11.0296 10.5227 11.1852 10.0889C11.3407 9.65506 11.3407 9.28326 11.294 9.20572C11.2474 9.12827 11.123 9.08185 10.9364 8.98883Z"
                  fill="white"
                />
              </svg>
              Get full estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
