import React from "react";
import "./Tokenomics.css";
export default function Tokenomics() {
  return (
    <div>
      <section className="Tokenomics">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 left-side">
              <img
                src="\assets\tokenomics\tokenomics-image.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 col-12 right-side">
              <div className="right">
                <div className="head">
                  <h1>TOKENOMICS</h1>
                </div>
                <div className="symbol">
                  <h2>$PANDAMAX</h2>
                  <p>TOKEN SYMBOL</p>
                </div>
                <div className="supply">
                  <h2>100 Quadrillion</h2>
                  <p>TOTAL SUPPLY</p>
                </div>
                <div className="reflection">
                  <h2>12% Reflection</h2>
                  <h4>5% rewards in busd </h4>
                  <h4> 3% marketing </h4>
                  <h4>1% burn </h4>
                  <h4>3% liquidity</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
