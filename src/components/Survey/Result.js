import data from "./constant";
import { assets, mbtiList } from "../../assets/assets";
const { resultContentsList } = data;
const Result = (props) => {
  const { count } = props;
  let MBTI = "INTJ".split(""); // 문자열을 배열로 변환

  if (count[0] === 2 || count[0] === 3) MBTI[3] = "P";
  if (count[1] === 2 || count[1] === 3) MBTI[1] = "S";
  if (count[2] === 2 || count[2] === 3) MBTI[2] = "F";
  if (count[3] === 2 || count[3] === 3) MBTI[0] = "E";

  MBTI = MBTI.join(""); // 배열을 다시 문자열로 변환

  return (
    <div>
      <main
        className="content"
        style={{ backgroundImage: `url(${mbtiList[MBTI]})` }}
      >
        <h1 className="content__title color--primary">{MBTI}</h1>
        <h2 className="content__sub-title">{resultContentsList[MBTI][0]}</h2>
      </main>
    </div>
  );
};

export default Result;
