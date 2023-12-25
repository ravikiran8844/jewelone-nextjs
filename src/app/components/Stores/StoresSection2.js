"use client"
import Image from "next/image";
import React from "react";
import { useStoreContext } from "./StoreContext";
import "./Stores.css"




const StoresSection2 = () => {
  const { filteredStores } = useStoreContext();

  const renderStores = () => {
    return  filteredStores.length<1 ? (<div className="fs-4 fw-medium"> No Stores Found.</div>): filteredStores.map((store, index) => (
      <div key={index} className="col-12 col-md-6 col-xl-4">
        <div className="card">
          <div>
            <Image className="img-fluid" width={520} height={190} src={`/${store.image}`} alt="store image" />
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <div className="stores-section2_card-title mb-2">{store.name}</div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-1 d-flex align-items-center">
                  <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99978 0L12.7659 6.78068L19.9994 7.345L14.4754 12.1L16.1798 19.2295L9.99978 15.3875L3.81954 19.2295L5.52391 12.1L0 7.345L7.23345 6.78068L9.99978 0Z"
                            fill="#FFAA00"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 0L12.7661 6.78068L19.9996 7.345L14.4757 12.1L16.18 19.2295L10 15.3875V0Z"
                            fill="#FFBD38"
                          />
                        </svg>
                  </div>

                  <div className="me-2 stores-section2_card-text">{store.rating}</div>
                  <div className="stores-section2_card-text text-decoration-underline">{store.reviews} Google Reviews</div>
                </div>
                <div><a className="stores-section2_card-red-text-bold text-decoration-none" target="_blank" href={store.mapLink}>View Store Details</a></div>
              </div>

              <div>
                <a target="_blank" href={store.mapLink}>
                <span className="me-1">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="37.1647"
                          height="37.1647"
                          rx="5.74627"
                          fill="#FFAA00"
                        />
                        <path
                          d="M28.699 7.93977L9.58679 16.2815C8.7834 16.5888 8.82569 16.984 9.67136 17.1157L18.5932 19.267C18.6749 19.2882 18.7496 19.3321 18.8091 19.394C18.8687 19.4558 18.911 19.5333 18.9315 19.6182L21.4685 28.6185C21.6799 29.4966 22.0182 29.4966 22.2719 28.6624L29.2487 8.46662C29.3755 8.02758 29.1218 7.76416 28.699 7.93977Z"
                          fill="#060606"
                        />
                      </svg>
                    </span>
                </a>
                <a href={`tel:${store.phone}`}>
                <span>
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.833984"
                          width="37.1647"
                          height="37.1647"
                          rx="5.74627"
                          fill="#3DB04B"
                        />
                        <path
                          d="M30.1174 23.0654V26.1188C30.1174 27.2215 29.1885 28.1545 28.0908 28.1545C28.0063 28.1545 27.9219 28.1545 27.9219 28.1545C24.7976 27.8152 21.7577 26.7126 19.14 25.0162C16.6912 23.4894 14.5802 21.369 13.0603 18.9092C11.287 16.2799 10.1893 13.2264 9.85153 10.0881C9.76708 8.90064 10.6115 7.96763 11.7092 7.88281C11.7937 7.88281 11.7937 7.88281 11.8781 7.88281H14.918C15.9313 7.88281 16.7757 8.64618 16.9446 9.664C17.1134 10.6818 17.2823 11.6148 17.6201 12.5478C17.8734 13.3112 17.7045 14.1594 17.1979 14.6683L15.9313 15.9406C17.3668 18.4851 19.4778 20.6056 22.011 22.0475L23.2776 20.7752C23.8687 20.1815 24.7131 20.0119 25.3887 20.3512C26.3175 20.6904 27.2464 20.9449 28.2597 21.0297C29.3574 21.1145 30.1174 22.0475 30.1174 23.0654Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                </a>
              </div>
            </div>

            <hr />

            <div>
              <div className="stores-section2_card-text mb-2">{store.address}</div>
              <div className="stores-section2_card-text mb-2">Phone- <span className="stores-section2_card-yellow-text">{store.phone}</span></div>
              <div className="stores-section2_card-red-text-light mb-2">STORE HOURS: {store.storeHours}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };










  return (
    <div className="stores-section2 section-padding">
    <div className="container">
      <div className="col-12 mb-5">
        <div className="stores-section2_title">Jewel One Showrooms
</div>
      </div>

      <div className="row">
        {renderStores()}
      </div>
    </div>
  </div>
);
};

export default StoresSection2;
