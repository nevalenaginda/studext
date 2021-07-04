import React from "react";
import Rating from "./Rating";

function CourseCard({ title, image }) {
  return (
    <div className="course-card">
      <div className="top">
        <div className="course-avatar">
          <img src={image} alt="avatar" />
        </div>
        <div className="course-info">
          <h5>{title}</h5>
          <div className="rating">
            <Rating total="20" />
          </div>
          <div className="course-vendor">
            <img src={require("../../images/Rectangle 367.svg")} />
            <span className="ms-1">By Course Hero</span>
          </div>
          <div className="course-preview">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
                fill="#ADADAD"
              />
              <path
                d="M9 16.5C9 16.5 16.5 16.5 16.5 14.5714C16.5 12.2571 12.8438 9.75 9 9.75C5.15625 9.75 1.5 12.2571 1.5 14.5714C1.5 16.5 9 16.5 9 16.5Z"
                fill="#ADADAD"
              />
            </svg>
            <span className="ms-1 mt-1">203 Pelajar, 4 Guru</span>
          </div>
        </div>
        <div className="navigation-course">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.71001 11.3C1.10001 11.69 1.73001 11.69 2.12001 11.3L6.71001 6.71C7.10001 6.32 7.10001 5.69 6.71001 5.3L2.12001 0.71C1.73001 0.32 1.10001 0.32 0.710009 0.710001C0.320009 1.1 0.320009 1.73 0.710009 2.12L4.59001 6.01L0.71001 9.89C0.32001 10.28 0.33001 10.92 0.71001 11.3Z"
              fill="#008FFF"
            />
          </svg>
        </div>
      </div>
      <div className="bottom">
        <div className="price">Rp.2000.000</div>
        <div className="d-flex justify-content-between">
          <div className="start-date">
            Mulai: <strong>17 Agustus 2020</strong>
          </div>
          <div className="discount">RP.1.500.000</div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
