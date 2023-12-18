"use client"
import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [stores, setStores] =useState([
    {
        name:"Coimbatore",
        reviews:496,
        rating:4.0,
        city:"Coimbatore",
        mapLink:"https://maps.app.goo.gl/LgNJSbfdEjJ4uEC9A",
        address:"284 &, 285, Cross Cut Road,Gandhipuram, Tamil Nadu - 641012",
        pincode:"641012",
        city:"Coimbatore",
        phone:"8220017613",
        storeHours:"09:30 A.M. - 08:30 P.M.",
        image:"store1.webp"
      },
      {
        name:"Chennai",
        reviews:546,
        rating:4.5,
        mapLink:"http://google.com",
        address:"JewelOne, Near Thirumangalam Metro station, 233-235,2nd Ave, L Block, Anna Nagar West, Chennai,Tamil Nadu 600040",
        pincode:"600040",
        city:"Chennai",

        phone:"9791813222",
        storeHours:"09:30 A.M. - 08:30 P.M.",
        image:"store1.webp"
      
      },
      {
        name:"Vellore",
        reviews:696,
        rating:4.6,
        mapLink:"http://google.com",
        address:"18/1, Anna Salai,, Opp Voorhees College,Vellore, Tamil Nadu 632001",
        pincode:"632001",
        name:"Vellore",
        phone:"8220017613",
        storeHours:"09:30 A.M. - 08:30 P.M.",
        image:"store1.webp"
      
      }
  ]);

  const [filteredStores, setFilteredStores] = useState([
    {
        name:"Coimbatore",
        reviews:496,
        rating:4.0,
        mapLink:"http://google.com",
        address:"284 &, 285, Cross Cut Road,Gandhipuram, Tamil Nadu - 641012",
        pincode:"641012",
        phone:"8220017613",
        storeHours:"09:30 A.M. - 08:30 P.M.",
        image:"store1.webp"
      },
      {
        name:"Chennai",
        reviews:546,
        rating:4.5,
        mapLink:"http://google.com",
        address:"JewelOne, Near Thirumangalam Metro station, 233-235,2nd Ave, L Block, Anna Nagar West, Chennai,Tamil Nadu 600040",
        pincode:"600040",
        phone:"9791813222",
        storeHours:"09:30 A.M. - 08:30 P.M.",
        image:"store1.webp"
      
      },
      {
        name:"Vellore",
        reviews:696,
        rating:4.6,
        mapLink:"http://google.com",
        address:"18/1, Anna Salai,, Opp Voorhees College,Vellore, Tamil Nadu 632001",
        pincode:"632001",
        phone:"8220017613",
        storeHours:"09:30 A.M. - 08:30 P.M.",
        image:"store1.webp"
      
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
