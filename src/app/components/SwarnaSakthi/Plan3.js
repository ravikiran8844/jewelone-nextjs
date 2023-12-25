import React from "react";
import Image from "next/image";

const Plan3 = () => {
  return (
    <>
      <div>
        <section className="swarna-sakthi-plan-header">
          <div className="col-12 px-4 text-center">
            <div className="h5 py-3 text-red fw-bold">
              Old Gold Advance Plan (Tenure: 330 days)
            </div>
          </div>
        </section>

        <section className="swarna-sakthi-plan-content">
          <div className="container py-5">
            <div className="row bg-red">
              <div className="col-12 col-lg-5 col-xl-4 order-1 order-lg-0 p-4 m-auto">
                <div className="text-white">
                  On starting of Swarna Sakthi Plan III, customers can give
                  their Old Gold as advance and order their New Jewellery. The
                  given old gold will be verified for its purity and converted
                  to 916 weight. After 330 days, customer can buy Gold Jewellery
                  against the converted 916 weights.{" "}
                </div>
              </div>
              <div className="col-12 col-lg-7 col-xl-8 order-0 order-lg-1 p-0">
                <Image
                  alt="plan 3 banner"
                  className="img-fluid"
                  width={1100}
                  height={521}
                  src="/plan3-banner.webp"
                />
              </div>
            </div>

            <div className="col-12 my-5 plan-terms">Terms & Conditions</div>

            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    A. The gold ornaments / coins / bars
                  </div>
                  <div className="plan-terms_text">
                    The gold ornaments / coins / bars received from customers
                    towards the order of making new jewellery under plan III
                    will be melted and refined. Hence the same cannot be
                    returned in its original form. The equivalent quantum of
                    gold received and its 916 purity will be denoted in the
                    voucher.
                  </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">B. VA Waiver </div>
                  <div className="plan-terms_text">
                    On maturity, “Gold Jewellery & Gold Coin” can be purchased
                    in this scheme with a waiver up to 18% VA (Value Addition)
                    or on actuals, whichever is lower.{" "}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    C. Tenure & Maturity
                  </div>
                  <div className="plan-terms_text">330 days.</div>
                </div>

                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                    D. Minimum Advance{" "}
                  </div>
                  <div className="plan-terms_text">
                    Minimum quality of gold to be given is 8 grams, to join the
                    Swarna Sakthi Plan III.
                  </div>
                </div>

                  <div className="mb-4">
                    <div className="plan-terms_title mb-2">
                      E. GST and other Levies{" "}
                    </div>
                    <div className="plan-terms_text">
                      GST and other Levies will be charged extra as per
                      government norms.{" "}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-red fst-italic">
                      Pre-Closure Benefits & Terms for the Swarna Sakthi Plans
                      (I, II & III)
                    </div>
                  </div>
              </div>

              <div className="col-12 col-lg-6">

              <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                  A. Plan I                  </div>
                  <div className="plan-terms_text">
                  1. Plan 1: If the customer pays EMA continuously for 10 months but wants to pre-close it on completion of 300 days, they can avail a pre-closure benefit of 12% or actual VA, whichever is less.
                  </div>
                </div>


                <div className="mb-4">
                  <div className="plan-terms_title mb-2">
                  B. Plan II & III                  </div>
                  <div className="plan-terms_text">
                  1. Benefit can be availed from the fourth month itself. On completion of 90 days, the customer can get a benefit of 1% for each month completed. Customer can avail a maximum of up to 10% on VA.
                  </div>

                  <div className="plan-terms_text">
                  2. For example : If the Customer wants to buy after 6 months, they benefit by way of 1% x 6 = 6% VA waiver for the advance given in this scheme.
                  </div>
                </div>


                <div>
                    <div className="text-red mb-3">Non-Redemption on Maturity</div>
                    <div className="plan-terms_text">If the customer does not purchase Jewellery at the end of 330 days from the date of enrollment and grace period of 10 days given by the company from the maturity of scheme, then the total advance amount will be invoiced with an equivalent weight of 22 karat gold coin as per the rate fixed by the customer without any benefit, (For example: a customer has given Rs.1,00,000 in the scheme and a Gold ate is fixed as Rs.4,500 per gram, then the refund will be in the form of 22.220 (approx.) grams of 22k gold coin).</div>

                </div>


              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Plan3;
