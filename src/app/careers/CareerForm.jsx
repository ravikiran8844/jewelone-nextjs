"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Toast } from "react-bootstrap";

const CareerForm = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    sendMail(data);
    console.log(data);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    const onlyDigits = value.replace(/\D/g, '');
    setValue('mobile', onlyDigits);
  };

  const sendMail = (data) => {
    setLoading(true);
    const apiEndpoint = "https://jewelonestaging.brightbridge.co/wp-json/contact-form-7/v1/contact-forms/260/feedback";
    
    const formData = new FormData();
    formData.append('your-name', data.name);
    formData.append('your-email', data.email);
    formData.append('your-mobile', data.mobile);
    formData.append('your-city', data.city);
    formData.append('your-position', data.position);
    formData.append('your-resume', data.resume[0]); // Assuming only one file is uploaded
    formData.append('_wpcf7_unit_tag', 'wpcf7-f6-p7-o1');
  
    fetch(apiEndpoint, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setLoading(false);
        reset();
        setToastMessage("Form submitted successfully!");
        setShowToast(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        reset();
        setToastMessage("Failed to submit form. Please try again later.");
        setShowToast(true);
      });
  };

  return (
    <div className="contact-section1_form-wrapper">
              <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                <div>
                  <input
                    {...register("name", { required: true })}
                    className="form-control"
                    placeholder="Your Name"
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
                    placeholder="Your Email"
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
                    {...register("mobile", { required: true, maxLength: 12 })}
                    className="form-control"
                    placeholder="Your Mobile"
                    maxLength={12}
                    type="tel"
                    onChange={handleMobileChange}
                  />
                  {errors.mobile?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Mobile No is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                    {...register("city", { required: true })}
                    className="form-control"
                    placeholder="Your City"
                    type="text"
                  />
                  {errors.city?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      City is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                    {...register("resume", { required: true })}
                    className="form-control"
                    type="file"
                    accept="application/pdf,image/jpeg,image/png"
                  />
                  {errors.resume?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Resume is Required
                    </div>
                  )}
                </div>

                <div>
                  <select {...register("position", { required: true })} className="form-control">
                    <option value="">Select Position</option>
                    <option value="Sales & Marketing Role (Showroom)">Sales & Marketing Role (Showroom)</option>
                    <option value="Backoffice Role (Office in Coimbatore)">Backoffice Role (Office in Coimbatore)</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.position?.type === "required" && (
                    <div className="text-danger contact-required" role="alert">
                      Position is Required
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    {loading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : <span>SUBMIT</span>}
                  </button>
                </div>
              </form>
            </div>
  );
};

export default CareerForm;
