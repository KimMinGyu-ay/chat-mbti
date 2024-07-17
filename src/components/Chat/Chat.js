import { assets } from "../../assets/assets";

const Chat = (props) =>{
    const {resultData, recentPrompt, loading} = props
    
    return (
        <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <>
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                </>
              )}
            </div>
          </div>
    )
}


export default Chat;