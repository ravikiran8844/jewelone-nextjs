import Image from "next/image";
import React from "react";
import  "./ExperienceCenter.css"


const BookNowForm = () => {
  return (
    <div className="book-now-form d-none d-lg-block">
      <form>
        <div>
            <div className="text-center">
                <div className="mb-3">
                <Image alt="jewelone logo" className="img-fluid" src="/jewelone-logo.webp" width={200} height={60} />
                </div>
                
                <div className="h4 text-gold mb-3">Book Your Slot</div>
            </div>

          <div className="row">
            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">First Name<span className="text-red">*</span></label>
              <div>
                <input  className="form-control" type="text" placeholder="Enter first name" />
              </div>
            </div>


            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">Last Name<span className="text-red">*</span></label>
              <div>
                <input  className="form-control" type="text" placeholder="Enter last name" />
              </div>
            </div>





            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">City<span className="text-red">*</span></label>
              <div>
              <input  className="form-control" type="text" placeholder="Enter your city" />

              </div>
            </div>


            <div className="col-12 col-sm-6 mb-2">
              <label className="book-now-form_labels mb-1">Phone number<span className="text-red">*</span></label>
              <div>
                <input  className="form-control" type="tel" placeholder="Enter Mobile number" />
              </div>
            </div>


            <div className="col-12 mb-2">
              <label className="book-now-form_labels mb-1">Email address<span className="text-red">*</span></label>
              <div>
                <input className="form-control" type="email" placeholder="Enter your email" />
              </div>
            </div>



            <div className="col-12 col-sm-6 mb-2">
            <div className="book-now-form_labels mb-1">Factory Visit:</div>
            <div className="d-flex gap-2">
             <div className="d-flex gap-2 align-items-center ">
                <label className="book-now-form_labels" htmlFor="factory-visit-yes">Yes</label>
                <div>
                    <input id="factory-visit-yes" type="radio" name="factory-visit" />
                </div>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <label className="book-now-form_labels " htmlFor="factory-visit-no">No</label>
                <div>
                    <input id="factory-visit-no"  type="radio"  name="factory-visit" />
                </div>
              </div>
             </div>
            </div>



            <div className="col-12 col-sm-6 mb-3 m-auto">
              <div>
                <input className="btn form-control bg-red text-white" type="submit" value="SUBMIT" />
              </div>
            </div>


          </div>
        </div>
      </form>
    </div>
  );
};

export default BookNowForm;
