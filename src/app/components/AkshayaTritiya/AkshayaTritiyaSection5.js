import React from "react";
import "./AkshayaTritiya.css";
import Image from "next/image";
import Link from "next/link";

const AkshayaTritiyaSection5 = () => {
  return (
    <section className="AkshayaTritiyaSection5">
      <div className="container-fluid p-0">
        <a target="_blank" href="https://www.amazon.in/dp/B0CX1N8QPZ">
          <Image
            width={1105}
            height={308}
            className="img-fluid w-100 h-auto"
            alt="coins"
            src="/AkshayaTritiya/coins.webp"
          />
        </a>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection5;
