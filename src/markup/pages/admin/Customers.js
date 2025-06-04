import React from 'react'
// Import the AdminMenu component 
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
// Import the CustomersList component
import CustomersList from '../../components/Admin/CustomersList/CustomersList';
import { useAuth } from '../../../Contexts/AuthContext';
// Import the Login component
import LoginForm from "../../components/LoginForm/LoginForm";

function Customers() {
   // Destructure the auth hook
    const { isLogged, isAdmin } = useAuth();
  if (isLogged) {
    if (isAdmin) {
      return (
        <div>
          <div className="container-fluid admin-pages">
            <div className="row">
              <div className="col-md-3 admin-left-side">
                <AdminMenu />
              </div>
              <div className="col-md-9 admin-right-side">
                <CustomersList />
                </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>You are not authorized to access this page</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Customers