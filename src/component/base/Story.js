import React from "react";

function Story({ name, avatar }) {
  return (
    <div className="container">
      <div className="stories">
        <img src={avatar ? avatar : "./stories/Ellipse 84-1.png"} alt="" />
      </div>
      <p className="text-truncate">{name ? name : "Username"}</p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.6rem 10px 0 10px;
          width: 60px !important;
        }
        .container > p {
          font-weight: normal;
          font-size: 10px;
          line-height: 13px;
          width: 60px;
          text-align: center;
        }

        .stories {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background-image: linear-gradient(to right, #00c6fb, #005bea);
        }
        .stories > img {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default Story;
