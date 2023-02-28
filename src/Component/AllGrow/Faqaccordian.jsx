import "../Component/Faqaccrdian.css";
function FaqAccordian() {
  return (
    <>
      <div className="Faq_section">
        <div className="container">
          <div className="Faq_section_heading text-center">
            <h2>FAQ</h2>
            <p>Have questions? Great! We love answering.</p>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item show">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <h4 className="accordion_heading">
                        GrowthJet the cheapest?
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="Allparagraph">
                        {" "}
                        No. And, we don’t intend to be the cheapest in the
                        market. If lowest price is the only deciding factor for
                        you, we’re probably not a right fit for each other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h4 className="accordion_heading">
                        Architecto beatae vitae dicta explicab?
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="Allparagraph">
                        {" "}
                        No. And, we don’t intend to be the cheapest in the
                        market. If lowest price is the only deciding factor for
                        you, we’re probably not a right fit for each other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h4 className="accordion_heading">
                        Sed quia non numquam eius modi ?
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="Allparagraph">
                        {" "}
                        No. And, we don’t intend to be the cheapest in the
                        market. If lowest price is the only deciding factor for
                        you, we’re probably not a right fit for each other.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h4 className="accordion_heading">
                        Eius modi tempora incidunt ut labore ?
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="Allparagraph">
                        {" "}
                        No. And, we don’t intend to be the cheapest in the
                        market. If lowest price is the only deciding factor for
                        you, we’re probably not a right fit for each other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h4 className="accordion_heading">
                        Mxercitationem ullam corporis ?{" "}
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="Allparagraph">
                        {" "}
                        No. And, we don’t intend to be the cheapest in the
                        market. If lowest price is the only deciding factor for
                        you, we’re probably not a right fit for each other.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h4 className="accordion_heading">
                        Sed quia non numquam eius modi ?
                      </h4>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <p className="Allparagraph">
                        {" "}
                        No. And, we don’t intend to be the cheapest in the
                        market. If lowest price is the only deciding factor for
                        you, we’re probably not a right fit for each other.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqAccordian;
