import React, { useState } from "react";
import imagen from "./images/icon-share.svg";
import imagenWhite from "./images/icon-share-white.svg";
import drawers from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";
import facebbok from "./images/icon-facebook.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";

import "./App.css";

function App() {
  const [share, setShare] = useState(false);

  return (
    <div className="App">
      <div className="container">
        {share && (
          <>
            {" "}
            <div className="social-container">
              <span className="social-span">SHARE</span>
              <img src={facebbok} alt="facebbok" className="social-icon" />
              <img src={twitter} alt="twitter" className="social-icon" />
              <img src={pinterest} alt="pinterest" className="social-icon" />
            </div>
            <div className="arrow-down"></div>
          </>
        )}
        <div className="left">
          <img className="left-img" src={drawers} alt="drawers" />
        </div>
        <div className="right">
          <h1 className="right-header">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="right-paragrahp">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="right-bottom">
            <div className="left-bottom-container">
              <img
                src={avatar}
                alt="avatar"
                className="left-bottom-container-img"
              />
              <div className="left-bottom-container-wrapper">
                <h1 className="left-bottom-header">Michelle Appleton</h1>
                <span className="left-bottom-subtitle">28 Jun 2020</span>
              </div>
            </div>
            <div
              className="right-bottom-caontaoner"
              onClick={() => setShare(!share)}
            >
              <div className={`img-container ${share?'active':''}`}>
                <img
                  src={share ? imagenWhite : imagen}
                  alt="share"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
