import React from "react";
import "./SwarnaSakthi.css";
import Plan1 from "./Plan1";
import Plan2 from "./Plan2";
import Plan3 from "./Plan3";
import Plan4 from "./Plan4";

const SwarnaSakthiSection2 = () => {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="plan1-tab"
            data-bs-toggle="tab"
            data-bs-target="#plan1-tab-pane"
            type="button"
            role="tab"
            aria-controls="plan1-tab-pane"
            aria-selected="true"
          >
            Plan1
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="plan2-tab"
            data-bs-toggle="tab"
            data-bs-target="#plan2-tab-pane"
            type="button"
            role="tab"
            aria-controls="plan2-tab-pane"
            aria-selected="false"
          >
            plan2
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="plan3-tab"
            data-bs-toggle="tab"
            data-bs-target="#plan3-tab-pane"
            type="button"
            role="tab"
            aria-controls="plan3-tab-pane"
            aria-selected="false"
          >
            plan3
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="wedding-jewellery-plan-tab"
            data-bs-toggle="tab"
            data-bs-target="#wedding-jewellery-plan-tab-pane"
            type="button"
            role="tab"
            aria-controls="wedding-jewellery-plan-tab-pane"
            aria-selected="false"
          >
            wedding jewelleryplan
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="plan1-tab-pane"
          role="tabpanel"
          aria-labelledby="plan1-tab"
        >
          <Plan1 />
        </div>
        <div
          className="tab-pane fade"
          id="plan2-tab-pane"
          role="tabpanel"
          aria-labelledby="plan2-tab"
        >
          <Plan2 />
        </div>
        <div
          className="tab-pane fade"
          id="plan3-tab-pane"
          role="tabpanel"
          aria-labelledby="plan3-tab"
        >
          <Plan3 />
        </div>
        <div
          className="tab-pane fade"
          id="wedding-jewellery-plan-tab-pane"
          role="tabpanel"
          aria-labelledby="wedding-jewellery-plan-tab"
        >
          <Plan4 />
        </div>
      </div>
    </div>
  );
};

export default SwarnaSakthiSection2;
