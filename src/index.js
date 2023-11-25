import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/Login/SignUp';
import HotelProfil from './component/Profile/HotelProfile/HotelProfil';
import PersonDashbord from './component/Profile/Personprofile/PersonDashbord';
import Homepage from './component/homepage/Homepage';



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
    path: "/hotel",
    element: <HotelProfil></HotelProfil>,
  },
  {
    path: "/PersonDashbord",
    element: <PersonDashbord></PersonDashbord>,
  },
  {
    path: "/Login",
    element: <SignUp></SignUp>,
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
