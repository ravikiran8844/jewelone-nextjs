"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "./Footer.css";

function SocialLinks() {
  const currentRoute = usePathname();

  switch (currentRoute) {
    case "/zilara":
      return (
        <ul className="list-unstyled footer-social-links">
          <li>
            <a
              aria-label="instagram"
              target="__blank"
              href="https://www.instagram.com/zilara_jewellery"
            >
              <svg
                width={19}
                height={18}
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17307 1.60441C11.5599 1.60441 11.8365 1.61231 12.7771 1.65973C13.6465 1.69925 14.1207 1.84151 14.4368 1.96797C14.8557 2.12604 15.1481 2.32363 15.4643 2.63187C15.7804 2.94801 15.9701 3.24043 16.1282 3.65932C16.2467 3.97546 16.3969 4.44967 16.4364 5.31906C16.4759 6.25958 16.4917 6.5441 16.4917 8.92306C16.4917 11.3099 16.4838 11.5865 16.4364 12.5271C16.3969 13.3964 16.2546 13.8707 16.1282 14.1868C15.9701 14.6057 15.7725 14.8981 15.4643 15.2143C15.1481 15.5304 14.8557 15.7201 14.4368 15.8782C14.1207 15.9967 13.6465 16.1469 12.7771 16.1864C11.8365 16.2259 11.552 16.2417 9.17307 16.2417C6.7862 16.2417 6.50958 16.2338 5.56906 16.1864C4.69968 16.1469 4.22547 16.0046 3.90933 15.8782C3.49044 15.7201 3.19801 15.5225 2.88187 15.2143C2.56573 14.8981 2.37604 14.6057 2.21797 14.1868C2.09942 13.8707 1.94926 13.3964 1.90974 12.5271C1.87022 11.5865 1.85441 11.302 1.85441 8.92306C1.85441 6.5362 1.86232 6.25958 1.90974 5.31906C1.94926 4.44967 2.09152 3.97546 2.21797 3.65932C2.37604 3.24043 2.57363 2.94801 2.88187 2.63187C3.19801 2.31573 3.49044 2.12604 3.90933 1.96797C4.22547 1.84941 4.69968 1.69925 5.56906 1.65973C6.50168 1.61231 6.7862 1.60441 9.17307 1.60441ZM9.17307 0C6.74669 0 6.44635 0.00789724 5.49003 0.0553183C4.54161 0.0948359 3.89352 0.252909 3.32447 0.466304C2.73961 0.695506 2.24169 0.995842 1.74376 1.49376C1.24584 1.99168 0.945509 2.48961 0.716307 3.07447C0.495009 3.64352 0.344842 4.2916 0.305324 5.24002C0.257903 6.18844 0.25 6.49668 0.25 8.92306C0.25 11.3494 0.257903 11.6498 0.305324 12.6061C0.344842 13.5545 0.502912 14.2026 0.716307 14.7717C0.945509 15.3565 1.24584 15.8544 1.74376 16.3524C2.24169 16.8503 2.73961 17.1506 3.32447 17.3798C3.89352 17.6011 4.54161 17.7513 5.49003 17.7987C6.43845 17.8382 6.74669 17.854 9.17307 17.854C11.5994 17.854 11.8998 17.8461 12.8561 17.7987C13.8045 17.7592 14.4526 17.6011 15.0217 17.3798C15.6065 17.1506 16.1044 16.8503 16.6024 16.3524C17.1003 15.8544 17.4006 15.3565 17.6298 14.7717C17.8511 14.2026 18.0013 13.5545 18.0487 12.6061C18.0882 11.6577 18.104 11.3494 18.104 8.92306C18.104 6.49668 18.0961 6.19634 18.0487 5.24002C18.0092 4.2916 17.8511 3.64352 17.6298 3.07447C17.4006 2.48961 17.1003 1.99168 16.6024 1.49376C16.1044 0.995842 15.6065 0.695506 15.0217 0.466304C14.4526 0.245006 13.8045 0.0948359 12.8561 0.0553183C11.8998 0.00789724 11.5994 0 9.17307 0Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M9.1729 4.33887C6.64378 4.33887 4.58887 6.39378 4.58887 8.92291C4.58887 11.452 6.64378 13.5069 9.1729 13.5069C11.702 13.5069 13.7569 11.452 13.7569 8.92291C13.7569 6.39378 11.702 4.33887 9.1729 4.33887ZM9.1729 11.9025C7.52897 11.9025 6.20118 10.5668 6.20118 8.93082C6.20118 7.28689 7.53688 5.95909 9.1729 5.95909C10.8168 5.95909 12.1446 7.29479 12.1446 8.93082C12.1446 10.5668 10.8168 11.9025 9.1729 11.9025Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M15.0062 4.15764C15.0062 4.7504 14.5241 5.23252 13.9313 5.23252C13.3386 5.23252 12.8564 4.7504 12.8564 4.15764C12.8564 3.56488 13.3386 3.08276 13.9313 3.08276C14.532 3.09067 15.0062 3.56488 15.0062 4.15764Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="facebook"
              target="__blank"
              href="https://www.facebook.com/ZilaraJewellery/"
            >
              <svg
                width={10}
                height={20}
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.21475 19.5H6.46606V9.65991H9.43604L9.75 6.36942H6.46606C6.46606 6.36942 6.46606 5.13941 6.46606 4.49699C6.46606 3.72137 6.63577 3.41583 7.4504 3.41583C8.10379 3.41583 9.75 3.41583 9.75 3.41583V0C9.75 0 7.3231 0 6.80548 0C3.64033 0 2.21475 1.28485 2.21475 3.75271C2.21475 5.89936 2.21475 6.37726 2.21475 6.37726H0V9.71475H2.21475V19.5Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>
        </ul>
      );
    default:
      return (
        <ul className="list-unstyled footer-social-links">
          <li>
            <a
              aria-label="instagram"
              target="__blank"
              href="https://www.instagram.com/jewelone_in/"
            >
              <svg
                width={19}
                height={18}
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17307 1.60441C11.5599 1.60441 11.8365 1.61231 12.7771 1.65973C13.6465 1.69925 14.1207 1.84151 14.4368 1.96797C14.8557 2.12604 15.1481 2.32363 15.4643 2.63187C15.7804 2.94801 15.9701 3.24043 16.1282 3.65932C16.2467 3.97546 16.3969 4.44967 16.4364 5.31906C16.4759 6.25958 16.4917 6.5441 16.4917 8.92306C16.4917 11.3099 16.4838 11.5865 16.4364 12.5271C16.3969 13.3964 16.2546 13.8707 16.1282 14.1868C15.9701 14.6057 15.7725 14.8981 15.4643 15.2143C15.1481 15.5304 14.8557 15.7201 14.4368 15.8782C14.1207 15.9967 13.6465 16.1469 12.7771 16.1864C11.8365 16.2259 11.552 16.2417 9.17307 16.2417C6.7862 16.2417 6.50958 16.2338 5.56906 16.1864C4.69968 16.1469 4.22547 16.0046 3.90933 15.8782C3.49044 15.7201 3.19801 15.5225 2.88187 15.2143C2.56573 14.8981 2.37604 14.6057 2.21797 14.1868C2.09942 13.8707 1.94926 13.3964 1.90974 12.5271C1.87022 11.5865 1.85441 11.302 1.85441 8.92306C1.85441 6.5362 1.86232 6.25958 1.90974 5.31906C1.94926 4.44967 2.09152 3.97546 2.21797 3.65932C2.37604 3.24043 2.57363 2.94801 2.88187 2.63187C3.19801 2.31573 3.49044 2.12604 3.90933 1.96797C4.22547 1.84941 4.69968 1.69925 5.56906 1.65973C6.50168 1.61231 6.7862 1.60441 9.17307 1.60441ZM9.17307 0C6.74669 0 6.44635 0.00789724 5.49003 0.0553183C4.54161 0.0948359 3.89352 0.252909 3.32447 0.466304C2.73961 0.695506 2.24169 0.995842 1.74376 1.49376C1.24584 1.99168 0.945509 2.48961 0.716307 3.07447C0.495009 3.64352 0.344842 4.2916 0.305324 5.24002C0.257903 6.18844 0.25 6.49668 0.25 8.92306C0.25 11.3494 0.257903 11.6498 0.305324 12.6061C0.344842 13.5545 0.502912 14.2026 0.716307 14.7717C0.945509 15.3565 1.24584 15.8544 1.74376 16.3524C2.24169 16.8503 2.73961 17.1506 3.32447 17.3798C3.89352 17.6011 4.54161 17.7513 5.49003 17.7987C6.43845 17.8382 6.74669 17.854 9.17307 17.854C11.5994 17.854 11.8998 17.8461 12.8561 17.7987C13.8045 17.7592 14.4526 17.6011 15.0217 17.3798C15.6065 17.1506 16.1044 16.8503 16.6024 16.3524C17.1003 15.8544 17.4006 15.3565 17.6298 14.7717C17.8511 14.2026 18.0013 13.5545 18.0487 12.6061C18.0882 11.6577 18.104 11.3494 18.104 8.92306C18.104 6.49668 18.0961 6.19634 18.0487 5.24002C18.0092 4.2916 17.8511 3.64352 17.6298 3.07447C17.4006 2.48961 17.1003 1.99168 16.6024 1.49376C16.1044 0.995842 15.6065 0.695506 15.0217 0.466304C14.4526 0.245006 13.8045 0.0948359 12.8561 0.0553183C11.8998 0.00789724 11.5994 0 9.17307 0Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M9.1729 4.33887C6.64378 4.33887 4.58887 6.39378 4.58887 8.92291C4.58887 11.452 6.64378 13.5069 9.1729 13.5069C11.702 13.5069 13.7569 11.452 13.7569 8.92291C13.7569 6.39378 11.702 4.33887 9.1729 4.33887ZM9.1729 11.9025C7.52897 11.9025 6.20118 10.5668 6.20118 8.93082C6.20118 7.28689 7.53688 5.95909 9.1729 5.95909C10.8168 5.95909 12.1446 7.29479 12.1446 8.93082C12.1446 10.5668 10.8168 11.9025 9.1729 11.9025Z"
                  fill="#2D2D2D"
                />
                <path
                  d="M15.0062 4.15764C15.0062 4.7504 14.5241 5.23252 13.9313 5.23252C13.3386 5.23252 12.8564 4.7504 12.8564 4.15764C12.8564 3.56488 13.3386 3.08276 13.9313 3.08276C14.532 3.09067 15.0062 3.56488 15.0062 4.15764Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="facebook"
              target="__blank"
              href="https://www.facebook.com/jewelone916"
            >
              <svg
                width={10}
                height={20}
                viewBox="0 0 10 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.21475 19.5H6.46606V9.65991H9.43604L9.75 6.36942H6.46606C6.46606 6.36942 6.46606 5.13941 6.46606 4.49699C6.46606 3.72137 6.63577 3.41583 7.4504 3.41583C8.10379 3.41583 9.75 3.41583 9.75 3.41583V0C9.75 0 7.3231 0 6.80548 0C3.64033 0 2.21475 1.28485 2.21475 3.75271C2.21475 5.89936 2.21475 6.37726 2.21475 6.37726H0V9.71475H2.21475V19.5Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="youtube"
              target="__blank"
              href="https://www.youtube.com/channel/UCCG6vza_ECtCW9D58F8Xh_Q"
            >
              <svg
                width={21}
                height={15}
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0758 2.22313C19.8402 1.3433 19.1568 0.659874 18.2849 0.424207C16.7061 6.69567e-06 10.375 0 10.375 0C10.375 0 4.04393 6.69567e-06 2.46509 0.424207C1.59319 0.659874 0.909814 1.35116 0.674166 2.22313C0.25 3.80995 0.25 7.12501 0.25 7.12501C0.25 7.12501 0.25 10.4401 0.674166 12.0269C0.909814 12.9067 1.59319 13.5901 2.46509 13.8258C4.04393 14.25 10.375 14.25 10.375 14.25C10.375 14.25 16.7061 14.25 18.2849 13.8258C19.1568 13.5901 19.8402 12.8989 20.0758 12.0269C20.5 10.4401 20.5 7.12501 20.5 7.12501C20.5 7.12501 20.5 3.80995 20.0758 2.22313ZM8.30915 10.1337V4.11632L13.5955 7.12501L8.30915 10.1337Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              aria-label="twitter"
              target="__blank"
              href="https://twitter.com/jewelone916"
            >
              <svg
                width={18}
                height={15}
                viewBox="0 0 18 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.25 12.6365C1.8139 13.6589 3.67642 14.25 5.67255 14.25C12.2425 14.25 15.9518 8.61071 15.7318 3.54653C16.4233 3.0433 17.0206 2.40429 17.5 1.6854C16.8634 1.97295 16.1797 2.16465 15.4646 2.25252C16.1954 1.80521 16.7534 1.1023 17.0206 0.263595C16.3369 0.678953 15.5825 0.974494 14.773 1.13425C14.1286 0.431333 13.2091 0 12.1875 0C9.90057 0 8.22666 2.16466 8.73748 4.41718C5.79829 4.26541 3.18917 2.83562 1.44452 0.654983C0.51719 2.26849 0.965139 4.38523 2.53689 5.45558C1.95534 5.4396 1.41309 5.27187 0.933709 5.00827C0.894415 6.6777 2.07323 8.23529 3.77073 8.57876C3.27562 8.71455 2.72551 8.74649 2.1754 8.64265C2.62335 10.0724 3.93575 11.1108 5.48393 11.1428C3.99862 12.333 2.12825 12.8601 0.25 12.6365Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              aria-label="pinterest"
              target="__blank"
              href="https://www.pinterest.com/JewelOne916/"
            >
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53881 11.2775C2.79224 11.3811 3.02191 11.2854 3.09319 10.9985C3.14071 10.7993 3.26742 10.3051 3.32286 10.0979C3.39414 9.81896 3.37038 9.71535 3.16447 9.47625C2.71304 8.94227 2.42793 8.25685 2.42793 7.27655C2.42793 4.44722 4.53458 1.91278 7.90839 1.91278C10.8941 1.91278 12.5414 3.75384 12.5414 6.20858C12.5414 9.4364 11.1238 12.1621 9.00924 12.1621C7.84504 12.1621 6.97386 11.1898 7.25106 10.0023C7.58369 8.58362 8.2331 7.05339 8.2331 6.02527C8.2331 5.10873 7.74208 4.34362 6.72835 4.34362C5.54039 4.34362 4.5821 5.57895 4.5821 7.24467C4.5821 8.30467 4.93849 9.01399 4.93849 9.01399C4.93849 9.01399 3.71885 14.2104 3.50502 15.119C3.07735 16.9281 3.44166 19.1517 3.47334 19.3749C3.48918 19.5104 3.66341 19.5423 3.73469 19.4387C3.84557 19.2952 5.2632 17.5338 5.7463 15.7725C5.88094 15.2784 6.53036 12.6961 6.53036 12.6961C6.91843 13.4373 8.05095 14.0908 9.24683 14.0908C12.8266 14.0908 15.25 10.8072 15.25 6.4158C15.25 3.09233 12.4543 0 8.20143 0C2.91104 0 0.25 3.8176 0.25 6.9976C0.25792 8.92633 0.978617 10.6399 2.53881 11.2775Z"
                  fill="#2D2D2D"
                />
              </svg>
            </a>
          </li>
        </ul>
      );
  }
}

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer-section">
      <section className="container-fluid py-5">
        <div className="col-12">
          <div>
            <div className="footer-grid-item mb-4">
              <div className="text-center">
                <div className="mb-2 footer-section_links_label">
                  Contact Us
                </div>
                <ul className="list-unstyled d-flex gap-4 justify-content-center mb-0">
                  <li>
                    <a
                      target="__blank"
                      href="https://api.whatsapp.com/send?phone=918220017619&text=I%20have%20an%20enquiry%20regarding%20Jewel%20One"
                    >
                      <span className="me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={14}
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M22.7008 16.4002C22.7008 17.7002 21.6008 18.8002 20.3008 18.8002H6.10078L1.30078 23.6002V4.6002C1.30078 3.3002 2.40078 2.2002 3.70078 2.2002H20.4008C21.7008 2.2002 22.8008 3.3002 22.8008 4.6002V16.4002H22.7008Z"
                            stroke="#6D6D6D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Chat with Us
                    </a>
                  </li>
                  <li>
                    <a href="tel:1800 1033916">
                      <span className="me-2">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 28 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.9991 20.1998V23.7998C25.9991 25.0998 24.8991 26.1998 23.5991 26.1998C23.4991 26.1998 23.3991 26.1998 23.3991 26.1998C19.6991 25.7998 16.0991 24.4998 12.9991 22.4998C10.0991 20.6998 7.59908 18.1998 5.79908 15.2998C3.69908 12.1998 2.39908 8.5998 1.99908 4.8998C1.89908 3.4998 2.89908 2.3998 4.19908 2.2998C4.29908 2.2998 4.29908 2.2998 4.39908 2.2998H7.99908C9.19908 2.2998 10.1991 3.1998 10.3991 4.3998C10.5991 5.5998 10.7991 6.6998 11.1991 7.7998C11.4991 8.6998 11.2991 9.6998 10.6991 10.2998L9.19908 11.7998C10.8991 14.7998 13.3991 17.2998 16.3991 18.9998L17.8991 17.4998C18.5991 16.7998 19.5991 16.5998 20.3991 16.9998C21.4991 17.3998 22.5991 17.6998 23.7991 17.7998C25.0991 17.8998 25.9991 18.9998 25.9991 20.1998Z"
                            stroke="#6D6D6D"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      1800 1033916
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-column align-items-xl-center flex-md-row justify-content-center gap-3 gap-xl-1">
              <div className="footer-grid-item d-flex gap-2  flex-column  align-items-center  flex-xl-row order-md-1">
                <div className="footer-section_links_label">
                  Swarna Shakti App Download
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <a
                      target="__blank"
                      href="https://apps.apple.com/in/app/jewelone/id1507128724"
                    >
                      <Image
                        className="img-fluid"
                        width="136"
                        height="44"
                        src="/app-store.webp"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      target="__blank"
                      href="https://play.google.com/store/apps/details?id=com.jewelone.winchit&hl=en&gl=US"
                    >
                      <Image
                        className="img-fluid"
                        width="136"
                        height="44"
                        src="/google-play.webp"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="footer-grid-item order-md-0">
                <div className="d-flex  gap-2 align-items-center flex-column flex-xl-row">
                  <div className="footer-section_links_label">Follow us on</div>
                  <div>
                    <ul className="list-unstyled footer-social-links mb-0">
                      <SocialLinks />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#9F212C" }}>
        <div className="container py-4">
          <div className="col-12">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  className="img-fluid"
                  width="222"
                  height="56"
                  src="/footer-logo.svg"
                  alt="logo"
                />
              </div>

              <div className="footer-section_text text-white">
                &copy; {year} - Jewel One is Trademarked & Registered under
                Emerald Jewel Industry India Limited.{" "}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-1">
            <a
              href="/privacy-policy"
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
                fontSize: 12,
              }}
            >
              Privacy Policy |
            </a>
            <a
              href="/terms-and-conditions"
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
                fontSize: 12,
              }}
            >
            {" "} Terms of Use |
            </a>
            <a
              href="/certifications"
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
                fontSize: 12,
              }}
            >
            {" "} Our Certifications & Policies 
            </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
