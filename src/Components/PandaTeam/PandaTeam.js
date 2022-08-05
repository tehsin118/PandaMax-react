import React from "react";
import "./PandaTeam.css";
export default function PandaTeam() {
  return (
    <div>
      <section className="pandaTeam mar-50 ">
        <div className="container">
          <div className="section-heading padd-50">
            <h2>The PandaMax Team</h2>
            <p>Meet the amazing PandaMax Team</p>
          </div>
          <div className="PandaMaxRoadmap-content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-5">
                <div className="card">
                  <div className="img text-center">
                    <img
                      src="\assets\pandamax-team\panda-james-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail mt-5">
                    <h5>Panda James</h5>
                    <p>Co -Founder</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-5 mt-5">
                <div className="card">
                  <div className="img text-center">
                    <img
                      src="\assets\pandamax-team\panda-simmons-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail mt-5">
                    <h5>Panda Simmons</h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-5 mt-5">
                <div className="card">
                  <div className="img text-center">
                    <img
                      src="\assets\pandamax-team\panda-robert-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail mt-5">
                    <h5>Panda James</h5>
                    <p>Co -Founder</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-5 mt-5">
                <div className="card">
                  <div className="img text-center">
                    <img
                      src="\assets\pandamax-team\panda-howard-img.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="detail mt-5">
                    <h5>Panda James</h5>
                    <p>Co -Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
