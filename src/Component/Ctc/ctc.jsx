import React from "react";
import "./Ctc.css";

function Ctc() {
  return (
    <section className="CTC ">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-sm-8 Wrapper ctc_position_wrapresopnsive">
            <div className="Ctc_Wrapper_container">
              <h4 className="text-white ctc_heaading">
                We don’t over-promise. We asses your<br></br>
                current situation to grow your brand holistically<br></br> &
                sustainably.
              </h4>
              <div className="ctc_form">
                <form class="form-inline">
                  <div class="form-group mb-2">
                    <input
                      type="password"
                      class="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group  margin_for_email mb-2">
                    <input
                      type="Email"
                      class="form-control"
                      id="Email"
                      placeholder="Email"
                    />
                  </div>
                  <button type="submit" class="btn btn-dark mb-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-4 outer_images">
            <img className="ctc_img" src="./images/ctc.png" alt="ctc" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ctc;
