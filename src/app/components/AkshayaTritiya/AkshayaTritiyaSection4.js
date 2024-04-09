"use client"

import React, { useState } from 'react';
import "./AkshayaTritiya.css";
import Image from "next/image";

const AkshayaTritiyaSection4 = () => {
  const [amount, setAmount] = useState('');
  const [grams, setGrams] = useState('');
  const [goldRate, setGoldRate] = useState(6460); // Initial gold rate

  // Function to handle change in amount input
  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    setAmount(inputAmount);
    const calculatedGrams = parseFloat(inputAmount) / goldRate;
    if (!isNaN(calculatedGrams)) {
      setGrams(calculatedGrams.toFixed(3));
    } else {
      setGrams('');
    }
  };

  // Function to handle change in grams input
  const handleGramsChange = (event) => {
    const inputGrams = event.target.value;
    setGrams(inputGrams);
    const calculatedAmount = parseFloat(inputGrams) * goldRate;
    if (!isNaN(calculatedAmount)) {
      setAmount(calculatedAmount.toFixed(2));
    } else {
      setAmount('');
    }
  };


  return (
    <section className="AkshayaTritiyaSection4">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Image
              width={518}
              height={400}
              className="img-fluid"
              alt="Akshaya Tritiya"
              src="/AkshayaTritiya/Akshaya-Tritiya.webp"
            />

            <div>
              <div className="mt-5 mb-2 text-warning fs-3">
                Terms & Conditions
              </div>
              <ul className="text-light">
                <li>
                  Pay as minimum advance and book your favourite jewellery.
                  Avail rate of gold at the time of booking or at the time of
                  purchase, whichever is lower.
                </li>
                <li>
                  Pay as minimum advance and book your favourite jewellery.
                  Avail rate of gold at the time of booking or at the time of
                  purchase, whichever is lower.
                </li>
                <li>
                  Pay as minimum advance and book your favourite jewellery.
                  Avail rate of gold at the time of booking or at the time of
                  purchase, whichever is lower.
                </li>
                <li>
                  Pay as minimum advance and book your favourite jewellery.
                  Avail rate of gold at the time of booking or at the time of
                  purchase, whichever is lower.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-5">
      <div className="card AkshayaTritiyaSection4__form">
        <div className="card-body py-4">
          <div className="text-center">
            <div className="mb-3">
            <Image
                alt="jewelone logo"
                className="img-fluid"
                src="/jewelone-logo.webp"
                width={200}
                height={60}
              />
            </div>
            <div className="mb-3 fs-2 fw-semibold text-red">Advance Booking Open</div>

            <div className="mb-3 fs-6 text-gold fw-medium">Current Gold Rate : <span className="fw-bold">₹{goldRate}</span> per gram</div>

            <div className="mb-3 AkshayaTritiyaSection4__prebook-text">Pre-book your Jewellery</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Pre-Book Amount<span>*</span></label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Total Grams<span>*</span></label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="0.000"
                value={grams}
                onChange={handleGramsChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Nearest Store Location<span>*</span></label>
            <div>
              <select className="form-select">
                <option>
                  location 1
                </option>
              </select>
            </div>
          </div>

          <div className="form-check mb-3">
            <input type='checkbox' className="form-check-input" />
            <label className="form-check-label">I agree with the terms & conditions</label>
          </div>

          <div>
            <button type="submit" className="btn AkshayaTritiyaSection4__prebook-btn px-4 py-2">PRE-BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaSection4;
