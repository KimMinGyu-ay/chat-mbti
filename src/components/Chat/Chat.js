import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import "../../assets/css/chat.css";
import ProgressBar from "./ProgressBar";

const Chat = (props) => {
  const { loading, message, showRankResult, questionIdx } = props;
  const endOfMessagesRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // 보여줄 결과 리스트를 설정
  const displayedResults = isExpanded ? showRankResult : showRankResult?.slice(0, 3);

  return (
    <div className="result">
      {message.map((msg, index) => (
        <div key={index}>
          {msg.type === "title" ? (
            // 내가 질문한거
            <div className="result-title my-message">
              <p>{msg.context}</p>
            </div>
          ) : msg.type === "data" ? (
            // 생성형 AI 답변
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
            </div>
          ) : (
            // mbti 질문
            <>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="Gemini Icon" />
                <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
              </div>
            </>
          )}
        </div>
      ))}

      {questionIdx === 4 && (
        <>
          {displayedResults.map((item, idx) => (
            <ProgressBar key={idx} width={item[1]} text={item[0]} />
          ))}
          <br />
          <br />
          <button onClick={toggleExpand} className="toggle-button">
            {isExpanded ? "결과 접기" : "결과 더보기"}
          </button>
        </>
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
