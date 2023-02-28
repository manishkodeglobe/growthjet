import React, { useState } from "react";
import questions from "../data";
import MyAccordian from "./MyAccordian";

const Accordian = () => {
  const [data, setdata] = useState(questions);

  return (
    <div className="Faq_grids">
      {data.map((currnElem) => {
        const { id } = currnElem;
        return (
          <div className="faq_grid_items">
            <MyAccordian key={id} {...currnElem} />
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
