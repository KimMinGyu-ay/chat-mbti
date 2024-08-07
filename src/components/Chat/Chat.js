import { assets } from "../../assets/assets";
import "../../assets/css/chat.css"
import ProgressBar from "./ProgressBar"

const Chat = (props) => {
  const { loading, message, showRankResult } = props;

  return (
    <div className="result">
      {message.map((msg, index) => (
        msg.type === 'title' ? (
          // 내가 질문한거
          <div className="result-title my-message" key={index}>
            <p>{msg.context}</p>
          </div>
        ) : msg.type === 'data' ?(
          // 생성형 AI 답변
          <div className="result-data" key={index}>
            <img src={assets.gemini_icon} alt="Gemini Icon" />
            <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
          </div>
        ) : (
          // mbti 질문
          <>
            <div className="result-data" key={index}>
              <img src={assets.gemini_icon} alt="Gemini Icon" />
              <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
            </div>
            {index >= 1 && (
              //TODO:해당 코드는 반복문으로 수정
              <>
                <div className="result-data" key={`progress-70-${index}`}>
                  <ProgressBar width={showRankResult[0][1]} text={showRankResult[0][0]} />
                </div>
                <div className="result-data" key={`progress-50-${index}`}>
                  <ProgressBar width={showRankResult[1][1]} text={showRankResult[1][0]} />
                </div>
                <div className="result-data" key={`progress-20-${index}`}>
                  <ProgressBar width={showRankResult[2][1]} text={showRankResult[2][0]} />
                </div>
              </>
            )}
          </>
        )
      ))}
      {loading && (
        <div className="loader">
          <img src={assets.gemini_icon} alt="Gemini Icon" />
          <hr />
          <hr />
          <hr />
        </div>
      )}
    </div>
  );
};

export default Chat;