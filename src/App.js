// Import react 
import React from 'react';
// Import the Routes and Route components from react-router 
import { Routes, Route } from "react-router";
// Import the page components 
import Home from "./markup/pages/Home";
import Login from "./markup/pages/Login";
import AddEmployee from './markup/pages/admin/AddEmployee';
import Unauthorized from './markup/pages/Unauthorized';
// Import the Orders and Customers components 
import Orders from './markup/pages/admin/Orders';
import Customers from './markup/pages/admin/Customers';
// Import the Employees component 
import Employees from './markup/pages/admin/Employees';

// Import the css files 
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file 
import "./assets/styles/custom.css";

// Import the Header component 
import Header from './markup/components/Header/Header';
// Import the Footer component
import Footer from './markup/components/Footer/Footer';

// Import the PrivateAuthRoute component 
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute';
import Services from './markup/pages/Services';
import About from './markup/pages/About';
import Contact from './markup/pages/Contact';
import Dashboard from './markup/pages/admin/Dashboard';
import Service from './markup/pages/admin/adminServices';
import AddOrders from './markup/pages/admin/AddOrders';
import AddCustomer from './markup/pages/admin/AddCustomer';
import Four04 from './markup/pages/Four04';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Four04 />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* // Add the Orders Route  */}
        <Route path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Orders />
            </PrivateAuthRoute>
          } />
        {/* // Add the Customers Route  */}
        <Route path="/admin/customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          } />
        {/* // Add the Dashboard Route  */}
        <Route path="/admin"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Dashboard />
            </PrivateAuthRoute>
          } />
          {/* add services route */}
        <Route path="/admin/services"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Service />
            </PrivateAuthRoute>
          } />
          {/* add new order route */}
        <Route path="/admin/order"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <AddOrders />
            </PrivateAuthRoute>
          } />
          {/* add new customer route */}
        <Route path="/admin/add-customer"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddCustomer />
            </PrivateAuthRoute>
          } />
        {/* // Add the Employees Route  */}
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          } />
        {/* 
          Customers (/admin/customers) - managers and admins
          Orders (/admin/orders) - Can be accessed by all employees
          Add employee (/admin/add-employee) - admins only 
            - Admin: 3 
            - Manager: 2 
            - Employee: 1 
        */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
