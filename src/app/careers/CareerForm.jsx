"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CareerForm = () => {
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState(""); // State to store the uploaded file name

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


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB in bytes
  
    if (file) {
      if (file.size > maxSizeInBytes) {
        toast.error('File size exceeds 5MB. Please upload a smaller file.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setResumeName(""); // Clear the filename if validation fails
        return;
      }
      setResumeName(file.name); // Update state with the valid file name
    }
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
        toast.success('Form submitted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        reset();
        toast.error('Failed to submit form. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };

  return (
       <div>
        <div className="careers-form">
              <div className="card bg-transparent border-0">
                <div className="card-body">
                  <div className="fs-3 fw-semibold text-white mb-4">Submit your profile</div>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3">
                <div>
                  <input
                  required
                    {...register("name", { required: true })}
                    className="form-control"
                    placeholder="Enter your full name"
                    type="text"
                  />
                  {errors.name?.type === "required" && (
                    <div className="text-white contact-required mt-1" role="alert">
                      Name is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                  required

                    {...register("email", { required: true })}
                    className="form-control"
                    placeholder="Enter your email"
                    type="email"
                  />
                  {errors.email?.type === "required" && (
                    <div className="text-white contact-required mt-1" role="alert">
                      Email is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                  required

                    {...register("mobile", { required: true, maxLength: 12 })}
                    className="form-control"
                    placeholder="Enter your contact number"
                    maxLength={12}
                    type="tel"
                    onChange={handleMobileChange}
                  />
                  {errors.mobile?.type === "required" && (
                    <div className="text-white contact-required mt-1" role="alert">
                      Mobile No is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                  required
                    {...register("city", { required: true })}
                    className="form-control"
                    placeholder="Enter your city"
                    type="text"
                  />
                  {errors.city?.type === "required" && (
                    <div className="text-white contact-required mt-1" role="alert">
                      City is Required
                    </div>
                  )}
                </div>

                <div>
                  <div className="mb-2" style={{ color: "#F4D86C" }}>Upload Your Resume</div>
                  <div className="mb-2 text-white">Resume</div>
                  <div>
                    <label htmlFor="resume" className="upload-resume-input">Browse</label>
                  </div>
                  <input id="resume"
                    {...register("resume", { required: false })}
                    className="form-control d-none"
                    type="file"
                    accept="application/pdf,image/jpeg,image/png"
                    onChange={handleFileChange}
                  />
                  <div>
                  {resumeName && (
                  <div className="mt-2 text-white">
                    Selected File: <strong>{resumeName}</strong>
                  </div>
                )}
                  </div>
                  <div className="d-flex align-items-center gap-1 mt-2 text-white" style={{ fontSize: "14px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>

                    JPG and PDF files up to 5MB</div>
                  
                </div>

                <div>
                  <select {...register("position", { required: true })} className="form-select" required>
                    <option value="">Select Position</option>
                    <option value="Sales & Marketing Role (Showroom)">Sales & Marketing Role (Showroom)</option>
                    <option value="Backoffice Role (Office in Coimbatore)">Backoffice Role (Office in Coimbatore)</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.position?.type === "required" && (
                    <div className="text-white contact-required mt-1" role="alert">
                      Position is Required
                    </div>
                  )}
                </div>

                <div>
                  <button type="submit" className="btn btn-warning px-4">
                    {loading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : <span>SUBMIT</span>}
                  </button>
                </div>
              </form>
                </div>
              </div>
            </div>
            
       </div>    

  );
};

export default CareerForm;
