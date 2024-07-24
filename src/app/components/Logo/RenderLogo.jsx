"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RenderLogo = ({logo}) => {
    // const currentRoute = usePathname();
console.log(logo);
    switch (logo) {
      case "florencia":
        return (
          
            <Image
              width={265}
              height={46}
              className="img-fluid"
              src="/florencia/logo.svg"
              alt="logo"
              priority
            />
         
        );
      case "zilara":
        return (
         
            <Image
              width={222}
              height={56}
              className="img-fluid"
              src="/zillara.svg"
              alt="logo"
              priority
            />
         
        );
      default:
        return (
          <Link className="navbar-brand" href="/">
            <Image
              width={222}
              height={56}
              className="img-fluid"
              src="/JO_Logo.svg"
              alt="logo"
              priority
            />
          </Link>
        );
    }
  };

export default RenderLogo