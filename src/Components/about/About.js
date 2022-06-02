import React, { useState } from "react";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        borderRadius: "5px",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        borderRadius: "5px",
      });
      setBtnText("Enable Black Mode");
    }
  };
  return (
    <>
      <h2 className="container">About Us</h2>
      <div
        className="container accordion"
        id="accordionExample"
        style={myStyle}
      >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Lorem
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Lorem</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lorem #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Lorem 2</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Lorem #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Lorem 3</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button
          onClick={toggleStyle}
          style={myStyle}
          className="  btn btn-dark"
        >
          {btnText}
        </button>
      </div>
    </>
  );
}
export default About;
