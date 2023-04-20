import React from "react";
import Navbar from "../components/Navbar";
import "./HomePage.scss";

import expire from "../assests/exprie.svg";
import ilustration from "../assests/illustration.svg";
import { RiArrowDownSLine } from "react-icons/ri";

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />

        <div className="homepage">
          <div className="homepage-title">
            <p>
              You need an API key for this website in order to access the
              disabled tabs.
              <span> Click Here </span>
              to get API key.
            </p>
          </div>
        </div>

        {/* Expire Section */}

        <div className="expiresection">
          <div className="expiresection-container">
            <div className="expiresection-container-right">
              <div className="expire-content">
                <img src={expire} alt="expireicon" />
                <div className="expire-content-headings">
                  <p>Subscription Status</p>
                  <h3>Expiring in 2 days</h3>
                </div>
              </div>
            </div>
            <div className="expiresection-container-left">
              <button>Renew Subscription</button>
            </div>
          </div>
        </div>

        <div className="bottom-section">
          <div className="bottom-section-left">
            <div>
              <div className="dropdown-top d-flex">
                <p>Select Users to Show DALL-E-2 Popup</p>
                <p>Select Users</p>
              </div>
              <div className="dropdown d-flex">
                <p>All Users</p>
                <RiArrowDownSLine />
              </div>
              <div className="dropdown-top d-flex mt-1">
                <p style={{ color: "white" }}>Select Popup Position</p>
              </div>
              <div className="dropdown d-flex">
                <p>Default</p>
                <RiArrowDownSLine />
              </div>
            </div>

            <div className="update-setting-btn">
              <button>Update Settings</button>
            </div>
          </div>
          <div className="bottom-section-right">
            <h3>Get Dall-E-2 WordPress Plugin Today</h3>
            <div className="bottom-section-right-image">
              <img src={ilustration} alt="ilustration" />
            </div>
            <div className="bottom-section-right-content">
              <p>
                AI generated images using the power of Dall-E-2. This OpenAI
                solution uses artificial intelligence to generate images from
                your text description you input.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
