import React from "react";
import "./ProjectEcosytem.css";

export default function ProjectEcosytem() {
  return (
    <div>
      <section className="Ecosytem mar-50">
        <div className="container">
          <div className="section-heading ">
            <h2>Project & Ecosystem</h2>
            <p>The PandaMax Ecosystem</p>
          </div>

          <div className="Ecosytem-content">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="left-side">
                  <div className="d-flex my-lg-0 my-5">
                    <div className="left">
                      <img
                        src="\assets\project and ecosystem\interactive-panda-game-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <div className="content-heading">
                        Interactive Panda Game
                      </div>
                      <div className="content-detail">
                        The Ultimate Play-To-Earn game on the ETH blockchain!
                        <br></br>
                        Buy, Train & Sell Rare NFTs
                      </div>
                    </div>
                  </div>

                  <div className="d-flex  ">
                    <div className="left">
                      <img
                        src="\assets\project and ecosystem\panda-swap-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="right">
                      <div className="content-heading">
                        Interactive Panda Game
                      </div>
                      <div className="content-detail">
                        Panda Swap is the all-in-one DeFi platform that provides
                        AMM allowing users to seamlessly exchange tokens
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 text-center my-lg-0 my-5">
                <img
                  src="\assets\project and ecosystem\panda-image.png"
                  alt=""
                />
              </div>

              <div className="col-lg-4 col-12">
                <div className="right-side">
                  <div className="d-flex">
                    <div className="left">
                      <div className="content-heading">Panda World NFTs</div>
                      <div className="content-detail">
                        <p>
                          You can mint your very own unique Pandas as an
                          original NFT which can be bred and later traded on
                          marketplaces
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <img
                        src="\assets\project and ecosystem\interactive-panda-game-icon.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="d-flex my-lg-0 my-5">
                    <div className="left">
                      <div className="content-heading">
                        Interactive Panda Game
                      </div>
                      <div className="content-detail">
                        <p>
                          Panda Swap is the all-in-one DeFi platform that
                          provides AMM allowing users to seamlessly exchange
                          tokens
                        </p>
                      </div>
                    </div>
                    <div className="right">
                      <img
                        src="\assets\project and ecosystem\panda-swap-icon.png"
                        alt=""
                      />
                    </div>
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
