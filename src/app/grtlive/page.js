
import Image from "next/image";
// import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import "./grtlive.css";
import GrtReviewSlider from "../components/GRTLIVE/GrtReviewSlider";
import GrtFormSection from "../components/GRTLIVE/GrtFormSection";

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

    <GrtFormSection/>

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
