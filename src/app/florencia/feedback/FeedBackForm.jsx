"use client";
import { useState } from "react";
import "./FeedBackForm.css";
import Image from "next/image";


const FeedBackForm = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOk = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderButtons = () => {
    if (currentStep === 1) {
      return <button onClick={handleNext}>Next</button>;
    } else if (currentStep === 3) {
      return (
        <>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleOk}>OK</button>
        </>
      );
    } else if (currentStep < 3) {
      return (
        <>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </>
      );
    } else {
      return null; // No buttons for the thank-you step
    }
  };
  const renderSlideContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div>
              <div className="mb-4 text-center">
                <span className="fs-4 alt-color">01.</span>{" "}
                <span className="fs-3">Basic Information</span>
              </div>

              <div className="row gy-4 gx-2">
                <div className="col-12">
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div>
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" name="" id="" />
                  </div>
                </div>

                <div className="col-12 col-md-8">
                  <div>
                    <label>Phone</label>
                    <input
                      type="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div>
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your address"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your mail id"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return <div>Slide 2 Content</div>;
      case 3:
        return <div>Slide 3 Content</div>;
      case 4:
        return<div>
           
              <div className="col-12 text-center m-auto" style={{maxWidth:'503px'}}>
                <div className="display-3 mb-5 brittany-font">Thank you</div>
                <div className="fs-5">for your time and valuable feedback. We look forward to serving you again!</div>
              </div>
        </div>;
      default:
        return <div></div>;
    }
  };




  const SlideImage = () => {

    switch (currentStep) {
      case 1:
        
      return (<div>
          <Image
            alt="banner image 1"
            className="img-fluid w-100"
            src="/florencia/feedbackForm/form-banner1.webp"
            width={1980}
            height={608}
          />
      </div>);
          case 2:
        
          return (<div>
              <Image
                alt="banner image 3"
                className="img-fluid w-100"
                src="/florencia/feedbackForm/form-banner2.webp"
                width={1980}
                height={608}
              />
          </div>);
              case 3:
        
              return (<div>
                  <Image
                    alt="banner image 3"
                    className="img-fluid w-100"
                    src="/florencia/feedbackForm/form-banner3.webp"
                    width={1980}
                    height={608}
                  />
              </div>);
    
      default:
        return <div></div>;
    }

  };

  

  const progressPercentage = (currentStep / totalSteps) * 100;

  const sectionStyle = currentStep === 4 
    ? { background: 'rgba(88, 59, 90, 0.90)', color:'#fff' } 
    : {};


  return (
    <section className="FeedBackForm" style={sectionStyle}>
      {SlideImage()}
      <div className="container py-5">
        {currentStep == 1 && (
          <div className="col-12">
            <div className="text-center mb-5">
              <div className="fs-3 form-main-title fw-semibold">
                Customer Feedback{" "}
                <span className="brittany-font">Questionnaire</span>
              </div>

              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={152}
                  height={5}
                  viewBox="0 0 152 5"
                  fill="none"
                >
                  <path
                    d="M2 2.58881L150 2.58881"
                    stroke="url(#paint0_linear_5758_9590)"
                    strokeWidth={4}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5758_9590"
                      x1={2}
                      y1="2.08881"
                      x2={150}
                      y2="2.08881"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7E4299" />
                      <stop offset={1} stopColor="#CC75A9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="m-auto" style={{ maxWidth: '700px' }}>
                <div className="mb-2">
                  Thank you for visiting <b>Florencia Diamonds.</b>
                </div>
                <div>
                  <b>Your feedback is valuable to us.</b> Please take a few
                  minutes to share your experience with us so we can improve our
                  services.
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="col-12 col-lg-10 col-xl-8 m-auto">
          <div className="d-flex flex-column flex-md-row gap-md-5 justify-content-between align-items-center">
            <div className=" flex-grow-1 d-flex flex-column justify-content-center align-content-center" style={{minHeight:'700px'}}>
              <div>{renderSlideContent()}</div>
              <div className="pt-4 mt-5 form_buttons-wrapper">
                {renderButtons()}
              </div>
            </div>

              { currentStep !=4 && (
                <div className="progressBar">
                <div
                  className="progress"
                  style={{ height: `${progressPercentage}%` }}
                ></div>
              </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBackForm;
