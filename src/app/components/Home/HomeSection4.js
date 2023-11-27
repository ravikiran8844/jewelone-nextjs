import React from 'react'

const HomeSection4 = () => {
  return (
    <section className="home-section4">
  <div className="col-12 position-relative">
    <picture>
      <source
        srcSet="/swarna-sakthi-small.webp"
        type="image/webp"
        media="(max-width: 650px)"
      />
      <img
        width={1920}
        height={680}
        src="/swarna-sakthi-large.webp"
        alt="swarna sakthi banner"
      />
    </picture>
    <div className="home-section4_app-links">
      <div className="text-center border-top border-black">
        <div className="home-section4_app-links-title py-2">
          Download Swarna Sakthi App
        </div>
        <div>
          <a href="">
            <img
              width={146}
              height={43}
              className="img-fluid"
              src="/google-play.webp"
              alt="google play"
            />
          </a>
          <a href="">
            <img
              width={146}
              height={43}
              className="img-fluid"
              src="/app-store.webp"
              alt="app store"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeSection4