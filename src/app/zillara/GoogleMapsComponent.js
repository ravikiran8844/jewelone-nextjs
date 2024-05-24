"use client"
import React from 'react';
import { APILoader, StoreLocator } from '@googlemaps/extended-component-library/react';

const LISTINGS = [
    {
      title: 'Jewelone Coimbatore',
      addressLines: ['No. 284 & 285, Cross Cut Rd', 'Peranaidu Layout, Ram Nagar, Gandhipuram', 'Coimbatore, Tamil Nadu 641012, India'],
      position: { 'lat': 11.017003, 'lng': 76.963993 },
      placeId: 'ChIJA7QLfP9YqDsR_k9amWQXVFQ',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Experience Center',
      addressLines: ['SF. NO. 460, 461/1 Kathirnaickenpalayam Road', 'Post, Thoppampatti, Coimbatore, Narasimhanaickenpalayam', 'Tamil Nadu 641017, India'],
      position: { 'lat': 11.103166, 'lng': 76.934209 },
      placeId: 'ChIJweZMNhf3qDsRPv54pRO7yLs',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Chennai',
      addressLines: ['Near Thirumangalam Metro station', '233-235, 2nd Ave, L Block, Anna Nagar West, Anna Nagar', 'Chennai, Tamil Nadu 600040, India'],
      position: { 'lat': 13.085065, 'lng': 80.201262 },
      placeId: 'ChIJgf34DdNnUjoR18qynFlxQpI',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Madurai',
      addressLines: ['123, Netaji Rd, opposite Modern Restaurant', 'Madurai Main, Madurai, Tamil Nadu 625001, India'],
      position: { 'lat': 9.917816, 'lng': 78.116923 },
      placeId: 'ChIJtc1F-4PFADsRitSYwbIA2DI',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Vellore',
      addressLines: ['18/1, Anna Salai, opp. Voorhees College', 'Vasanthapuram, Srinivasan Nagar, Vellore, Tamil Nadu 632001, India'],
      position: { 'lat': 12.910461, 'lng': 79.131816 },
      placeId: 'ChIJxZ1aZ904rTsRx0B3_hpnacQ',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Ramanathapuram',
      addressLines: ['65 Swamy Vivekanda, Salai St, Chalai Bazar', 'Ramanathapuram, Tamil Nadu 623501, India'],
      position: { 'lat': 9.36968, 'lng': 78.833963 },
      placeId: 'ChIJHahh_6OiATsRVvzI9ZCqjJ0',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Salem',
      addressLines: ['1/2, Omalur Main Rd, Arthanari Nagar, Swarnapuri', 'Salem, Tamil Nadu 636016, India'],
      position: { 'lat': 11.670864, 'lng': 78.139411 },
      placeId: 'ChIJs5WKl0VvqTsRUJpTYi5JtIg',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Erode',
      addressLines: ['85, RKV Rd, Marapalam', 'Erode, Tamil Nadu 638001, India'],
      position: { 'lat': 11.344969, 'lng': 77.730169 },
      placeId: 'ChIJ9Rj0l0VvqTsRRNwfHfnwFc8',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Pollachi',
      addressLines: ['Narasus Coffee Opp, 34, Bazaar St, Puliampatti', 'Pollachi, Tamil Nadu 642001, India'],
      position: { 'lat': 10.65641, 'lng': 77.009116 },
      placeId: 'ChIJzZb3e_9YqDsRk0CtorS8Dzc',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Pondicherry',
      addressLines: ['88, Kamaraj Salai, Near Jayaram Hotel', 'Kamaraj Nagar, Puducherry, 605011, India'],
      position: { 'lat': 11.937466, 'lng': 79.82286 },
      placeId: 'ChIJLzkGF35hUzoRqKXTednCqYw',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Hosur',
      addressLines: ['NO.8, OPP HOSUR BUS STAND, NEAR FLOWER MARKET', 'Surya Nagar, Sri Nagar, Hosur, Tamil Nadu 635109, India'],
      position: { 'lat': 12.735892, 'lng': 77.827999 },
      placeId: 'ChIJERzvKM9wrjsRS8Rd0UciRjQ',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    },
    {
      title: 'Jewelone Udumalaipettai',
      addressLines: ['24, Dhali Rd', 'Udumalaipettai, Tamil Nadu 641126, India'],
      position: { 'lat': 10.586591, 'lng': 77.245599 },
      placeId: 'ChIJJdShw6nNqTsR8sLfe-aQcWI',
      actions: [{
        label: 'Website',
        defaultUri: 'https://jewelone.in/'
      }]
    }
  ];
  

const GoogleMapsComponent = () => {
  return (
    <div>
      <APILoader apiKey={`${process.env.NEXT_PUBLIC_SMTP_PASSWORD}`}  solutionChannel="GMP_GCC_storelocator_v1" />
      <StoreLocator className="store-locator" mapId="DEMO_MAP_ID" listings={LISTINGS} />

    </div>
  );
};

export default GoogleMapsComponent;

