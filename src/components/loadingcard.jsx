import React from "react";
import "./loadingcard.css";

const LoadingCard = () => {
  return (
    <div style={{ minWidth: "100%", minHeight: "180px" }}>
      <div className="card-parent-container">
        <div className="card-label-container">
          <div className="dish-label skeleton"></div>
        </div>
        <div className="card-info-container">
          <div className="card-headers">
            <p className="dish-name skeleton-text"></p>
            <div className="price-calories-wrapper">
              <div className="dish-price skeleton-text"></div>
            </div>
          </div>
          <p className="dish-description skeleton-text"></p>
          <div className="card-footer">
            <div className="btn-group">
              <button className="btn-group-item btn btn-minus skeleton">
                -
              </button>
              <span className="btn-group-item dish-count skeleton"></span>
              <button className="btn-group-item btn btn-plus skeleton">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="card-image-container ">
          <div className="dish-image skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
