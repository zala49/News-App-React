import React from "react";
const Contact = () => {
  // let handleLogin = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.username.value);
  // };

  return (
    <>
      <h2 className="container">Contact Us</h2>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
          {/* onClick={handleLogin} */}
        </button>
      </form>
    </>
  );
};
export default Contact;
