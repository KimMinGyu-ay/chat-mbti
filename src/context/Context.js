import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);

  const [message, setMessage] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setInput("");
    let word = ''; 
    let response;
    if (prompt != undefined) {
      setMessage((prevMessage) => [...prevMessage, {'type':'title', 'context':prompt}]);
      response = await runChat(prompt);
    } else {
      setMessage((prevMessage) => [...prevMessage, {'type':'title', 'context':input}]);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      word += nextWord + " ";
      delayPara(i, nextWord + " ");
    }
    setMessage((prevMessage) => [...prevMessage, {'type':'data', 'context':word}]);
    setLoading(false);
    
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    showResult,
    loading,
    setLoading,
    resultData,
    input,
    setInput,
    newChat,
    message,
    setShowResult,
    setMessage
  };

  return (
    <>
      <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    </>
  );
};

export default ContextProvider;
