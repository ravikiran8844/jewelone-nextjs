import React from "react";
import "./AkshayaTritiya.css";
import Image from "next/image";
import Link from "next/link";

const AkshayaTritiyaSection5 = () => {
  return (
    <section className="AkshayaTritiyaSection5">
      <div className="container-fluid p-0">
        <Link href="https://amazon.in/">
          <Image
            width={1105}
            height={308}
            className="img-fluid w-100 h-auto"
            alt="coins"
            src="/AkshayaTritiya/coins.webp"
          />
        </Link>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection5;
