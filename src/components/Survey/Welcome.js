import React, { useState } from "react";

const Welcome = (props) => {
  const { startQuestion, setStartQuestion } = props;

  const stepToQuestion = () => {
    setStartQuestion(!startQuestion);
  };

  return (
    <main className="content">
      <h1 className="content__title">여행 MBTI 알아보기 🧐 </h1>
      <h2 className="content__sub-title">딱 맞는 여행지✈️를 찾아드려요! </h2>
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
