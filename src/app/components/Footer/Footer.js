import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 mb-4 text-center text-md-start">
            <div style={{ maxWidth: "300px", margin: "auto" }}>
              <div className="mb-4">
                <Image
                  className="img-fluid w-100"
                  width="222"
                  height="56"
                  src="/logo.svg"
                  alt="logo"
                />
              </div>
              {/* <div className="footer-section_text mb-4">
                Subscribe to email alerts. We promise not to spam
              </div>
              <div>
                <div className="input-group newsletter-form-input-group">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Email Address*"
                    required=""
                  />
                  <div className="input-group-append">
                    <span>
                      <button className="btn btn-warning fw-medium">Subscribe</button>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-12 col-md-7 col-lg-8">
            <div className="footer-section_items">
              {/* Information */}
              {/* <div>
                <div className="mb-3 footer-section_links_label">
                  Information
                </div>
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <Link href="/blog" className="footer-menu-link nav-link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/stores" className="footer-menu-link nav-link">
                      Stores
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/our-story" className="footer-menu-link nav-link">
                      About JewelOne
                    </Link>
                  </li>
                </ul>
              </div> */}

              {/* Contact Us */}
              <div>
                <div className="mb-2 footer-section_links_label">
                  Contact Us
                </div>
                <ul className="list-unstyled">
                  <li>
                    <a
                      target="__blank"
                      href="https://wa.me/message/DVQPGTOCP5MWI1"
                    >
                      <span className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={14}
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M22.7008 16.4002C22.7008 17.7002 21.6008 18.8002 20.3008 18.8002H6.10078L1.30078 23.6002V4.6002C1.30078 3.3002 2.40078 2.2002 3.70078 2.2002H20.4008C21.7008 2.2002 22.8008 3.3002 22.8008 4.6002V16.4002H22.7008Z"
                            stroke="#6D6D6D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Chat with Us
                    </a>
                  </li>
                  <li>
                    <a href="tel:1800 1033916">
                      <span className="me-2">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 28 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.9991 20.1998V23.7998C25.9991 25.0998 24.8991 26.1998 23.5991 26.1998C23.4991 26.1998 23.3991 26.1998 23.3991 26.1998C19.6991 25.7998 16.0991 24.4998 12.9991 22.4998C10.0991 20.6998 7.59908 18.1998 5.79908 15.2998C3.69908 12.1998 2.39908 8.5998 1.99908 4.8998C1.89908 3.4998 2.89908 2.3998 4.19908 2.2998C4.29908 2.2998 4.29908 2.2998 4.39908 2.2998H7.99908C9.19908 2.2998 10.1991 3.1998 10.3991 4.3998C10.5991 5.5998 10.7991 6.6998 11.1991 7.7998C11.4991 8.6998 11.2991 9.6998 10.6991 10.2998L9.19908 11.7998C10.8991 14.7998 13.3991 17.2998 16.3991 18.9998L17.8991 17.4998C18.5991 16.7998 19.5991 16.5998 20.3991 16.9998C21.4991 17.3998 22.5991 17.6998 23.7991 17.7998C25.0991 17.8998 25.9991 18.9998 25.9991 20.1998Z"
                            stroke="#6D6D6D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      1800 1033916
                    </a>
                  </li>
                  {/* <li>
                    <span className="me-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2727_988)">
                          <path
                            d="M14.856 2.85742H1.14119C0.983392 2.85742 0.855469 2.98535 0.855469 3.14315V12.8578C0.855469 13.0156 0.983392 13.1435 1.14119 13.1435H14.856C15.0138 13.1435 15.1417 13.0156 15.1417 12.8578V3.14315C15.1417 2.98535 15.0138 2.85742 14.856 2.85742Z"
                            stroke="white"
                          ></path>
                          <path
                            d="M14.9976 3L8.19054 10.3037C8.16717 10.3288 8.13887 10.3489 8.10741 10.3626C8.07595 10.3763 8.042 10.3833 8.00768 10.3833C7.97336 10.3833 7.93941 10.3763 7.90795 10.3626C7.87649 10.3489 7.84819 10.3288 7.82482 10.3037L1 3"
                            stroke="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2727_988">
                            <rect width="16" height="16" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    customercare@jewelone.in
                  </li> */}
                </ul>
              </div>

              {/* Swarna Shakti App Download */}

              <div>
                <div>
                  <div className="mb-2 footer-section_links_label">
                    Follow Us
                  </div>
                  <div>
                    <ul className="list-unstyled footer-social-links">
                      <ul className="list-unstyled footer-social-links">
                        <li>
                          <a
                            target="__blank"
                            href="https://www.instagram.com/jewelone_in/"
                          >
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8974 2.13922C15.0799 2.13922 15.4487 2.14975 16.7028 2.21297C17.8619 2.26566 18.4942 2.45535 18.9157 2.62396C19.4743 2.83472 19.8642 3.09818 20.2857 3.50916C20.7072 3.93068 20.9601 4.32058 21.1709 4.87909C21.3289 5.30061 21.5292 5.9329 21.5819 7.09208C21.6345 8.3461 21.6556 8.72547 21.6556 11.8974C21.6556 15.0799 21.6451 15.4487 21.5819 16.7027C21.5292 17.8619 21.3395 18.4942 21.1709 18.9157C20.9601 19.4742 20.6967 19.8642 20.2857 20.2857C19.8642 20.7072 19.4743 20.9601 18.9157 21.1709C18.4942 21.3289 17.8619 21.5292 16.7028 21.5819C15.4487 21.6345 15.0694 21.6556 11.8974 21.6556C8.71494 21.6556 8.34611 21.6451 7.09208 21.5819C5.9329 21.5292 5.30062 21.3395 4.8791 21.1709C4.32059 20.9601 3.93068 20.6967 3.50916 20.2857C3.08764 19.8642 2.83473 19.4742 2.62397 18.9157C2.4659 18.4942 2.26567 17.8619 2.21298 16.7027C2.16029 15.4487 2.13922 15.0694 2.13922 11.8974C2.13922 8.71493 2.14976 8.3461 2.21298 7.09208C2.26567 5.9329 2.45536 5.30061 2.62397 4.87909C2.83473 4.32058 3.09818 3.93068 3.50916 3.50916C3.93068 3.08764 4.32059 2.83472 4.8791 2.62396C5.30062 2.46589 5.9329 2.26566 7.09208 2.21297C8.33557 2.14975 8.71494 2.13922 11.8974 2.13922ZM11.8974 0C8.66225 0 8.26181 0.0105297 6.98671 0.0737577C5.72214 0.126448 4.85802 0.337213 4.09929 0.621739C3.31947 0.927341 2.65558 1.32779 1.99169 1.99168C1.32779 2.65558 0.927346 3.31947 0.621743 4.09929C0.326679 4.85802 0.126456 5.72213 0.0737658 6.98669C0.0105377 8.25126 0 8.66224 0 11.8974C0 15.1326 0.0105377 15.533 0.0737658 16.8081C0.126456 18.0727 0.337217 18.9368 0.621743 19.6956C0.927346 20.4754 1.32779 21.1393 1.99169 21.8032C2.65558 22.4671 3.31947 22.8675 4.09929 23.1731C4.85802 23.4681 5.72214 23.6684 6.98671 23.7316C8.25127 23.7843 8.66225 23.8054 11.8974 23.8054C15.1326 23.8054 15.533 23.7948 16.8081 23.7316C18.0727 23.6789 18.9368 23.4681 19.6956 23.1731C20.4754 22.8675 21.1393 22.4671 21.8032 21.8032C22.467 21.1393 22.8675 20.4754 23.1731 19.6956C23.4682 18.9368 23.6684 18.0727 23.7316 16.8081C23.7843 15.5436 23.8054 15.1326 23.8054 11.8974C23.8054 8.66224 23.7948 8.26179 23.7316 6.98669C23.6789 5.72213 23.4682 4.85802 23.1731 4.09929C22.8675 3.31947 22.467 2.65558 21.8032 1.99168C21.1393 1.32779 20.4754 0.927341 19.6956 0.621739C18.9368 0.326675 18.0727 0.126448 16.8081 0.0737577C15.533 0.0105297 15.1326 0 11.8974 0Z"
                                fill="#2D2D2D"
                              />
                              <path
                                d="M11.8972 5.78516C8.52504 5.78516 5.78516 8.52504 5.78516 11.8972C5.78516 15.2694 8.52504 18.0093 11.8972 18.0093C15.2694 18.0093 18.0093 15.2694 18.0093 11.8972C18.0093 8.52504 15.2694 5.78516 11.8972 5.78516ZM11.8972 15.87C9.7053 15.87 7.93491 14.0891 7.93491 11.9078C7.93491 9.71585 9.71584 7.94545 11.8972 7.94545C14.0891 7.94545 15.8595 9.72639 15.8595 11.9078C15.8595 14.0891 14.0891 15.87 11.8972 15.87Z"
                                fill="#2D2D2D"
                              />
                              <path
                                d="M19.6749 5.54255C19.6749 6.3329 19.0321 6.97572 18.2418 6.97572C17.4514 6.97572 16.8086 6.3329 16.8086 5.54255C16.8086 4.75219 17.4514 4.10938 18.2418 4.10938C19.0427 4.11991 19.6749 4.75219 19.6749 5.54255Z"
                                fill="#2D2D2D"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            target="__blank"
                            href="https://www.facebook.com/jewelone916"
                          >
                            <svg
                              width={13}
                              height={26}
                              viewBox="0 0 13 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.95301 26H8.62141V12.8799H12.5814L13 8.49256H8.62141C8.62141 8.49256 8.62141 6.85255 8.62141 5.99598C8.62141 4.96183 8.8477 4.55444 9.93386 4.55444C10.8051 4.55444 13 4.55444 13 4.55444V0C13 0 9.76414 0 9.07397 0C4.85378 0 2.95301 1.71314 2.95301 5.00362C2.95301 7.86581 2.95301 8.50301 2.95301 8.50301H0V12.953H2.95301V26Z"
                                fill="#2D2D2D"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            target="__blank"
                            href="https://www.youtube.com/channel/UCCG6vza_ECtCW9D58F8Xh_Q"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="19"
                              viewBox="0 0 27 19"
                              fill="none"
                            >
                              <path
                                d="M26.4344 2.96417C26.1202 1.79107 25.2091 0.879833 24.0465 0.56561C21.9414 8.92755e-06 13.5 0 13.5 0C13.5 0 5.05857 8.92755e-06 2.95345 0.56561C1.79092 0.879833 0.879752 1.80155 0.565555 2.96417C-6.24253e-08 5.07994 0 9.50001 0 9.50001C0 9.50001 -6.24253e-08 13.9201 0.565555 16.0358C0.879752 17.2089 1.79092 18.1202 2.95345 18.4344C5.05857 19 13.5 19 13.5 19C13.5 19 21.9414 19 24.0465 18.4344C25.2091 18.1202 26.1202 17.1985 26.4344 16.0358C27 13.9201 27 9.50001 27 9.50001C27 9.50001 27 5.07994 26.4344 2.96417ZM10.7455 13.5116V5.48843L17.794 9.50001L10.7455 13.5116Z"
                                fill="#2D2D2D"
                              />
                            </svg>
                          </a>
                        </li>

                        <li>
                          <a
                            target="__blank"
                            style={{ background: "#1DA1F2" }}
                            href="https://twitter.com/jewelone916"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="19"
                              fill="none"
                              viewBox="0 0 23 19"
                            >
                              <path
                                fill="#fff"
                                d="M0 16.849A13.166 13.166 0 007.23 19c8.76 0 13.706-7.52 13.412-14.271A9.762 9.762 0 0023 2.247a9.349 9.349 0 01-2.714.756A4.825 4.825 0 0022.361.351a9.17 9.17 0 01-2.997 1.161A4.653 4.653 0 0015.917 0c-3.05 0-5.281 2.886-4.6 5.89-3.92-.203-7.398-2.11-9.724-5.017C.356 3.025.953 5.847 3.049 7.274a4.695 4.695 0 01-2.137-.596c-.053 2.226 1.519 4.302 3.782 4.76a4.746 4.746 0 01-2.127.085c.597 1.907 2.347 3.292 4.412 3.334A9.34 9.34 0 010 16.85z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            target="__blank"
                            href="https://www.pinterest.com/JewelOne916/"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={26}
                              viewBox="0 0 20 26"
                              fill="none"
                            >
                              <path
                                d="M3.05174 15.0366C3.38965 15.1747 3.69588 15.0472 3.79092 14.6647C3.85428 14.399 4.02323 13.7402 4.09715 13.4639C4.19219 13.0919 4.16051 12.9538 3.88596 12.635C3.28405 11.923 2.90391 11.0091 2.90391 9.70207C2.90391 5.92963 5.71278 2.55038 10.2112 2.55038C14.1922 2.55038 16.3886 5.00512 16.3886 8.2781C16.3886 12.5819 14.4984 16.2162 11.679 16.2162C10.1267 16.2162 8.96515 14.9197 9.33474 13.3364C9.77825 11.4448 10.6441 9.40452 10.6441 8.03369C10.6441 6.81164 9.98944 5.79149 8.6378 5.79149C7.05385 5.79149 5.77614 7.4386 5.77614 9.65956C5.77614 11.0729 6.25132 12.0187 6.25132 12.0187C6.25132 12.0187 4.62513 18.9472 4.34002 20.1586C3.7698 22.5708 4.25554 25.5357 4.29778 25.8332C4.3189 26.0139 4.55122 26.0564 4.64625 25.9182C4.79409 25.7269 6.68427 23.3785 7.32841 21.03C7.50792 20.3711 8.37381 16.9281 8.37381 16.9281C8.89124 17.9164 10.4013 18.7878 11.9958 18.7878C16.7687 18.7878 20 14.4096 20 8.55439C20 4.12311 16.2724 0 10.6019 0C3.54805 0 0 5.09014 0 9.33014C0.0105597 11.9018 0.971489 14.1865 3.05174 15.0366Z"
                                fill="#2D2D2D"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-3 footer-section_links_label">
                    Swarna Shakti App Download
                  </div>
                  <div className="d-flex gap-2">
                    <div>
                      <a
                        target="__blank"
                        href="https://apps.apple.com/in/app/jewelone/id1507128724"
                      >
                        <Image
                          className="img-fluid"
                          width="160"
                          height="50"
                          src="/app-store.webp"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="__blank"
                        href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US"
                      >
                        <Image
                          className="img-fluid"
                          width="160"
                          height="50"
                          src="/google-play.webp"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="col-12">
        <div
              className="mt-4"
              style={{ borderTop: "1px solid #BDB1A5", paddingTop: "10px" }}
            >
              {/* Copyright */}
              <div className="mt-2">
                <div className="footer-section_text text-center">
                  &copy; {year} - Jewel One is Trademarked & Registered under
                  Emerald Jewel Industry India Limited.{" "}
                </div>
              </div>
            </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
