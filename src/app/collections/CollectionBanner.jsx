import React from 'react'

const CollectionBanner = () => {
  return (
    <section>
        <div>
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet="/collections/banner/collection-banner.webp"
                />
                <img
                    src="/collections/banner/collection-banner-mobile.webp"
                    alt="collection banner"
                    className="img-fluid"
                />
            </picture>
        </div>
    </section>
  )
}

export default CollectionBanner