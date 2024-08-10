import { useEffect, useRef } from "react";
import { assets } from "../../assets/assets";
import "../../assets/css/chat.css";
import ProgressBar from "./ProgressBar";

const Chat = (props) => {
  const { loading, message, showRankResult } = props;
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  return (
    <div className="result">
      {message.map((msg, index) =>
        msg.type === "title" ? (
          // 내가 질문한거
          <div className="result-title my-message" key={index}>
            <p>{msg.context}</p>
          </div>
        ) : msg.type === "data" ? (
          // 생성형 AI 답변
          <div className="result-data" key={index}>
            <img src={assets.gemini_icon} alt="Gemini Icon" />
            <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
          </div>
        ) : (
          // mbti 질문
          <>
          {index >= 1 && (
              <>
                <div className="result-data" key={index}>
                  <img src={assets.gemini_icon} alt="Gemini Icon" />
                  <p dangerouslySetInnerHTML={{ __html: index-1 + "번 질문에 대한 mbti 중간 결과입니다." }}></p>
                </div>
                {showRankResult.map((item, index) => (<ProgressBar key={index} width={item[1]} text={item[0]} />))}
                <br />
                <br />
              </>
            )}
            <div className="result-data" key={index}>
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
            </div>
          </>
        )
      )}
      {loading && (
        <div className="loader">
          <img src={assets.gemini_icon} alt="Gemini Icon" />
          <hr />
          <hr />
          <hr />
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default Chat;
