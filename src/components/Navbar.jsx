import React from "react";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>
            Admin
            <span> Panel</span>
          </h1>
          <div className="navbar-logo-menu">
            <HiBars3 onClick={() => setShow(!show)} />
          </div>
        </div>

        <div className="navbar-container">
          <button>General</button>
          <button>History</button>
          <button id="active">DALL-E-2</button>
          <button>Models & Fine-Tuning</button>
          <button>Datasets</button>
          <button>Manage Subscription</button>
        </div>
      </div>
      {show ? <Mobile onClick={() => setShow(!show)} /> : ""}
    </>
  );
};

export default Navbar;

const Mobile = (props) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="mobile">
          <div className="mobile-container">
            <div className="mobile-container-cross">
              <RxCross2 onClick={props.onClick} />
            </div>
            <button>General</button>
            <button>History</button>
            <button>DALL-E-2</button>
            <button>Models & Fine-Tuning</button>
            <button>Datasets</button>
            <button>Manage Subscription</button>
          </div>
        </div>
      </div>
    </>
  );
};
