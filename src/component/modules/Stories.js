import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { Story } from "../base";

function Stories() {
  return (
    <div className="w-100 story">
      <h3>Story</h3>
      <HorizontalScroll>
        <Story name="Nevalen Aginda" />
        <Story name="Aginda" avatar={"./stories/Ellipse 84-2.png"} />
        <Story name="Prasetyo" avatar={"./stories/Ellipse 84-3.png"} />
        <Story name="Nevalen Aginda" />
        <Story name="Aginda" avatar={"./stories/Ellipse 84-2.png"} />
        <Story name="Prasetyo" avatar={"./stories/Ellipse 84-3.png"} />
        <Story name="Nevalen Aginda" />
        <Story name="Aginda" avatar={"./stories/Ellipse 84-2.png"} />
        <Story name="Prasetyo" avatar={"./stories/Ellipse 84-3.png"} />
        <Story name="Nevalen Aginda" />
        <Story name="Aginda" avatar={"./stories/Ellipse 84-2.png"} />
        <Story name="Prasetyo" avatar={"./stories/Ellipse 84-3.png"} />
        <Story name="Nevalen Aginda" />
        <Story name="Aginda" avatar={"./stories/Ellipse 84-2.png"} />
        <Story name="Prasetyo" avatar={"./stories/Ellipse 84-3.png"} />
        <Story name="Nevalen Aginda" />
        <Story name="Aginda" avatar={"./stories/Ellipse 84-2.png"} />
        <Story name="Prasetyo" avatar={"./stories/Ellipse 84-3.png"} />
      </HorizontalScroll>
      <style jsx>{`
        .story {
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          border-radius: 24px;
          padding: 0.5rem 1rem;
        }
        .story {
          height: 150px;
        }
        .story h3 {
          margin-top: 0.8rem;
          font-weight: 600;
          font-size: 22px;
          line-height: 22px;
          letter-spacing: 0.5px;
          color: #333333;
        }
      `}</style>
    </div>
  );
}

export default Stories;
