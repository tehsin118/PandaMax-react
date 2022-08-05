import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 side-one ">
              <div className="footer-logo">
                <img src="\assets\footer\footer-logo.png" alt="" />
                <p>
                  A Decentralized Meme Token that <br /> Evolved into a Vibrant
                  Ecosystem
                </p>
              </div>

              <div className="icons">
                <img src="\assets\footer\instagram-icon.svg" alt="" />
                <img src="\assets\footer\linkedin-icon.svg" alt="" />
                <img src="\assets\footer\facebook-icon.svg" alt="" />
                <img
                  src="\assets\footer\twitter-icon.svg"
                  alt=""
                  className="twitter-icon"
                />
              </div>
            </div>

            <div className="col-md-3 col-12 side-two ">
              <div className="headings">Quick Links</div>
              <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">Telegram</a>
                <a href="#">Instagram</a>
                <a href="#">TikTok</a>
              </div>
            </div>

            <div className="col-md-3 col-12 side-two ">
              <div className="headings">Socials</div>
              <div className="social-links ">
                <a href="#">Bamboo Paper</a>
                <a href="#">Ecosystem</a>
                <a href="#">How To Buy</a>
                <a href="#">Team</a>
              </div>
            </div>

            <div className="col-md-3 col-12  side-last ">
              <div className="headings mar-1">Socials</div>
              <div className="social-links-btns">
                <a href="#">support@pandamax.com</a>

                <div className="store-icons  d-flex justify-content-between">
                  <a href="#">
                    <img
                      src="\assets\footer\play-store-icon.png"
                      alt=""
                      className="img-fluid "
                    />
                  </a>
                  <a href="#">
                    <img
                      src="\assets\footer\app-store-icon.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="copy-right">
            <p>© 2021 PandaMAX All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
