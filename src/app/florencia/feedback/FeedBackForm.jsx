"use client";

import { useState } from "react";
import "./FeedBackForm.css";
import Image from "next/image";

const FeedBackForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isChecked, setIsChecked] = useState(true);
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      dateOfBirth: "",
      phone: "",
      address: "",
      email: "",
    },
    shoppingExperience: {
      question1: { question: 'How did you hear about our shop?', answer: '' },
      question2: { question: 'How would you rate your overall shopping experience?', answer: '' },
      question3: { question: 'How satisfied were you with the variety of jewelry available?', answer: '' },
      question4: { question: 'How would you rate the customer service provided by our staff?', answer: '' },
    },
    storeEnvironment: {
      question1: { question: 'How would you rate the ambiance of our shop?', answer: '' },
    },
    recommendToOthers: isChecked,
    suggestions: "",
  });

  const totalSteps = 4;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value.replace(/\D/g, "");
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        phone: phoneNumber,
      },
    });
  };

  const handleSuggestionsChange = (event) => {
    setFormData({
      ...formData,
      suggestions: event.target.value,
    });
  };

  const handleNext = () => {
    if (isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const isStepValid = (currentStep) => {
    switch (currentStep) {
      case 1:
        return (
          formData.personalInfo.name &&
          formData.personalInfo.email &&
          formData.personalInfo.address &&
          formData.personalInfo.phone &&
          formData.personalInfo.dateOfBirth
        );
      case 2:
        return (
          formData.shoppingExperience.question1.answer &&
          formData.shoppingExperience.question2.answer &&
          formData.shoppingExperience.question3.answer &&
          formData.shoppingExperience.question4.answer
        );
      case 3:
        return formData.storeEnvironment.question1.answer;
      default:
        return true;
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleOk = async () => {
    if (isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
      console.log(formData);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleChange = (section, question, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [question]: {
          ...prevData[section][question],
          answer: value,
        },
      },
    }));
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
      return null;
    }
  };

  const renderSlideContent = () => {
    switch (currentStep) {
      case 1:
        return (
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
                    value={formData.personalInfo.name}
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalInfo: {
                          ...formData.personalInfo,
                          name: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div>
                  <label>Date of Birth</label>
                  <input
                    required
                    type="date"
                    className="form-control"
                    value={formData.personalInfo.dateOfBirth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalInfo: {
                          ...formData.personalInfo,
                          dateOfBirth: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div>
                  <label>Phone</label>
                  <input
                    required
                    type="tel" // Use type="tel" for phone number input
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.personalInfo.phone}
                    onChange={handlePhoneChange} // Handle phone number change
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <label>Address</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    value={formData.personalInfo.address}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalInfo: {
                          ...formData.personalInfo,
                          address: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <label>Email</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    placeholder="Enter your mail id"
                    value={formData.personalInfo.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personalInfo: {
                          ...formData.personalInfo,
                          email: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="mb-4 text-center">
              <div>
                <span className="fs-4 alt-color">02.</span>{" "}
                <span className="fs-3">Shopping Experience</span>
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
            </div>

            <div className="row g-4">
              <div className="col-12">
                <div className="mb-3 fs-5">
                  <b>A.</b> How did you hear about our shop?
                </div>
                <div className="radio-items-grid">
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question1"
                      id="shopping-exp-question1-option1"
                      value="social-media"
                      checked={
                        formData.shoppingExperience.question1.answer === "social-media"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question1-option1">
                      Social Media
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question1"
                      id="shopping-exp-question1-option2"
                      value="word-of-mouth"
                      checked={
                        formData.shoppingExperience.question1.answer ===
                        "word-of-mouth"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question1-option2">
                      Word of Mouth
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question1"
                      id="shopping-exp-question1-option3"
                      value="walk-in"
                      checked={
                        formData.shoppingExperience.question1.answer === "walk-in"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question1-option3">
                      Walk-in
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question1"
                      id="shopping-exp-question1-option4"
                      value="others"
                      checked={
                        formData.shoppingExperience.question1.answer === "others"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question1-option4">
                      Others
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mb-3 fs-5">
                  <b>B.</b> How would you rate your overall shopping experience?
                </div>
                <div className="radio-items-grid">
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question2"
                      id="shopping-exp-question2-option1"
                      value="excellent"
                      checked={
                        formData.shoppingExperience.question2.answer === "excellent"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question2",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question2-option1">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Excellent.png"
                        alt="Checked Image"
                      />
                      <div>Excellent</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question2"
                      id="shopping-exp-question2-option2"
                      value="good"
                      checked={formData.shoppingExperience.question2.answer === "good"}
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question2",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question2-option2">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Good.png"
                        alt="Checked Image"
                      />
                      <div>Good</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question2"
                      id="shopping-exp-question2-option3"
                      value="Average"
                      checked={
                        formData.shoppingExperience.question2.answer === "Average"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question2",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question2-option3">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Average.png"
                        alt="Checked Image"
                      />
                      <div>Average</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question2"
                      id="shopping-exp-question2-option4"
                      value="poor"
                      checked={formData.shoppingExperience.question2.answer === "poor"}
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question2",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question2-option4">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Poor.png"
                        alt="Checked Image"
                      />
                      <div>Poor</div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mb-3 fs-5">
                  <b>C.</b> How satisfied were you with the variety of jewelry available?
                </div>
                <div className="radio-items-grid">
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question3"
                      id="shopping-exp-question3-option1"
                      value="Very Satisfied"
                      checked={
                        formData.shoppingExperience.question3.answer ===
                        "Very Satisfied"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question3",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question3-option1">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Excellent.png"
                        alt="Checked Image"
                      />
                      <div>Very Satisfied</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question3"
                      id="shopping-exp-question3-option2"
                      value="Satisfied"
                      checked={
                        formData.shoppingExperience.question3.answer === "Satisfied"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question3",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question3-option2">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Good.png"
                        alt="Checked Image"
                      />
                      <div>Satisfied</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question3"
                      id="shopping-exp-question3-option3"
                      value="Neutral"
                      checked={
                        formData.shoppingExperience.question3.answer === "Neutral"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question3",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question3-option3">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Average.png"
                        alt="Checked Image"
                      />
                      <div>Neutral</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question3"
                      id="shopping-exp-question3-option4"
                      value="Dissatisfied"
                      checked={
                        formData.shoppingExperience.question3.answer === "Dissatisfied"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question3",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question3-option4">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Poor.png"
                        alt="Checked Image"
                      />
                      <div>Dissatisfied</div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mb-3 fs-5">
                  <b>D.</b> How would you rate the customer service provided by our staff?
                </div>
                <div className="radio-items-grid">
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question4"
                      id="shopping-exp-question4-option1"
                      value="Excellent"
                      checked={
                        formData.shoppingExperience.question4.answer === "Excellent"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question4",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question4-option1">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Excellent.png"
                        alt="Checked Image"
                      />
                      <div>Excellent</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question4"
                      id="shopping-exp-question4-option2"
                      value="Good"
                      checked={formData.shoppingExperience.question4.answer === "Good"}
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question4",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question4-option2">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Good.png"
                        alt="Checked Image"
                      />
                      <div>Good</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question4"
                      id="shopping-exp-question4-option3"
                      value="Average"
                      checked={
                        formData.shoppingExperience.question4.answer === "Average"
                      }
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question4",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question4-option3">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Average.png"
                        alt="Checked Image"
                      />
                      <div>Average</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="shopping-exp-question4"
                      id="shopping-exp-question4-option4"
                      value="Poor"
                      checked={formData.shoppingExperience.question4.answer === "Poor"}
                      onChange={(e) =>
                        handleChange(
                          "shoppingExperience",
                          "question4",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="shopping-exp-question4-option4">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Poor.png"
                        alt="Checked Image"
                      />
                      <div>Poor</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="mb-4 text-center">
              <div>
                <span className="fs-4 alt-color">03.</span>{" "}
                <span className="fs-3">Store Environment</span>
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
            </div>

            <div className="row g-4">
              <div className="col-12 mb-4">
                <div className="mb-3 fs-5">
                  <b>A.</b> How would you rate the ambiance of our shop?
                </div>
                <div className="radio-items-grid">
                  <div>
                    <input
                      type="radio"
                      name="store-environment-question1"
                      id="store-environment-question1-option1"
                      value="excellent"
                      checked={
                        formData.storeEnvironment.question1.answer === "excellent"
                      }
                      onChange={(e) =>
                        handleChange(
                          "storeEnvironment",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="store-environment-question1-option1">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Excellent.png"
                        alt="Checked Image"
                      />
                      <div>Excellent</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="store-environment-question1"
                      id="store-environment-question1-option2"
                      value="good"
                      checked={formData.storeEnvironment.question1.answer === "good"}
                      onChange={(e) =>
                        handleChange(
                          "storeEnvironment",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="store-environment-question1-option2">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Good.png"
                        alt="Checked Image"
                      />
                      <div>Good</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="store-environment-question1"
                      id="store-environment-question1-option3"
                      value="Average"
                      checked={
                        formData.storeEnvironment.question1.answer === "Average"
                      }
                      onChange={(e) =>
                        handleChange(
                          "storeEnvironment",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="store-environment-question1-option3">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Average.png"
                        alt="Checked Image"
                      />
                      <div>Average</div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="store-environment-question1"
                      id="store-environment-question1-option4"
                      value="poor"
                      checked={formData.storeEnvironment.question1.answer === "poor"}
                      onChange={(e) =>
                        handleChange(
                          "storeEnvironment",
                          "question1",
                          e.target.value
                        )
                      }
                    />
                    <label htmlFor="store-environment-question1-option4">
                      <Image
                        width={50}
                        className="img-fluid"
                        height={50}
                        src="/florencia/feedbackForm/Poor.png"
                        alt="Checked Image"
                      />
                      <div>Poor</div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div>
                  <span className="fs-4 alt-color">04.</span>{" "}
                  <span className="fs-3">Feedback and Suggestiont</span>
                </div>
                <div>
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
              </div>

              <div className="col-12">
                <div className="fs-5 mb-2">
                  Would you recommend our shop to others?
                </div>

                <div>
                  <input
                    className="d-none"
                    id="toggle-btn"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />

                  <div>
                    <label htmlFor="toggle-btn" className="yes-no-toggle">
                      {isChecked ? (
                        <Image
                          width={130}
                          className="img-fluid"
                          height={70}
                          src="/florencia/feedbackForm/toogle-btn-yes.png"
                          alt="Checked Image"
                        />
                      ) : (
                        <Image
                          width={130}
                          className="img-fluid"
                          height={70}
                          src="/florencia/feedbackForm/toogle-btn-no.png"
                          alt="Unchecked Image.png"
                        />
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="fs-5 mb-2">
                  Do you have any suggestions for improvement?
                </div>
                <textarea
                  className="form-control"
                  name="suggestions"
                  id="suggestions"
                  style={{ height: "200px" }}
                  value={formData.suggestions} // Set textarea value from state
                  onChange={handleSuggestionsChange} // Handle textarea change
                ></textarea>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div
              className="col-12 text-center m-auto"
              style={{ maxWidth: "503px" }}
            >
              <div className="display-3 mb-5 brittany-font">Thank you</div>
              <div className="fs-5">
                for your time and valuable feedback. We look forward to serving
                you again!
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const SlideImage = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <Image
              alt="banner image 1"
              className="img-fluid w-100"
              src="/florencia/feedbackForm/form-banner1.webp"
              width={1980}
              height={608}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Image
              alt="banner image 3"
              className="img-fluid w-100"
              src="/florencia/feedbackForm/form-banner2.webp"
              width={1980}
              height={608}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Image
              alt="banner image 3"
              className="img-fluid w-100"
              src="/florencia/feedbackForm/form-banner3.webp"
              width={1980}
              height={608}
            />
          </div>
        );

      default:
        return <div></div>;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const sectionStyle =
    currentStep === 4
      ? { background: "rgba(88, 59, 90, 0.90)", color: "#fff" }
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

              <div className="m-auto" style={{ maxWidth: "700px" }}>
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
            <div
              className=" flex-grow-1 d-flex flex-column justify-content-center align-content-center"
              style={{ minHeight: "700px" }}
            >
              <div>{renderSlideContent()}</div>
              <div className="pt-4 mt-5 form_buttons-wrapper">
                {renderButtons()}
              </div>
            </div>

            {currentStep != 4 && (
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
