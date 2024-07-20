import { assets } from "../../assets/assets";

const InputMessage = (props) => {
    const {setInput, input, handleKeyDown, onSent} = props;


    return (
        <>
            <div className="search-box">
                <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="여기에 입력해 주세요!"
                onKeyDown={handleKeyDown}
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