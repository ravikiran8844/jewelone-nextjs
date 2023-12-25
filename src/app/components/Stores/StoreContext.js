"use client"
import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [stores, setStores] =useState([
    {
      "name": "Coimbatore Cross Cut",
      "address": "No. 284 &, 285, Cross Cut Rd, Gandhipuram, Tamil Nadu 641012",
      "reviews": 497,
      "rating": 4,
      "pincode": "641012",
      "phone": 8220017613,
      "contactPersonName": "Maheshwari / Tamil vendan",
      "mapLink": "https://maps.app.goo.gl/gyS45y3B1PdUAVVr7",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Experience Center",
      "address": "SF. NO. 460, 461/1 Kathirnaickenpalayam Road, Post, Thoppampatti, Coimbatore, Tamil Nadu 641017",
      "reviews": 91,
      "rating": 4.6,
      "pincode": "641017",
      "phone": 9566419111,
      "contactPersonName": "Karthik",
      "mapLink": "https://maps.app.goo.gl/c4VfKNGKUGvry49T7",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Chennai",
      "address": "JewelOne, Near Thirumangalam Metro station, 233-235, 2nd Ave, L Block, Anna Nagar West, Chennai, Tamil Nadu 600040",
      "reviews": 159,
      "rating": 4.2,
      "pincode": "600040",
      "phone": 8220017615,
      "contactPersonName": "Ranjith",
      "mapLink": "https://maps.app.goo.gl/TBhsUhjcBpsrVNVj6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Madurai",
      "address": "123, Netaji Rd, opposite Modern Restaurant, Madurai Main, Madurai, Tamil Nadu 625001",
      "reviews": 190,
      "rating": 4.1,
      "pincode": "625001",
      "phone": 8754807070,
      "contactPersonName": "Pradeep",
      "mapLink": "https://maps.app.goo.gl/7SpvWFZDYZ9ipVDk6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Vellore",
      "address": "18/1, Anna Salai, opp. Voorhees College, Vasanthapuram, Kosapet, Vellore, Tamil Nadu 632001",
      "reviews": 152,
      "rating": 4.1,
      "pincode": "632001",
      "phone": 8220017614,
      "contactPersonName": "Babu",
      "mapLink": "https://maps.app.goo.gl/zaWaCAZJMRBdp3gH9",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Ramanathapuram",
      "address": "65 Swamy Vivekanda, Salai St, Ramanathapuram, Tamil Nadu 623501",
      "reviews": 88,
      "rating": 4.3,
      "pincode": "623501",
      "phone": 8220017621,
      "contactPersonName": "Udhya Kumar",
      "mapLink": "https://maps.app.goo.gl/Pv3b8PEkugvWmepz6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Salem",
      "address": "1/2, Omalur Main Rd, Arthanari Nagar, Swarnapuri, Salem, Tamil Nadu 636016",
      "reviews": 192,
      "rating": 4.1,
      "pincode": "636016",
      "phone": 9952555362,
      "contactPersonName": "Sekar",
      "mapLink": "https://maps.app.goo.gl/UMJNC8q4NGmPastu6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Erode",
      "address": "85, RKV Rd, Marapalam, Erode, Tamil Nadu 638001",
      "reviews": 154,
      "rating": 4.1,
      "pincode": "638001",
      "phone": 9597806333,
      "contactPersonName": "Vignesh / Ram",
      "mapLink": "https://maps.app.goo.gl/mAz75axh5inWhQAY6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Pollachi",
      "address": "Narasus Coffee Opp, 34, Bazaar St, Puliampatti, Pollachi, Tamil Nadu 642001",
      "reviews": 218,
      "rating": 3.8,
      "pincode": "642001",
      "phone": 8754011250,
      "contactPersonName": "Jayaprakash",
      "mapLink": "https://maps.app.goo.gl/9nobpHSrFU9gvqs36",
      "storeTiming": " "
      ,
      "image":"store1.webp"
    },
    {
      "name": "Pondicherry",
      "address": "88, Kamaraj Salai, Near Jayaram Hotel, Kamaraj Nagar, Puducherry, 605011",
      "reviews": 192,
      "rating": 4.1,
      "pincode": "605011",
      "phone": 8220017620,
      "contactPersonName": "MohanRajesh",
      "mapLink": "https://maps.app.goo.gl/CAtBihoQqHbUuayX7",
      "storeTiming": " "
      ,
      "image":"store1.webp"
    },
    {
      "name": "Hosur",
      "address": "NO.8, OPP HOSUR BUS STAND, NEAR FLOWER MARKET, Hosur, Tamil Nadu 635109",
      "reviews": 186,
      "rating": 4,
      "pincode": "635109",
      "phone": 8220862444,
      "contactPersonName": "Lakshmanan",
      "mapLink": "https://maps.app.goo.gl/xomB9TqNP8mdDcHC6",
      "storeTiming": " "
      ,
      "image":"store1.webp"
    },
    {
      "name": "Udumalaipettai",
      "address": "24, Dhali Rd, Udumalaipettai, Tamil Nadu 641126",
      "reviews": 211,
      "rating": 4,
      "pincode": "641126",
      "phone": 9944501010,
      "contactPersonName": "Baskar / Ganesh ",
      "mapLink": "https://maps.app.goo.gl/ikJoXkzv918Fv1L66",
      "storeTiming": " ",
      "image":"store1.webp"

    }
  ]);

  const [filteredStores, setFilteredStores] = useState([
    {
      "name": "Coimbatore Cross Cut",
      "address": "No. 284 &, 285, Cross Cut Rd, Gandhipuram, Tamil Nadu 641012",
      "reviews": 497,
      "rating": 4,
      "pincode": "641012",
      "phone": 8220017613,
      "contactPersonName": "Maheshwari / Tamil vendan",
      "mapLink": "https://maps.app.goo.gl/gyS45y3B1PdUAVVr7",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Experience Center",
      "address": "SF. NO. 460, 461/1 Kathirnaickenpalayam Road, Post, Thoppampatti, Coimbatore, Tamil Nadu 641017",
      "reviews": 91,
      "rating": 4.6,
      "pincode": "641017",
      "phone": 9566419111,
      "contactPersonName": "Karthik",
      "mapLink": "https://maps.app.goo.gl/c4VfKNGKUGvry49T7",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Chennai",
      "address": "JewelOne, Near Thirumangalam Metro station, 233-235, 2nd Ave, L Block, Anna Nagar West, Chennai, Tamil Nadu 600040",
      "reviews": 159,
      "rating": 4.2,
      "pincode": "600040",
      "phone": 8220017615,
      "contactPersonName": "Ranjith",
      "mapLink": "https://maps.app.goo.gl/TBhsUhjcBpsrVNVj6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Madurai",
      "address": "123, Netaji Rd, opposite Modern Restaurant, Madurai Main, Madurai, Tamil Nadu 625001",
      "reviews": 190,
      "rating": 4.1,
      "pincode": "625001",
      "phone": 8754807070,
      "contactPersonName": "Pradeep",
      "mapLink": "https://maps.app.goo.gl/7SpvWFZDYZ9ipVDk6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Vellore",
      "address": "18/1, Anna Salai, opp. Voorhees College, Vasanthapuram, Kosapet, Vellore, Tamil Nadu 632001",
      "reviews": 152,
      "rating": 4.1,
      "pincode": "632001",
      "phone": 8220017614,
      "contactPersonName": "Babu",
      "mapLink": "https://maps.app.goo.gl/zaWaCAZJMRBdp3gH9",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Ramanathapuram",
      "address": "65 Swamy Vivekanda, Salai St, Ramanathapuram, Tamil Nadu 623501",
      "reviews": 88,
      "rating": 4.3,
      "pincode": "623501",
      "phone": 8220017621,
      "contactPersonName": "Udhya Kumar",
      "mapLink": "https://maps.app.goo.gl/Pv3b8PEkugvWmepz6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Salem",
      "address": "1/2, Omalur Main Rd, Arthanari Nagar, Swarnapuri, Salem, Tamil Nadu 636016",
      "reviews": 192,
      "rating": 4.1,
      "pincode": "636016",
      "phone": 9952555362,
      "contactPersonName": "Sekar",
      "mapLink": "https://maps.app.goo.gl/UMJNC8q4NGmPastu6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Erode",
      "address": "85, RKV Rd, Marapalam, Erode, Tamil Nadu 638001",
      "reviews": 154,
      "rating": 4.1,
      "pincode": "638001",
      "phone": 9597806333,
      "contactPersonName": "Vignesh / Ram",
      "mapLink": "https://maps.app.goo.gl/mAz75axh5inWhQAY6",
      "storeTiming": " ",
      "image":"store1.webp"
    },
    {
      "name": "Pollachi",
      "address": "Narasus Coffee Opp, 34, Bazaar St, Puliampatti, Pollachi, Tamil Nadu 642001",
      "reviews": 218,
      "rating": 3.8,
      "pincode": "642001",
      "phone": 8754011250,
      "contactPersonName": "Jayaprakash",
      "mapLink": "https://maps.app.goo.gl/9nobpHSrFU9gvqs36",
      "storeTiming": " "
      ,
      "image":"store1.webp"
    },
    {
      "name": "Pondicherry",
      "address": "88, Kamaraj Salai, Near Jayaram Hotel, Kamaraj Nagar, Puducherry, 605011",
      "reviews": 192,
      "rating": 4.1,
      "pincode": "605011",
      "phone": 8220017620,
      "contactPersonName": "MohanRajesh",
      "mapLink": "https://maps.app.goo.gl/CAtBihoQqHbUuayX7",
      "storeTiming": " "
      ,
      "image":"store1.webp"
    },
    {
      "name": "Hosur",
      "address": "NO.8, OPP HOSUR BUS STAND, NEAR FLOWER MARKET, Hosur, Tamil Nadu 635109",
      "reviews": 186,
      "rating": 4,
      "pincode": "635109",
      "phone": 8220862444,
      "contactPersonName": "Lakshmanan",
      "mapLink": "https://maps.app.goo.gl/xomB9TqNP8mdDcHC6",
      "storeTiming": " "
      ,
      "image":"store1.webp"
    },
    {
      "name": "Udumalaipettai",
      "address": "24, Dhali Rd, Udumalaipettai, Tamil Nadu 641126",
      "reviews": 211,
      "rating": 4,
      "pincode": "641126",
      "phone": 9944501010,
      "contactPersonName": "Baskar / Ganesh ",
      "mapLink": "https://maps.app.goo.gl/ikJoXkzv918Fv1L66",
      "storeTiming": " ",
      "image":"store1.webp"

    }

  ]);

  const updateFilteredStores = (searchTerm) => {
    if(searchTerm==""){
        setFilteredStores(stores);
    }
    else{
       // Implement your filtering logic here
        const filtered = stores.filter((store) =>
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.pincode.includes(searchTerm)
        );
        setFilteredStores(filtered);
    }
  };

  return (
    <StoreContext.Provider value={{ stores, filteredStores, updateFilteredStores }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
