import React, { useEffect, useState } from "react";
import "../styles/homepage.css";


function homepage() {
  const [radioPrice, setRadioPrice] = useState("179");
  const [limitedPrice, setLimitedPrice] = useState(null);

  const updatePrice = (e) => {
    const value = `${18500 - e.target.value}`;
    setRadioPrice(e.target.value);
    setLimitedPrice(value);
    console.log(value);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form className="homepage">
      <div className="content">
        <div className="head-text">
          Access curated courses worth
          <div className="sub-head">
            <span className="grow">₹ </span>
            <span className="red-cut">18,500</span> at just{" "}
            <span className="highlight grow">₹ 99 </span>per year!
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <img src="book.png" width="45px" alt="" />
            <div>
              <span className="highlight">100+</span> Job relevant courses
            </div>
          </div>

          <div className="feature">
            <img src="clock.png" width="45px" alt="" />
            <div>
              <span className="highlight">20,000+</span> Hours of contents
            </div>
          </div>
          <div className="feature">
            <img src="live.png" width="45px" alt="" />
            <div>
              <span className="highlight">Exclusive</span> webinar access
            </div>
          </div>
          <div className="feature">
            <img src="scholarship.png" width="45px" alt="" />
            <div>
              Scholarship worth
              <span className="highlight"> ₹94,500</span>
            </div>
          </div>
          <div className="feature">
            <img src="ads.png" width="45px" alt="" />
            <div>
              <span className="highlight">Ad Free</span> learning experience
            </div>
          </div>
        </div>
      </div>
      {}
      <div className="pricing-form">
        <div className="progress">
          <div className="steps">
            <div className="step">1</div>
            Sign Up
          </div>
          <div className="steps">
            <div className="step">2</div>
            Subscribe
          </div>
        </div>
        <div className="select-plan">Select your subcription plan</div>

        {/* input radios */}

        <div className="radio-list">
          <div className="radio-item">
            <input
              className="radio-input "
              type="radio"
              name="radio"
              id="radio1"
              disabled
              value="99"
              onChange={handleChange}
            />
            <label htmlFor="radio1">
              12 Months Subscription
              <div className="price">
                <div className="price-info">
                  <div>
                    Total&nbsp;
                    <span className=" price-grow price-disabled"> ₹99 </span>
                  </div>
                  <div className="price-disabled">
                    ₹8&nbsp;<span className=" price-shrink ">/mo</span>
                  </div>
                </div>
              </div>
            </label>
            <div className="tag">Offer expired</div>
          </div>
          <div className="radio-item ">
            <input
              className="radio-input "
              type="radio"
              name="radio"
              id="radio2"
              value="179"
              onChange={handleChange}
              onClick={updatePrice}
            />
            <label htmlFor="radio2">
              12 Months Subscription
              <div className="price">
                <div className="price-info">
                  <div>
                    Total&nbsp;<span className=" price-grow "> ₹179 </span>
                  </div>
                  <div>
                    ₹15&nbsp;<span className=" price-shrink">/mo</span>
                  </div>
                </div>
              </div>
            </label>
            <div className="tag">Recommended</div>
          </div>
          <div className="radio-item ">
            <input
              className="radio-input "
              type="radio"
              name="radio"
              id="radio3"
              value="149"
              onChange={handleChange}
              onClick={updatePrice}
            />
            <label htmlFor="radio3">
              6 Months Subscription
              <div className="price">
                <div className="price-info">
                  <div>
                    Total&nbsp;<span className=" price-grow"> ₹149 </span>
                  </div>
                  <div>
                    ₹25&nbsp;<span className=" price-shrink">/mo</span>
                  </div>
                </div>
              </div>
            </label>
            <div className="tag">Recommended</div>
          </div>
          <div className="radio-item ">
            <input
              className="radio-input "
              type="radio"
              name="radio"
              id="radio4"
              value="99"
              onChange={handleChange}
              onClick={updatePrice}
            />
            <label htmlFor="radio4">
              3 Months Subscription
              <div className="price">
                <div className="price-info">
                  <div>
                    Total&nbsp;<span className=" price-grow"> ₹99 </span>
                  </div>
                  <div>
                    ₹33&nbsp;<span className=" price-shrink">/mo</span>
                  </div>
                </div>
              </div>
            </label>
            <div className="tag">Recommended</div>
          </div>

          {/* total */}
          {!limitedPrice ? (
              ""
            ) : (
          <div className="total-section">
            <div className="fee">
              <div className="fee-title">Subscription Fee</div>
              <div className="fee-val">₹18,500</div>
            </div>
            
              <div className="limited-time">
                <div>
                  <div className="lim-title">Limited time offer</div>
                  <div className="fee-val">
                    -₹{limitedPrice.slice(0, 2)},{limitedPrice.slice(2, 12)}
                  </div>
                </div>

                <div className="time-offer">
                  <img src="src\assets\time.png" alt="" /> Offer valid till 25th
                  March 2023{" "}
                </div>
              </div>
            <div className="fee">
              <div className=""> <span className="bold">Total</span> (Incl. of 18% GST)</div>
              <div className="fee-val bold grow-price">₹{radioPrice}</div>
            </div>
            <div className="fee payment">
              <button>cancel</button>
              <button>proceed to pay</button>
            </div>
          </div>
            )}
        </div>
      </div>
    </form>
  );
}

export default homepage;
