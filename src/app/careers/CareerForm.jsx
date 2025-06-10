"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CareerForm = () => {
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState(""); // State to store the uploaded file name


  const shortenFileName = (name, maxLength = 18) => {
    if (name.length <= maxLength) return name;
  
    const ext = name.substring(name.lastIndexOf('.')); // file extension
    const prefix = name.substring(0, 12);              // first 12 characters
    const suffix = name.substring(name.length - 8);     // last 8 characters
    return `${prefix}...${suffix}`;
  };
  

  const {
    register,
    handleSubmit,
    clearErrors, // Add this to clear errors
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
    if (onlyDigits.length >= 10) {
      clearErrors('mobile'); // Clear error when valid
    }
  };


  const sendMail = (data) => {
    setLoading(true);
    const apiEndpoint = "/api/careers";
    
    // Create FormData object
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("position", data.position);
    formData.append("city", data.city);
    formData.append("resume", data.resume[0]); // Attach the file (first file in array)

    fetch(apiEndpoint, {
      method: "POST",
      body: formData, // Send FormData
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setLoading(false);
        reset();
        toast.success("Form submitted successfully!", {
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
        toast.error("Failed to submit form. Please try again later.", {
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
                  <div className="fs-4 fw-semibold text-white mb-3">Submit your profile</div>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-2">
                <div>
                  <input
                    {...register("name", { required: true})}
                    className="form-control"
                    placeholder="Enter your full name"
                    type="text"
                    required
                  />
                  {errors.name?.type === "required" && (
                    <div className="contact-required mt-1" role="alert">
                      *Name is Required
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
                    <div className="contact-required mt-1" role="alert">
                      *Email is Required
                    </div>
                  )}
                </div>

                <div>
                  <input
                  required
                    {...register("mobile", { required: true, minLength: 10 })}
                    className="form-control"
                    placeholder="Enter your contact number"
                    maxLength={10}
                    type="tel"
                    onChange={handleMobileChange}
                  />
                   {errors.mobile?.type === "required" && (
                    <div className="contact-required mt-1" role="alert">
                       *Mobile Number is Required
                    </div>
                  )}
                  {errors.mobile?.type === "minLength" && (
                    <div className="contact-required mt-1" role="alert">
                      *Enter a Valid 10 Digit Mobile Number
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
                    <div className="contact-required mt-1" role="alert">
                      *City is Required
                    </div>
                  )}
                </div>

                <div>
                  <div className="mb-1" style={{ color: "#F4D86C" }}>Upload Your Resume</div>
                  <div className="mb-1 text-white">Resume</div>
                  <div>
                    <label htmlFor="resume" className="upload-resume-input">Browse</label>
                  </div>
                  <input id="resume"
                  
                    {...register("resume", { required: false })}
                    className="form-control d-none"
                    type="file"

                    onChange={(e) => {
                      if (e.target.files.length > 0) {
                        const fullName = e.target.files[0].name;
                        setResumeName(shortenFileName(fullName));
                      } else {
                        setResumeName("");
                      }
                    }}
                    accept="application/pdf,image/jpeg,image/png"
                  />
                  <div>
                  {resumeName && (
                  <div className="mt-1 text-white" style={{maxWidth: '300px'}}>
                    Selected File: <strong>{resumeName}</strong>
                  </div>
                )}
                  </div>
                  <div className="d-flex align-items-center gap-1 mt-1 text-white" style={{ fontSize: "12px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>

                    JPG and PDF files up to 5MB</div>
                  
                </div>

                <div>
                  <select required {...register("position", { required: true })} className="form-select">
                    <option value="">Select Position</option>
                    <option value="Sales & Marketing Role (Showroom)">Sales & Marketing Role (Showroom)</option>
                    <option value="Backoffice Role (Office in Coimbatore)">Backoffice Role (Office in Coimbatore)</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.position?.type === "required" && (
                    <div className="contact-required mt-1" role="alert">
                      *Position is Required
                    </div>
                  )}
                </div>

                <div>
                  <button type="submit" className="btn btn-warning px-4 mt-2">
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
