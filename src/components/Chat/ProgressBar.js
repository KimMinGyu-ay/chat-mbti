import "../../assets/css/chat.css"

const ProgressBar = ({ width, text }) => {
  let w = Math.floor(width * 100); // 소수점 이하 버림
    return (
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${w}%` }}></div>
        <span className="progress-bar-text">{text}</span>
        <span className="progress-bar-percentage">{w}%</span>
      </div>
    );
  };


export default ProgressBar;