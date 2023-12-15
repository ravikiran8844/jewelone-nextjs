import React from "react";
import "./Contact.css";

const ContactSection3 = () => {
  return (
    <div className="contact-section3 section-padding">
      <div className="container">
        <div className="col-12 mb-5">
          <div className="contact-section-label mb-2">FAQ</div>
          <div className="contact-section-title mb-4">
            Frequently Asked Questions
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <div className="accordion accordion-flush" id="ContactPageFaqs">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#ContactPageFaqs"
                >
                  <div className="accordion-body">
                    Answer 
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#ContactPageFaqs"
                >
                   <div className="accordion-body">
                    Answer 
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <div className="accordion accordion-flush" id="ContactPageFaqs2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#ContactPageFaqs2"
                >
                 <div className="accordion-body">
                    Answer 
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Accordion Item #4
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#ContactPageFaqs2"
                >
                 <div className="accordion-body">
                    Answer 
                  </div>
                </div>
              </div>

            



            </div>
          </div>



          {/* <div className="col-12 col-md-6">
            <div className="contact-section3_form">
              <div className="contact-section3_form-title mb-4">Ask a different question</div>

              <div>
                <form>
                  <div>
                    <input className="form-control" type="text" placeholder="Name" />
                  </div>

                  <div>
                    <input className="form-control" type="email" placeholder="Email Address" />
                  </div>


                  <div>
                    <input className="form-control" type="tel" placeholder="Phone Number" />
                  </div>


                 

                  <div>
                    <textarea className="form-control" placeholder="Message" />
                  </div>

                  <div className="text-end"><button type="submit" className="btn">SUBMIT</button></div>

                </form>
              </div>
            </div>
          </div> */}



        </div>
      </div>
    </div>
  );
};

export default ContactSection3;
