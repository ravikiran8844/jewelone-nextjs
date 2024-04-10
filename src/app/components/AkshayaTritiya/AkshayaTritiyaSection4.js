"use client"

import React, { useState } from 'react';
import "./AkshayaTritiya.css";
import Image from "next/image";




const storesData= [
  {
    "name": "Coimbatore",
    "address": "No. 284 &, 285, Cross Cut Rd, Gandhipuram, Tamil Nadu 641012",
    "reviews": 497,
    "rating": 4,
    "pincode": "641012",
    "city":"Coimbatore",
    "phone": 8220017613,
    "contactPersonName": "Maheshwari / Tamil vendan",
    "mapLink": "https://maps.app.goo.gl/gyS45y3B1PdUAVVr7",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Experience Center",
    "address": "SF. NO. 460, 461/1 Kathirnaickenpalayam Road, Post, Thoppampatti, Coimbatore, Tamil Nadu 641017",
    "reviews": 91,
    "rating": 4.6,
    "pincode": "641017",
    "city":"Coimbatore",
    "phone": 9566419111,
    "contactPersonName": "Karthik",
    "mapLink": "https://maps.app.goo.gl/c4VfKNGKUGvry49T7",
    "storeTiming": "10:00 AM - 8:00 PM",
    "image":"store1.webp"
  },
  {
    "name": "Chennai",
    "address": "JewelOne, Near Thirumangalam Metro station, 233-235, 2nd Ave, L Block, Anna Nagar West, Chennai, Tamil Nadu 600040",
    "reviews": 159,
    "rating": 4.2,
    "pincode": "600040",
    "city":"Chennai",

    "phone": 8220017615,
    "contactPersonName": "Ranjith",
    "mapLink": "https://maps.app.goo.gl/TBhsUhjcBpsrVNVj6",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Madurai",
    "address": "123, Netaji Rd, opposite Modern Restaurant, Madurai Main, Madurai, Tamil Nadu 625001",
    "reviews": 190,
    "rating": 4.1,
    "pincode": "625001",      
    "city":"Madurai",

    "phone": 8754807070,
    "contactPersonName": "Pradeep",
    "mapLink": "https://maps.app.goo.gl/7SpvWFZDYZ9ipVDk6",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Vellore",
    "address": "18/1, Anna Salai, opp. Voorhees College, Vasanthapuram, Kosapet, Vellore, Tamil Nadu 632001",
    "reviews": 152,
    "rating": 4.1,
    "pincode": "632001",
    "city":"Vellore",

    "phone": 8220017614,
    "contactPersonName": "Babu",
    "mapLink": "https://maps.app.goo.gl/zaWaCAZJMRBdp3gH9",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Ramanathapuram",
    "address": "65 Swamy Vivekanda, Salai St, Ramanathapuram, Tamil Nadu 623501",
    "reviews": 88,
    "rating": 4.3,
    "pincode": "623501",
    "city":"Ramanathapuram",

    "phone": 8220017621,
    "contactPersonName": "Udhya Kumar",
    "mapLink": "https://maps.app.goo.gl/Pv3b8PEkugvWmepz6",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Salem",
    "address": "1/2, Omalur Main Rd, Arthanari Nagar, Swarnapuri, Salem, Tamil Nadu 636016",
    "reviews": 192,
    "rating": 4.1,
    "pincode": "636016",
    "city":"Salem",

    "phone": 9952555362,
    "contactPersonName": "Sekar",
    "mapLink": "https://maps.app.goo.gl/UMJNC8q4NGmPastu6",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Erode",
    "address": "85, RKV Rd, Marapalam, Erode, Tamil Nadu 638001",
    "reviews": 154,
    "rating": 4.1,
    "pincode": "638001",
    "city":"Erode",

    "phone": 9597806333,
    "contactPersonName": "Vignesh / Ram",
    "mapLink": "https://maps.app.goo.gl/mAz75axh5inWhQAY6",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Pollachi",
    "address": "Narasus Coffee Opp, 34, Bazaar St, Puliampatti, Pollachi, Tamil Nadu 642001",
    "reviews": 218,
    "rating": 3.8,
    "pincode": "642001",
    "city":"Pollachi",

    "phone": 8754011250,
    "contactPersonName": "Jayaprakash",
    "mapLink": "https://maps.app.goo.gl/9nobpHSrFU9gvqs36",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Pondicherry",
    "address": "88, Kamaraj Salai, Near Jayaram Hotel, Kamaraj Nagar, Puducherry, 605011",
    "reviews": 192,
    "rating": 4.1,
    "pincode": "605011",
    "city":"Pondicherry",

    "phone": 8220017620,
    "contactPersonName": "MohanRajesh",
    "mapLink": "https://maps.app.goo.gl/CAtBihoQqHbUuayX7",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"
  },
  {
    "name": "Hosur",
    "address": "NO.8, OPP HOSUR BUS STAND, NEAR FLOWER MARKET, Hosur, Tamil Nadu 635109",
    "reviews": 186,
    "rating": 4,
    "pincode": "635109",
    "city":"Hosur",

    "phone": 8220862444,
    "contactPersonName": "Lakshmanan",
    "mapLink": "https://maps.app.goo.gl/xomB9TqNP8mdDcHC6",
    "storeTiming": "9:45 AM - 8:45 PM",

    "image":"store1.webp"
  },
  {
    "name": "Udumalaipettai",
    "address": "24, Dhali Rd, Udumalaipettai, Tamil Nadu 641126",
    "reviews": 211,
    "rating": 4,
    "pincode": "641126",
    "city":"Udumalaipettai",
    "phone": 9944501010,
    "contactPersonName": "Baskar / Ganesh ",
    "mapLink": "https://maps.app.goo.gl/ikJoXkzv918Fv1L66",
    "storeTiming": "9:45 AM - 8:45 PM",
    "image":"store1.webp"

  }

];

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
    <section id='prebookFormSection' className="AkshayaTritiyaSection4">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Image
              width={454}
              height={350}
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
            <div className="mb-2">
            <Image
                alt="jewelone logo"
                className="img-fluid"
                src="/jewelone-logo.webp"
                width={200}
                height={60}
              />
            </div>
            <div className="mb-2 fs-3 fw-semibold text-red">Advance Booking Open</div>

            <div className="mb-2 fs-6 text-gold fw-medium">Current Gold Rate : <span className="fw-bold">₹{goldRate}</span> per gram</div>

            <div className="mb-2 AkshayaTritiyaSection4__prebook-text">Pre-book your Jewellery</div>
          </div>

          <div className="mb-2">
            <label className="form-label">Pre-Book Amount<span>*</span></label>
            <div>
              <input
                name='amount'
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label">Total Grams<span>*</span></label>
            <div>
              <input
                name='grams'
                type="number"
                className="form-control"
                placeholder="0.000"
                value={grams}
                onChange={handleGramsChange}
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label">Nearest Store Location<span>*</span></label>
            <div>
              <select name='location' className="form-select">
                {storesData.map((store,index)=>(
                  <option value={store.name} key={index}>{store.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-check mb-2">
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
