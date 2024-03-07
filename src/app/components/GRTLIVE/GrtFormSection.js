"use client";
import React from "react";
import { useForm } from "react-hook-form";

const GrtFormSection = () => {
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
    const apiEndpoint = "/api/book-appointment";
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
    <section>
      <div className="container py-4 py-lg-5">
        <div className="row g-4">
          <div className="col-12 col-lg-7 order-1 order-lg-0">
            <div className="grtlive-youtube-iframe">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/WzZ4Mx9NXLI?si=rUmxuMdy1noVes9k&autoplay=1&mute=1&rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-5 order-0 order-lg-1">
            <div className="card book-appointment-form">
              <div className="card-body">
                <div className="fs-4 fw-semibold mb-4 text-center">
                  BOOK A NO OBLIGATION APPOINTMENT
                </div>

                <div className="row">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12 mb-4">
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                      {errors.name && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          Name is Required
                        </div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        {...register("phone", { required: true })}
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                      {errors.phone && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          Phone is Required
                        </div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        className="form-control"
                        placeholder="Email ID"
                      />
                      {errors.email && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          Email is Required
                        </div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        {...register("city", { required: true })}
                        type="text"
                        className="form-control"
                        placeholder="City Or Country"
                      />
                      {errors.city && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          City is Required
                        </div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label">
                        Which category do you want to shop?
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        name="category"
                        className="form-select"
                        {...register("jewelType", { required: true })}
                      >
                        <option value="">--Select Category--</option>
                        <option value="Diamond-Jewellery">
                          Diamond Jewellery
                        </option>
                        <option value="Gold-Jewellery">Gold Jewellery</option>
                        <option value="Silver-Jewellery">
                          Silver Jewellery
                        </option>
                        <option value="Other-Products">Other Products</option>
                      </select>
                      {errors.jewelType && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          Category is Required
                        </div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label">
                        Preferred Language?{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        name="Language"
                        className="form-select"
                        {...register("language", { required: true })}
                      >
                        <option value="">--Select Language--</option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="kannada">Kannada</option>
                        <option value="telugu">Telugu</option>
                        <option value="tamil">Tamil</option>
                        <option value="malayalam">Malayalam</option>
                      </select>
                      {errors.language && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          Language is Required
                        </div>
                      )}
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-6 mb-4">
                          <label className="form-label">
                            Date<span className="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            {...register("date", { required: true })}
                          />
                          {errors.date && (
                            <div
                              className="text-danger contact-required"
                              role="alert"
                            >
                              Date is Required
                            </div>
                          )}
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label">
                            Time<span className="text-danger">*</span>
                          </label>
                          <input
                            type="time"
                            className="form-control"
                            {...register("time", { required: true })}
                          />
                          {errors.time && (
                            <div
                              className="text-danger contact-required"
                              role="alert"
                            >
                              Time is Required
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-4">
                      <label className="form-label">
                        When do you want us to reach you?
                        <span className="text-danger">*</span>
                      </label>
                      <label className="form-label">
                        To get more details about your requirement
                      </label>
                      <input
                        {...register("details", { required: true })}
                        type="text"
                        className="form-control"
                        placeholder="Ex: Call me at 10am tomorrow"
                      />
                      {errors.details && (
                        <div
                          className="text-danger contact-required"
                          role="alert"
                        >
                          Details are Required
                        </div>
                      )}
                    </div>
                    <div className="col-12 mb-4">
                      <button
                        type="submit"
                        className="btn btn-danger px-4 py-2 fs-6"
                        style={{ backgroundColor: "#bf3e43" }}
                      >
                        BOOK AN APPOINTMENT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrtFormSection;
