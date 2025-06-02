import React from "react";

function Four04() {
  return (
    <section className="text-center p-5">
      <h1>404, Page not found</h1> <br />
      <p>
        The page you are looking for does not exist or has been moved. Please
        check the URL or return to the home page.
      </p>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>
    </section>
  );
}

export default Four04;
