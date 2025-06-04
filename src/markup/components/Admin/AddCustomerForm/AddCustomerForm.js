import React from "react";
import customerService from "../../../../services/customer.service";

function AddCustomerForm(props) {
  const [customer_email, setEmail] = React.useState("");
  const [customer_first_name, setFirstName] = React.useState("");
  const [customer_last_name, setLastName] = React.useState("");
  const [customer_phone, setPhoneNumber] = React.useState("");
  const [active_customer, setActive_customer] = React.useState(1);
  
  // Errors
  const [emailError, setEmailError] = React.useState("");
  const [firstNameRequired, setFirstNameRequired] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [serverError, setServerError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle client side validations
    let valid = true; // Flag
    if (customer_first_name === "") {
      setFirstNameRequired("First name is required");
      valid = false;
    } else {
      setFirstNameRequired("");
    }
    // Email is required
    if (customer_email === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!customer_email.includes("@")) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(customer_email)) {
        setEmailError("Invalid email format");
        valid = false;
      } else {
        setEmailError("");
      }
    }
    // if the form is not valid, do not submit
    if (!valid) {
      return;
    }
    const formData = {
      customer_email,
      customer_first_name,
      customer_last_name,
      customer_phone,
      active_customer,
    };
    // pass the form data to the service
    const newCustomer = customerService.createCustomer(formData);
    newCustomer
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // If Error is returned from the API server, set the error message
        if (data.error) {
          setServerError(data.error);
        } else {
          // Handle successful response
          setSuccess(true);
          setServerError("");
          // Redirect to the employees page after 2 seconds
          // For now, just redirect to the home page
          setTimeout(() => {
            // window.location.href = '/admin/employees';
            window.location.href = "/admin/customers"; // Redirect to the employees page
          }, 2000);
        }
      })
      // Handle Catch
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setServerError(resMessage);
      });
  };

  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new Customer</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="customer_first_name"
                        placeholder="First Name"
                        value={customer_first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {firstNameRequired && (
                        <span className="error">{firstNameRequired}</span>
                      )}
                    </div>
                    <div className="col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="customer_last_name"
                        placeholder="Last Name"
                        value={customer_last_name}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 col-sm-12 form-group">
                      <input
                        type="email"
                        name="customer_email"
                        placeholder="Email"
                        value={customer_email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {emailError && <span className="error">{emailError}</span>}
                    </div>
                    <div className="col-md-12 col-sm-12 form-group">
                      <input
                        type="text"
                        name="customer_phone"
                        placeholder="Phone Number (5555-555-555)"
                        value={customer_phone}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12 form-group">
                      <label>
                          <input
                          type="checkbox"
                          checked={active_customer === 1}
                          onChange={(e) =>
                            setActive_customer(e.target.checked ? 1 : 0)
                          }
                        />
                        Active Customer
                      </label>
                    </div>
                  </div>
                  {serverError && (
                    <span className="error">{serverError}</span>
                  )}
                  {success && (
                    <span className="success">Customer added successfully!</span>
                  )}
                  <button type="submit" className="theme-btn btn-style-one">
                    Add Customer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddCustomerForm;
