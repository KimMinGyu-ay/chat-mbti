import "../../const/mbti";
import { assets, place } from "../../assets/assets";
import Modal from "react-modal";
import { useState } from "react";
import { mbtiDetail } from "../../const/mbti";
Modal.setAppElement("#root");

const ProgressBar = ({ width, text, purposeIdx, distanceIdx }) => {
  let w = Math.floor(width * 100); // 소수점 이하 버림
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showDetailMBTI = () => {
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="progress-bar" onClick={() => showDetailMBTI(text)}>
        <div className="progress-bar-fill" style={{ width: `${w}%` }}></div>
        <span className="progress-bar-text">{text}</span>
        <span className="progress-bar-percentage">{w}%</span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Survey Modal"
        style={{
          content: {
            height: "600px",
            weight: "458px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            <img src={assets.close_icon} alt="Close Icon" />
          </button>
          <main className="content">
            <h1 className="content__title">{text}</h1>
            <h3>-{mbtiDetail[text][0]}-</h3>
            <h2 className="content__sub-title">{mbtiDetail[text][1]}</h2>
            <div className="image-container">
              <div className="image-wrapper">
                <img src={`${place[text][distanceIdx][purposeIdx][0]}`} alt={`${text} image 1`} />
              </div>
              <div className="image-wrapper">
                <img src={`${place[text][distanceIdx][purposeIdx][1]}`} alt={`${text} image 2`} />
              </div>
            </div>
          </main>
        </div>
      </Modal>
    </>
  );
};

export default ProgressBar;
