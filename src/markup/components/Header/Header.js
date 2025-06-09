import React, { useState } from "react";
// Import the Link component from react-router-dom
import { Link } from "react-router-dom";
// Import the logo image
import logo from "../../../assets/images/logo.png";
// Import the login service to access the logout function
import loginService from "../../../services/login.service";
// Import the custom context hook
import { useAuth } from "../../../Contexts/AuthContext";

function Header(props) {
  // Use the custom hook to access the data in the context
  const { isLogged, setIsLogged, employee } = useAuth();

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Log out event handler function
  const logOut = () => {
    // Call the logout function from the login service
    loginService.logOut();
    // Set the isLogged state to false
    setIsLogged(false);
  };

  // Handle mobile nav toggler
  const handleMobileNavToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle("mobile-menu-visible", !mobileMenuOpen);
  };

  // Handle close mobile menu
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-visible");
  };

  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">
                  Monday - Saturday 7:00AM - 6:00PM
                </div>
              </div>
              <div className="right-column">
                {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number">
                      <strong>Welcome {employee?.employee_first_name}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="phone-number">
                    Schedule Appointment: <strong>1800 456 7890 </strong>{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  {/* Mobile Nav Toggler */}
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileNavToggle}
                  >
                    <img src="/custom/icons/icon-bar.png" alt="menu" />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <a href="/">Home</a>
                        </li>
                        <li className="dropdown">
                          <a href="/about">About Us</a>
                        </li>
                        <li className="dropdown">
                          <a href="/services">Services</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                          <a href="/admin">Admin</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                {isLogged ? (
                  <div className="link-btn">
                    <Link
                      to="/"
                      className="theme-btn btn-style-one blue"
                      onClick={logOut}
                    >
                      Log out
                    </Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <a href="/">
                      <img src="assets/images/custom/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="right-column">
                  <div className="nav-outer">
                    <div
                      className="mobile-nav-toggler"
                      onClick={handleMobileNavToggle}
                    >
                      <img src="assets/images/icons/icon-bar.png" alt="menu" />
                    </div>

                    <nav className="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="link-btn">
                    <a href="/login" className="theme-btn btn-style-one">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
          <div className="menu-backdrop" onClick={handleMobileMenuClose}></div>
          <div className="close-btn" onClick={handleMobileMenuClose}>
            <span className="icon flaticon-remove"></span>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/">
                <img src="assets/images/logo-two.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              {/* You can render your navigation links here for mobile */}
              <ul className="navigation">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/admin">Admin</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
