"use client";

import React, { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const data = [
  {
    id: 1,
    name: "RJC Certificate",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-certificates/rjc-certificate-1.webp",
      },
      {
        id: 2,
        image: "/certifications/rjc-certificates/rjc-certificate-2.webp",
      },
      {
        id: 3,
        image: "/certifications/rjc-certificates/rjc-certificate-3.webp",
      },
      {
        id: 4,
        image: "/certifications/rjc-certificates/rjc-certificate-4.webp",
      },
      {
        id: 5,
        image: "/certifications/rjc-certificates/rjc-certificate-5.webp",
      },
    ],
  },
  {
    id: 2,
    name: "RJC Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 3,
    name: "Grievance Policy ",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 4,
    name: "Anti Discrimation Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 5,
    name: "Violence and Harassment Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 6,
    name: "Child Labour Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 7,
    name: "Employement at will Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 8,
    name: "Whistle Blower Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 9,
    name: "NRC Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
  {
    id: 10,
    name: "ML Policy",
    images: [
      {
        id: 1,
        image: "/certifications/rjc-policy/rjc-policy-1.webp",
      },
    ],
  },
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-lg-3">
          {/* Tabs Navigation */}
          <ul className="nav d-flex flex-lg-column certificate-tabs mb-5 flex-nowrap overflow-auto hide-scrollbar" role="tablist">
            {data.map((item) => (
              <li className="nav-item" key={item.id} style={{minWidth:'fit-content'}}>
                <button
                  className={`nav-link ${activeTab === `tab${item.id}` ? "active" : ""}`}
                  id={`tab${item.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#tab${item.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`tab${item.id}`}
                  aria-selected={activeTab === `tab${item.id}`.toString()}
                  onClick={() => setActiveTab(`tab${item.id}`)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-lg-9">
          {/* Tab Content */}
          <div className="tab-content px-3">
            <div className="card bg-transparent rounded-lg">
              <div className="card-body">
              {data.map((item) => (
              <div
                key={item.id}
                className={`tab-pane ${activeTab === `tab${item.id}` ? "active" : ""}`}
              >
                {activeTab === `tab${item.id}` && (
                  <>
                   
                   <Splide aria-label={item.name}
                 
                   options={ {
                    rewind: false,
                    gap   : '1rem',
                    perMove:2,
                    perPage: 2,
                    pagination: false,
                    isNavigation: true,
                    arrows: true,
                    breakpoints: {
                          768: {
                            perMove:1,
                            perPage: 1,
                          },
                    }
                  } }
                   >
                   {item.images.map((img) => (
                     <SplideSlide key={img.id} className="m-auto">
                     <img src={img.image}
                            alt={item.name}
                            className="img-fluid"
                            />
                   </SplideSlide>
                       
                      ))}

                

                  </Splide>

                  </>
                )}
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
