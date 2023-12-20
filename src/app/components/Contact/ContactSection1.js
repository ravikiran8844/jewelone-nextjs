"use client";

import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Image from "next/image";

const ContactSection1 = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendMail(data);
    console.log(data);
    reset();
  };

  const sendMail = (data) => {
    const apiEndpoint = "/api/contact";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-section1 section-padding pb-3" style={{
      width: '100%',
      height: '100%',
      background: 'url("/contact-page-bg.webp") center/cover no-repeat',
      position: 'relative',
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div>
              <div className="contact-section-label mb-2">CONTACT</div>
              <div className="contact-section-title mb-4">Get in touch</div>
              <p className="contact-section-text">
                Have a question or want to connect with us? We're here to help!
                Fill out the form with your name, email address, mobile number and your
                message, and we'll get back to you as soon as possible. Your
                feedback is valuable to us.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="contact-section1_form-wrapper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    {...register("name", { required: true })}
                    className="form-control"
                    placeholder="Name"
                    type="text"
                  />
                  {errors.name?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Name is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                    {...register("email", { required: true })}
                    className="form-control"
                    placeholder="Email Address"
                    type="email"
                  />
                  {errors.email?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Email is Required
                    </div>
                  )}
                </div>
                <div>
                  <input
                    {...register("mobile", { required: true })}
                    className="form-control"
                    placeholder="Mobile Number"
                    type="number"
                  />

                  {errors.mobile?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Mobile No is Required
                    </div>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("message", { required: false })}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5 section1-info-cards">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body d-flex  align-items-center">
                <div className="me-2">
                  <Image
                    className="img-fluid"
                    height={50}
                    width={50}
                    src="/email.png"
                    alt="email icon"
                  />
                </div>
                <div>
                  <div className="mb-2 card-label">Email</div>
                  <div className="card-text">customercare@jewelone.in</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body d-flex  align-items-center">
                <div className="me-2">
                  <Image
                    className="img-fluid"
                    height={50}
                    width={50}
                    src="/phone.png"
                    alt="phone icon"
                  />
                </div>
                <div>
                  <div className="mb-2 card-label">Phone</div>
                  <div className="card-text">1800 1033916</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0 ">
            <div className="card">
              <div className="card-body d-flex align-items-center ">
                <div className="me-2">
                  <Image
                    className="img-fluid"
                    height={50}
                    width={50}
                    src="/address.png"
                    alt="address icon"
                  />
                </div>
                <div>
                  <div className="mb-2 card-label">Jewel One HeadOffice</div>
                  <div className="card-text">
                    230, E TV Swamy Rd, R.S. Puram, Coimbatore, Tamil Nadu
                    641002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection1;
