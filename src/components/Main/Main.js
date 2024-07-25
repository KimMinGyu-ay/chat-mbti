import Modal from "react-modal";
import { useContext, useState, useEffect } from "react";

import axios from "axios";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

import Card from "./Card";
import Chat from "../Chat/Chat";
import Survey from "../Survey/Survey";
import InputMessage from "./InputMessage";

const Main = () => {
  const {
    onSent,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    message,
    setShowResult,
    setMessage,
  } = useContext(Context);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chatType, setChatType] = useState('');

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

  const clickInput = (text="", chatType="") => {
    if (chatType==='mbti') {
      setChatType(chatType)
      // console.log("API연결");
      // const fetchData = async () => {
      //   const res = await axios.get("http://127.0.0.1:7080/");
      //   return res.data;
      // };
      // fetchData().then((res) => console.log("API 결과: ", res));
      setMessage((prevMessage) => [...prevMessage, {'type':'data', 'context':'넌 누구니'}]);
      setShowResult(true)
      const response = {'ENTJ': 0.28, 'ENFJ': 0.22, 'INFP': 0.18}
    } else {
      setChatType('')
      setInput(text);
      onSent(text);
    }
  };

  const home = () => {
    setShowResult(false);
    setMessage("");
  };

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
        <img src={assets.return_icon} onClick={home} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <Card openModal={openModal} clickInput={clickInput} />
        ) : (
          <Chat
            resultData={resultData}
            message={message}
            loading={loading}
          />
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
            <img src={assets.close_icon} alt="Close Icon" />
          </button>
          <Survey />
        </div>
      </Modal>
    </div>
  );
};

export default Main;
