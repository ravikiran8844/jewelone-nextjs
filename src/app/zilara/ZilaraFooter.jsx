import Image from "next/image";
import Link from "next/link";
import React from "react";

const ZilaraFooter = () => {
    const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="zillara-footer">
      <div className="container py-5">
        <div className="col-12 d-flex flex-column flex-md-row gap-4 justify-content-between align-items-center">
          <div>
            <Image
              width={180}
              height={42}
              className="img-fluid"
              src="/zillara.svg"
              alt="logo"
            />
          </div>
            
            <div className="d-flex gap-3 align-items-center">
            <div>
            <Link  target="_blank" href="https://www.facebook.com/ZilaraJewellery/">
              <Image
                width={32}
                height={32}
                src="/zillara/footer/facebook.svg"
                alt="facebook icon"
              />
            </Link>
          </div>
          {/* <div>
            <Link target="_blank" href="/">
              <Image
                width={32}
                height={32}
                src="/zillara/footer/twitter.svg"
                alt="twitter icon"
              />
            </Link>
          </div> */}
          <div>
            <Link target="_blank" href="https://www.instagram.com/zilara_jewellery">
              <Image
                width={32}
                height={32}
                src="/zillara/footer/instagram.svg"
                alt="instagram icon"
              />
            </Link>
          </div>
            </div>
        </div>
        <hr className="my-4" />
        <div className="col-12">
            <div className="copyright-text text-center text-md-start">© {year} Zilara Silver Redefined. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default ZilaraFooter;
