import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div>
      <section className="main-head">
        <section className="topNav container">
          <nav class="navbar navbar-expand-md">
            <div class="container-fluid ">
              <div>
                <a class="navbar-brand left-side logo" href="#">
                  <img src="\assets\header\logo.png" alt="" />
                </a>
              </div>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                class="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <div className="right-side">
                  <ul class="navbar-nav mb-2 mb-lg-0  ">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        How To Buy
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Roadmap
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Bamboo Paper
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Ecosystem
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </section>

        <section className="section-hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 left-side">
                <div>
                  <h1>PandaMax The people's cryptocurrency.</h1>
                </div>
                <div></div>
                <div className="btns">
                  <a href="#" className="btn-primary">
                    How To Buy
                  </a>
                  <a href="#" className="btn-secondary">
                    Bamboo Paper
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-12 right-side">
                <img
                  src="\assets\header\header-image.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
