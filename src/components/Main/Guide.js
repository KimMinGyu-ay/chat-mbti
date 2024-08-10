import React, { useState } from "react";

const Guide = (props) => {
    const closeModal = props.closeModal;
    
    return (
        <main className="content">
        <h1 className="content__title">MBTI 여행 추천 가이드 </h1>
        <h2 className="content__sub-title">내용을 추가해주세요 </h2>
        <button
            className="content__link btn btn--s btn--primary"
            onClick={(e) => closeModal('mbti')}
        >
            이해했습니다.
        </button>
        </main>
    );
};

export default Guide;
