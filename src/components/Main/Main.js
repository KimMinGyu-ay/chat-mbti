import Modal from "react-modal";
import { useContext, useState, useEffect } from "react";

import axios from "axios";
import "../../assets/css/main.css";
import { assets } from "../../assets/assets";
import { mbtiQuestion } from "../../const/mbti";
import { Context } from "../../context/Context";

import Card from "./Card";
import Guide from "./Guide";
import Chat from "../Chat/Chat";
import Survey from "../Survey/Survey";
import InputMessage from "./InputMessage";

const Main = () => {
  const {
    onSent,
    showResult,
    loading,
    setLoading,
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
  const [firstCardModal, setFirstCardModal] = useState(false);
  const [data, setData] = useState([]);
  const options = [ '관광', '휴식', '쇼핑', '액티비티', '2시간 이하', '4시간 이하', '상관없음'];
  let response;
  const openModal = (chatType) => {
    setModalIsOpen(true);
    setInput('');
    if (chatType === "mbti") setFirstCardModal(true);
  };

  const closeModal = (chatType = "mbti") => {
    setModalIsOpen(false);
    setFirstCardModal(false);
    setInput('');
    if (chatType === "mbti") clickInput("", (chatType = chatType));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      if (chatType === "mbti") clickInput(input, "mbti");
      else onSent();
    }
  };

  const clickInput = async (text = "", chatType = "", selectIdx = -1) => {
    if (chatType === "mbti") {
      if (text.length > 0) {
        if(selectIdx >= 0) 
          { text = options[selectIdx]
          }
        else setData((prevRequestText) => [...prevRequestText, text]);
        
        
        setMessage((prevMessage) => [
          ...prevMessage,
          { type: "title", context: text },
        ]);
        
        setInput("");
        setLoading(true);
        
        async function postData() {
          try {
            response = await axios.post('http://127.0.0.1:8000/predict', {
              text: data
            });
            return response.data;
          } catch (error) {
            console.error(error);
            return null;
          }
        }

        if(questionIdx === 4){
          response = await postData()
        }
      }

      setChatType(chatType);
      setLoading(false);
      setMessage((prevMessage) => [
        ...prevMessage,
        { type: "mbti", context: mbtiQuestion[questionIdx] },
      ]);
      setQuestionIdx(questionIdx + 1);
      setShowResult(true);
      if(response){
        setShowRankResult(response.mbti);
      }
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
      setQuestionIdx(0);
      setInput('');
      setShowRankResult([])
      setData([])
    }
  };

  return (
    <div
      className="main"
      style={{
        backgroundImage: "linear-gradient(to right, #f3e7e9, #e3eeff)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="nav">
        <p>✈️</p>
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
            questionIdx={questionIdx}
            clickInput={clickInput}
          />
        )}

        <div className="main-bottom">
          <InputMessage
            setInput={setInput}
            input={input}
            handleKeyDown={handleKeyDown}
            onSent={onSent}
            chatType={chatType}
            questionIdx={questionIdx}
            loading={loading}
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
          {firstCardModal ? (
            <Guide setShowResult={setShowResult} closeModal={closeModal} />
          ) : (
            <Survey />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Main;
