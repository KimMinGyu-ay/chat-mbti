import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import "../../assets/css/chat.css";
import ProgressBar from "./ProgressBar";

const Chat = (props) => {
  const { loading, message, showRankResult, questionIdx, clickInput } = props;
  const endOfMessagesRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSelectPurpose, setIsSelectPurpose] = useState(false);
  const [isSelectDistance, setIsSelectDistance] = useState(false);
  const [purposeIdx, setPurposeIdx] = useState(0);
  const [distanceIdx, setDistanceIdx] = useState(0);
  
  const purpose = [
    { value: 0, label: "관광" },
    { value: 1, label: "휴식" },
    { value: 2, label: "쇼핑" },
    { value: 3, label: "액티비티" },
  ];

  const distances = [
    { value: 4, label: "2시간 이하" },
    { value: 5, label: "4시간 이하" },
    { value: 6, label: "상관없음" },
  ]
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const selectRadioBox = (e, selectType) => {
    const idx = e.target.value;
    if (!isSelectPurpose && selectType==='purpose') {
      setPurposeIdx(idx)
      setIsSelectPurpose(true);
    }
    else if (!isSelectDistance && selectType==='distance')
    {
      setDistanceIdx(idx) 
      setIsSelectDistance(true);
    }
    
    clickInput('select', "mbti", e.target.value)
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
  
              {/* Purpose 선택 */}
              {index === 4 && !isSelectPurpose && (
                <div className="radio-options">
                  {purpose.map((option, idx) => (
                    <label key={idx} className="custom-radio">
                      <input
                        type="radio"
                        name="purpose-options"
                        value={option.value}
                        onChange={(e) => selectRadioBox(e, 'purpose')}
                      />
                      <span className="radio-label">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
  
              {/* Distance 선택 */}
              {index === 6 && !isSelectDistance && (
                <div className="radio-options">
                  {distances.map((option, idx) => (
                    <label key={idx} className="custom-radio">
                      <input
                        type="radio"
                        name="distance-options"
                        value={option.value}
                        onChange={(e) => selectRadioBox(e, 'distance')}
                      />
                      <span className="radio-label">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
  
      {questionIdx === 5 && (
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
