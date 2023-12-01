import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import app from './Firebase.init';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import HotelProfil from './component/Profile/HotelProfile/HotelProfil';
import PersonDashbord from './component/Profile/Personprofile/PersonDashbord';
import Homepage from './component/homepage/Homepage';

import { getAuth } from "firebase/auth";
import Blog from './component/Other/Blog/Blog';
import ABoutUspage from './component/Other/About/ABoutUspage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/login/:email",
    element: <Login></Login>,
  },
  {
    path: "hotel/:id",
    element: <HotelProfil></HotelProfil>,
  },
  {
    path: "/PersonDashbord",
    element: <PersonDashbord></PersonDashbord>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/about",
    element: <ABoutUspage></ABoutUspage>,
  },

  {
    path: "user/:userid",
    element: <div>hello this is user page</div>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
