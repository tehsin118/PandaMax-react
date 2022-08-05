import React from "react";
import "./Community.css";
export default function Community() {
  return (
    <div>
      <section className="community padd-50 mar-50">
        <div className="container">
          <div className="head-details ">
            <p className="text-center ">
              Join our community of 10,000 strong <br /> members in the fastest
              growing <br /> Crypto project of 2022
            </p>
          </div>
          <div className="subscribe ">
            <div class="input-wrap ">
              <input type="email" placeholder="Enter your email" />
              <a href="#">Subscribe now</a>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
