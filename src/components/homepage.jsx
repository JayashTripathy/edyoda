import React from "react";
import "../styles/homepage.css";

function homepage() {
  return (
    <div className="homepage">
      <div className="content">
        <div className="head-text">
          Access curated courses worth
          <div className="sub-head">
          <span className="grow">₹ </span><span className="red-cut">18,500</span> at just{" "}
            <span className="highlight grow">₹ 99 </span>per year!
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <img src="src\assets\book.png" width="45px" alt="" />
            <div>
              <span className="highlight">100+</span> Job relevant courses
            </div>
          </div>

          <div className="feature">
            <img src="src\assets\clock.png" width="45px" alt="" />
            <div>
              <span className="highlight">20,000+</span> Hours of contents
            </div>
          </div>
          <div className="feature">
            <img src="src\assets\live.png" width="45px" alt="" />
            <div>
              <span className="highlight">Exclusive</span> webinar access
            </div>
          </div>
          <div className="feature">
            <img src="src\assets\scholarship.png" width="45px" alt="" />
            <div>
              Scholarship worth
              <span className="highlight"> ₹94,500</span>
            </div>
          </div>
          <div className="feature">
            <img src="src\assets\ads.png" width="45px" alt="" />
            <div>
              <span className="highlight">Ad Free</span> learning experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepage;
