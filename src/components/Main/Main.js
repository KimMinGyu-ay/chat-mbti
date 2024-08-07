import Modal from "react-modal";
import { useContext, useState, useEffect } from "react";

import axios from "axios";
import "../../assets/css/main.css";
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
  const [chatType, setChatType] = useState("");
  const [questionIdx, setQuestionIdx] = useState(0);
  const [showRankResult, setShowRankResult] = useState([]);
<<<<<<< HEAD
  const testQuestion = ['1. 테스트 질문입니다.', '2. 테스트 질문입니다.', '3. 테스트 질문입니다.']

  let result = {
    'ENTP': 0,
    'INTP': 0,
    'ENTJ': 0,
    'INTJ': 0,
    'ENFP': 0,
    'INFP': 0,
    'ENFJ': 0,
    'INFJ': 0,
    'ESTP': 0,
    'ISTP': 0,
    'ESTJ': 0,
    'ISTJ': 0,
    'ESFP': 0,
    'ISFP': 0,
    'ESFJ': 0,
    'ISFJ': 0
  } ;
=======
  const testQuestion = [
    "1. 테스트 질문입니다.",
    "2. 테스트 질문입니다.",
    "3. 테스트 질문입니다.",
  ];

  let result = {
    ENTP: 0,
    INTP: 0,
    ENTJ: 0,
    INTJ: 0,
    ENFP: 0,
    INFP: 0,
    ENFJ: 0,
    INFJ: 0,
    ESTP: 0,
    ISTP: 0,
    ESTJ: 0,
    ISTJ: 0,
    ESFP: 0,
    ISFP: 0,
    ESFJ: 0,
    ISFJ: 0,
  };
>>>>>>> origin/main

  let rankResult = [];

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (chatType === "mbti") clickInput(input, "mbti");
      else onSent();
    }
  };

  const clickInput = (text = "", chatType = "") => {
    if (chatType === "mbti") {
      if (text.length > 0) {
        setMessage((prevMessage) => [
          ...prevMessage,
          { type: "title", context: text },
        ]);
        setInput("");
      }
      setChatType(chatType);
      // console.log("API연결");
      // const fetchData = async () => {
      //   const res = await axios.post("http://127.0.0.1:7080/");
      //   return res.data;
      // };
      // fetchData().then((res) => console.log("API 결과: ", res));

      setMessage((prevMessage) => [...prevMessage, {'type':'mbti', 'context':testQuestion[questionIdx%3]}]);
      setShowResult(true)
      setQuestionIdx(questionIdx+1)
      const response = {'ENTJ': 0.28, 'ENFJ': 0.22, 'INFP': 0.18}

      for (let key in response) {
        if (response.hasOwnProperty(key) && result.hasOwnProperty(key)) {
            result[key] += response[key];
          }
        }
      
      let sortedresult = Object.entries(result).sort((a, b) => b[1] - a[1]);
      setShowRankResult(sortedresult.slice(0, 3))

    } else {
      setChatType("");
      setInput(text);
      onSent(text);
    }
  };

  const home = () => {
    if (!loading) {
      setShowResult(false);
      setMessage("");
      setChatType("");
    }
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
        <img src={assets.return_icon_gif} onClick={home} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <Card openModal={openModal} clickInput={clickInput} />
        ) : (
          <Chat
            resultData={resultData}
            message={message}
            loading={loading}
            showRankResult={showRankResult}
          />
        )}

        <div className="main-bottom">
          <InputMessage
            setInput={setInput}
            input={input}
            handleKeyDown={handleKeyDown}
            onSent={onSent}
            chatType={chatType}
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
