import React, { useState } from "react";

const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="Faq_grid">
        <div className="Faq_questions">
          <h1>
            <p onClick={() => setShow(!show)}>
              {question}
              {show ? "➖" : "➕"}
            </p>
          </h1>
        </div>
        <div className="faq_answer">
          <p>{show && answer}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccordian;
