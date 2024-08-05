import "../../assets/css/chat.css"

const ProgressBar = ({ width, text }) => {
    return (
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${width}%` }}></div>
        <span className="progress-bar-text">{text}</span>
        <span className="progress-bar-percentage">{width}%</span>
      </div>
    );
  };


export default ProgressBar;