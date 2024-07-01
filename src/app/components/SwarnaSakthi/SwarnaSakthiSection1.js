import Image from "next/image";
import React from "react";
import "./SwarnaSakthi.css";

const SwarnaSakthiSection1 = () => {
  return (
    <div className="swarna-sakthi-section1 position-relative">
      <picture>
        <source
          srcSet="/swarna-sakthi-banner.webp"
          type="image/webp"
          media="(min-width: 768px)"
        />

        <Image
          alt="main banner"
          src="/swarna-sakthi-mobile-banner.webp"
          height={1059}
          width={1920}
          priority="true"
          className="img-fluid"
        />
      </picture>

      <div className="app-store-icons">
        <div className="fs-6 fw-semibold mb-3">Download Swarna Sakthi App</div>
        <div className="d-flex gap-2">
          <a target="_blank" href="https://apps.apple.com/in/app/jewelone/id1507128724">
            <Image
              alt="app store"
              src="/swarna-sakthi/app-store.png"
              height={32}
              width={140}
              className="img-fluid"
            />
          </a>

          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US">
          <Image
            alt="play store"
            src="/swarna-sakthi/play-store.png"
            height={32}
            width={140}
            className="img-fluid"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SwarnaSakthiSection1;
