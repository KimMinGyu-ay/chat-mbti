import { assets } from "../../assets/assets";

const InputMessage = (props) => {
    const {setInput, input, handleKeyDown, onSent, questionIdx} = props;

    return (
        <>
            <div className="search-box">
                <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder={questionIdx === 4 ? "모든 테스트를 종료했습니다." : "여기에 입력해 주세요!"}
                onKeyDown={handleKeyDown}
                disabled={questionIdx === 4}
                />
                <div>
                {input ? (
                    <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                ) : null}
                </div>
          </div>
        </>
    )
}


export default InputMessage