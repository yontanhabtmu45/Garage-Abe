import React from "react";

function AddVichelForm() {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add a new Order</h2>
        </div>
        <div className="row clearfix">
          <div className="form-column col-lg-7">
            <div className="inner-column">
              <div className="contact-form">
                <form >
                  <div className="row clearfix">
                    <div className="form-group col-md-12">
                      {/* {serverError && (
                        <div className="validation-error" role="alert">
                          {serverError}
                        </div>
                      )} */}
                      <input
                        type="text"
                        name="employee_email"
                        // value={employee_email}
                        // onChange={(event) => setEmail(event.target.value)}
                        placeholder="Vehicle Year"
                      />
                      {/* {emailError && (
                        <div className="validation-error" role="alert">
                          {emailError}
                        </div>
                      )} */}
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_first_name"
                        // value={employee_first_name}
                        // onChange={(event) => setFirstName(event.target.value)}
                        placeholder="Vehicle Make"
                      />
                      {/* {firstNameRequired && (
                        <div className="validation-error" role="alert">
                          {firstNameRequired}
                        </div>
                      )} */}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_last_name"
                        // value={employee_last_name}
                        // onChange={(event) => setLastName(event.target.value)}
                        placeholder="Vehicle model"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        // value={employee_phone}
                        // onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Vehicle Type"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        // value={employee_phone}
                        // onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Vehicle Mileage"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_password"
                        // value={employee_password}
                        // onChange={(event) => setPassword(event.target.value)}
                        placeholder="Vehicle tag"
                      />
                      {/* {passwordError && (
                        <div className="validation-error" role="alert">
                          {passwordError}
                        </div>
                      )} */}
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        // value={employee_phone}
                        // onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Vehicle Tag"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        // value={employee_phone}
                        // onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Vehicle Serial"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="employee_phone"
                        // value={employee_phone}
                        // onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Vehicle color"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span>Add Order</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddVichelForm;
