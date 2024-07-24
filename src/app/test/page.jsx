"use client"
import React, { useState, useEffect } from 'react';

const stores =   [
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

  ]
const StoreLocator = () => {
  const [query, setQuery] = useState('');
  const [filteredStores, setFilteredStores] = useState(stores);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      getGeocode(value);
    } else {
      setFilteredStores(stores);
    }
  };

  const getGeocode = async (address) => {
    const apiKey = 'AIzaSyCLl2XwLcdCro91gX5QQmkzmQgRPwgGIRY';
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);
    const data = await response.json();
    console.log(data,"data")
    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      sortStoresByDistance(location);
    } else {
      setFilteredStores([]);
    }
  };

  const sortStoresByDistance = (location) => {
    const storesWithDistance = stores.map(store => {
      const distance = calculateDistance(location.lat, location.lng, store.lat, store.lng);
      return { ...store, distance };
    });
    storesWithDistance.sort((a, b) => a.distance - b.distance);
    setFilteredStores(storesWithDistance);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div className="store-locator">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter pincode or city"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="store-list">
        {filteredStores.length > 0 ? (
          filteredStores.map((store, index) => (
            <div className="store" key={index}>
              <h2>{store.name}</h2>
              <p>{store.address}</p>
              <p>Reviews: {store.reviews}</p>
              <p>Rating: {store.rating}</p>
              <p>Phone: {store.phone}</p>
              <p>Contact Person: {store.contactPersonName}</p>
              <p>Store Timing: {store.storeTiming}</p>
              <a href={store.mapLink} target="_blank" rel="noopener noreferrer">View on Map</a>
              <img src={store.image} alt={`${store.name} Store`} />
            </div>
          ))
        ) : (
          <p>No stores found.</p>
        )}
      </div>
    </div>
  );
};

export default StoreLocator;
