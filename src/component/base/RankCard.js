import React from "react";

function RankCard({ no, avatar, name, className, poin, score }) {
  return (
    <div className={`container-rank ${className}`}>
      <div className="position">{no}</div>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">{name}</div>
      <div className="point ms-auto">
        <div className="poin1">40</div>
        <div className="poin2">0</div>
        <div className="poin3">0</div>
      </div>
      <div className="score">100</div>
    </div>
  );
}

export default RankCard;
