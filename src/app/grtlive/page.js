
import Image from "next/image";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import "./grtlive.css";
import GrtReviewSlider from "../components/GRTLIVE/GrtReviewSlider";

const page = () => {
  return (
    <main className="bg-white">
      <section>
        <Image
          width={1920}
          height={332}
          className="img-fluid"
          src="/grt-live-landing.jpg"
          alt="banner"
        />
      </section>

      <section>
        <div className="container py-4 py-lg-5">
          <div className="row">
            <div className="col-12 col-lg-7 order-1 order-lg-0">
              <div className="grtlive-youtube-iframe">
                <iframe
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/WzZ4Mx9NXLI?si=rUmxuMdy1noVes9k&autoplay=1&mute=1&rel=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 order-0 order-lg-1">
              <div className="card book-appointment-form">
                <div className="card-body">
                  <div className="fs-4 fw-semibold mb-4 text-center">BOOK A NO OBLIGATION APPOINTMENT</div>

                    <div className="row">
                      <div className="col-12 mb-4">
                          <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="col-12 mb-4">
                          <input type="text" className="form-control" placeholder="Phone" />
                      </div>
                      <div className="col-12 mb-4">
                          <input type="text" className="form-control" placeholder="Email ID" />
                      </div>
                      <div className="col-12 mb-4">
                          <input type="text" className="form-control" placeholder="City Or Country" />
                      </div>
                      <div className="col-12 mb-4">
                          <label className="form-label">
                          Which category you want to shop? <span className="text-danger">*</span> 
                          </label>
                          <select className="form-select">
                            <option>
                            --Select Category--
                            </option>
                            <option>
                            Diamond Jewellery
                            </option>
                            <option>
                            Gold Jewellery
                            </option>
                            <option>
                            Silver Jewellery
                            </option>
                            <option>
                            Other Products
                            </option>
                          </select>
                      </div>
                      <div className="col-12 mb-4">
                          <label className="form-label">
                          Preferred Language? <span className="text-danger">*</span>
                          </label>
                          <select className="form-select">
                          <option value="">--Select Language--</option>
                          <option value="english">English</option>
																	<option value="hindi">Hindi</option>
																	<option value="kannada">Kannada</option>
																	<option value="telugu">Telugu</option>
																	<option value="tamil">Tamil</option>
																	<option value="malayalam">Malayalam</option>
                          </select>
                      </div>
                      <div className="col-6 mb-4">
                        <label className="form-label">Date<span className="text-danger">*</span></label>
                          <input type="date" className="form-control" />
                      </div>
                      <div className="col-6 mb-4">
                      <label className="form-label">Time<span className="text-danger">*</span></label>

                          <input type="time" className="form-control" />
                      </div>

                      <div className="col-12 mb-4">
                      <label className="form-label">When do you want us to reach you?<span className="text-danger">*</span></label>
                      <label className="form-label">To get more details about your requirement</label>
                          <input type="text" className="form-control" placeholder="Ex: Call me at 10am tomorrow" />
                      </div>


                      <div className="col-12 mb-4">
                        <button className="btn btn-danger px-4 py-2 fs-6" style={{backgroundColor:"#bf3e43"}}>BOOK AN APPOINTMENT</button>
                      </div>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#bf3e43" }}>
        <div className="container py-5 text-white">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="fs-1 mb-4">Here's how it works ?</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-9">
              <div>
                GRT Live brings you a great way to browse and shop for your
                favourite jewels. View our collection live, compare and
                shortlist, ask questions and make your choice ... all through a
                live video chat session at a convenient time. and place that you
                choose. Once you are done, we will keep your jewellery packed
                and ready for you to collect from our showroom. We will even
                ship it to your address. Experience GRT Live. Experience
                convenient shopping.
              </div>
              <div className="time-line-section">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="how-it-works-logos">
                <div className="how-it-works-logo-item">
                  <div className="how-it-works-logo-item__img-wrapper">
                    <Image
                      className="img-fluid"
                      width={50}
                      height={50}
                      src="/shop_anywhere.png"
                      alt="SHOP FROM ANYWHERE"
                    />
                  </div>
                  <div>SHOP FROM ANYWHERE</div>
                </div>
                <div className="how-it-works-logo-item mt-4">
                  <div className="how-it-works-logo-item__img-wrapper">
                    <Image
                      className="img-fluid"
                      width={50}
                      height={50}
                      src="/comfort_home.png"
                      alt="COMFORT OF YOUR HOME"
                    />
                  </div>
                  <div>COMFORT OF YOUR HOME</div>
                </div>
                <div className="how-it-works-logo-item mt-4">
                  <div className="how-it-works-logo-item__img-wrapper">
                    <Image
                      className="img-fluid"
                      width={50}
                      height={50}
                      src="/interactive.png"
                      alt="INTERACTIVE SALES PERSONS"
                    />
                  </div>
                  <div>INTERACTIVE SALES PERSONS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GrtReviewSlider/>
    </main>
  );
};

export default page;
