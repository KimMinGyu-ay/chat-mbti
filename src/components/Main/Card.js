const Card = (props) => {
  const openModal = props.openModal;
  const clickInput = props.clickInput;

  return (
    <>
      <div className="greet">
        <p>
          <span>나만를 위한</span>
        </p>
        <p>여행 계획을 만들어 보세요!</p>
      </div>
      <div className="cards">
        <button key="1" className="card" onClick={() => openModal("mbti")}>
          <p>나만을 위한 추천여행지 알아보기 💡</p>
        </button>
        <button key="2" className="card" onClick={openModal}>
          <p>MBTI를 모른다면 저희가 찾아드릴께요✈️</p>
        </button>
        <button
          key="3"
          className="card"
          onClick={(e) =>
            clickInput("이번 여름휴가 가장 HOT한 여행지는 어디야?")
          }
        >
          <p>이번 여름휴가 가장 HOT한 여행지는? 🌴</p>
        </button>
        <button
          key="4"
          className="card"
          onClick={(e) => clickInput("인생샷 찍기 좋은 장소는 어디야?")}
        >
          <p>인생샷을 찍고 싶다면 여기는 어때요? 🥰</p>
        </button>
      </div>
    </>
  );
};

export default Card;
