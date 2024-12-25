"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RenderLogo = ({logo}) => {
    // const currentRoute = usePathname();
// console.log(logo);
    switch (logo) {
      case "florencia":
        return (
          <span className="navbar-brand">

            <Image
              width={200}
              height={42}
              className="img-fluid"
              src="/florencia/logo.svg"
              alt="logo"
              priority
            />
         </span>
        );
      case "zilara":
        return (
          <span className="navbar-brand">
            <Image
              width={222}
              height={56}
              className="img-fluid"
              src="/zillara.svg"
              alt="logo"
              priority
            />
         </span>
        );
        case "jewelone-white":
          return (
            <span className="navbar-brand">
              <Image
                width={222}
                height={56}
                className="img-fluid"
                src="/jewelone-white.svg"
                alt="logo"
                priority
              />
           </span>
          );
          case "jewelone-black":
            return (
              <span className="navbar-brand">
                <Image
                  width={222}
                  height={56}
                  className="img-fluid"
                  src="/JO_Logo.svg"
                  alt="logo"
                  priority
                />
             </span>
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