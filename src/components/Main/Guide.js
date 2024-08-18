import React, { useState } from "react";

const Guide = (props) => {
  const closeModal = props.closeModal;

  return (
    <main className="content">
      <h1 className="content__title">
        텍스트 분석을 통해 성향을 분석하여 여행지를 추천해 드릴께요 🤖
      </h1>
      <h2 className="content__sub-title">
        문장 형태로 구체적인 답변을 해주시면 더욱 정확한 분석이 가능해요
      </h2>
      <button
        className="content__link btn btn--s btn--primary"
        onClick={(e) => closeModal("mbti")}
      >
        시작하기
      </button>
    </main>
  );
};

export default Guide;
