import { assets } from "../../assets/assets";
import "../Main/Main.css"
const Chat = (props) => {
  const { loading, message } = props;

  return (
    <div className="result">
      {message.map((msg, index) => (
        msg.type === 'title' ? (
          <div className="result-title" key={index}>
            <img src={assets.user_icon} alt="User Icon" />
            <p>{msg.context}</p>
          </div>
        ) : (
          <div className="result-data" key={index}>
            <img src={assets.gemini_icon} alt="Gemini Icon" />
            <p dangerouslySetInnerHTML={{ __html: msg.context }}></p>
          </div>
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