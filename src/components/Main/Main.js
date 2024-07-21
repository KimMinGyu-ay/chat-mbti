import Modal from "react-modal";
import { useContext, useState, useEffect } from "react";

import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

import Card from "./Card"
import Chat from "../Chat/Chat"
import Survey from "../Survey/Survey";
import InputMessage from "./InputMessage";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    message,
    setShowResult,
    setMessage
  } = useContext(Context);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };

  const clickInput = (text) => {
    setInput(text);
    onSent(text);
  }

  const home = () => {
    setShowResult(false);
    setMessage("");
  }
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${assets.background2_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="nav">
        <p>휴먼과 딸깍팀!</p>
        <img src={assets.user_icon} onClick={home} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <Card 
            openModal={openModal}
            clickInput={clickInput} />
        ) : (
          <Chat 
            recentPrompt={recentPrompt} 
            resultData={resultData}
            message={message}
            loading={loading}/>
        )}

        <div className="main-bottom">
          <InputMessage 
            setInput={setInput} 
            input={input} 
            handleKeyDown={handleKeyDown}
            onSent={onSent}
          />
          <p className="bottom-info">휴먼지능정보공학과 "딸깍팀"</p>
        </div>
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
            닫기
          </button>
          <Survey />
        </div>
      </Modal>
    </div>
  );
};

export default Main;
