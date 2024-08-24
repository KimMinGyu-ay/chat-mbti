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
  const [mbtiProbs, setMbtiProbs] = useState({'INTP': 0,
                                              'ISTP': 0,
                                              'ENTP': 0,
                                              'ESTP': 0,
                                              'INFP': 0,
                                              'ISFP': 0,
                                              'ENFP': 0,
                                              'ESFP': 0, 
                                              'INTJ': 0,
                                              'ISTJ': 0,
                                              'ENTJ': 0,
                                              'ESTJ': 0,
                                              'INFJ': 0,
                                              'ISFJ': 0,
                                              'ENFJ': 0,
                                              'ESFJ': 0})
  let response;
  const openModal = (chatType) => {
    setModalIsOpen(true);
    if (chatType === "mbti") setFirstCardModal(true);
  };

  const closeModal = (chatType = "mbti") => {
    setModalIsOpen(false);
    setFirstCardModal(false);
    if (chatType === "mbti") clickInput("", (chatType = chatType));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      if (chatType === "mbti") clickInput(input, "mbti");
      else onSent();
    }
  };

  const clickInput = async (text = "", chatType = "") => {
    if (chatType === "mbti") {
      if (text.length > 0 && questionIdx <= 3) {
        setMessage((prevMessage) => [
          ...prevMessage,
          { type: "title", context: text },
        ]);
        setInput("");
        setLoading(true);
        
        async function postData() {
          try {
            //응답 성공 
            response = await axios.post('http://127.0.0.1:8000/predict',{
                //보내고자 하는 데이터 
                text: text,
                count: questionIdx,
                mbti_probs: mbtiProbs
            });
            setMbtiProbs(Object.fromEntries(response.data.result));
            return response.data.result;
          } catch (error) {
            //응답 실패
            console.error(error);
            return null
          }
        }
        response = await postData();
        
      }
      setChatType(chatType);      
      setLoading(false);
      
      if(questionIdx <= 3){
        setMessage((prevMessage) => [
          ...prevMessage,
          { type: "mbti", context: mbtiQuestion[questionIdx] },
        ]);
    }
      setShowResult(true);
      setQuestionIdx(questionIdx + 1);
      setShowRankResult(response);
      
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
