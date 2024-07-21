import React, { useState } from "react";

const Welcome = (props) => {
  const { startQuestion, setStartQuestion } = props;

  const stepToQuestion = () => {
    setStartQuestion(!startQuestion);
  };

  return (
    <main className="content">
      <h1 className="content__title">MBTI 알아보기 🧐 </h1>
      <h2 className="content__sub-title">과연 나의 MBTI는? </h2>
      <button
        className="content__link btn btn--s btn--primary"
        onClick={(e) => stepToQuestion()}
      >
        Start
      </button>
    </main>
  );
};

export default Welcome;
