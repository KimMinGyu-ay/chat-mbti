// 아이콘들을 한 번에 가져오기
const icons = require.context("./icon", false, /\.(png|jpe?g|gif|svg)$/);

// MBTI 설명
const mbtiImages = require.context("./mbti", false, /\.(png)$/);

// MBTI별 여행지
const placeImages = require.context("./place", false, /\.(png)$/);

export const assets = {
  history_icon: icons("./history_icon.png"),
  menu_icon: icons("./menu_icon.png"),
  plus_icon: icons("./plus_icon.png"),
  question_icon: icons("./question_icon.png"),
  setting_icon: icons("./setting_icon.png"),
  bulb_icon: icons("./bulb_icon.png"),
  compass_icon: icons("./compass_icon.png"),
  gallery_icon: icons("./gallery_icon.png"),
  mic_icon: icons("./mic_icon.png"),
  message_icon: icons("./message_icon.png"),
  code_icon: icons("./code_icon.png"),
  send_icon: icons("./send_icon.png"),
  close_icon: icons("./close_icon.png"),
  gemini_icon: icons("./gemini_icon.png"),
  return_icon: icons("./return_icon.png"),
  background_icon: icons("./background.gif"),
  background2_icon: icons("./background2.gif"),
  return_icon_gif: icons("./return_icon.gif"),
  bear_icon_gif: icons("./bear.gif"),
};

export const mbtiList = {
  ENFP: mbtiImages("./ENFP.png"),
  INTJ: mbtiImages("./INTJ.png"),
};

export const place = {
  ENFJ: [placeImages("./ENFJ1.png"), placeImages("./ENFJ2.png")],
  ENFP: [placeImages("./ENFP1.png"), placeImages("./ENFP2.png")],
  ENTJ: [placeImages("./ENTJ1.png"), placeImages("./ENTJ2.png")],
  ENTP: [placeImages("./ENTP1.png"), placeImages("./ENTP2.png")],
  INTJ: [placeImages("./INTJ1.png"), placeImages("./INTJ2.png")],
  INTP: [placeImages("./INTP1.png"), placeImages("./INTP2.png")],
  INFP: [placeImages("./INFP1.png"), placeImages("./INFP2.png")],
  INFJ: [placeImages("./INFJ1.png"), placeImages("./INFJ2.png")],
  ESTP: [placeImages("./ESTP1.png"), placeImages("./ESTP2.png")],
  ISTP: [placeImages("./ISTP1.png"), placeImages("./ISTP2.png")],
  ESTJ: [placeImages("./ESTJ1.png"), placeImages("./ESTJ2.png")],
  ISTJ: [placeImages("./ISTJ1.png"), placeImages("./ISTJ2.png")],
  ESFP: [placeImages("./ESFP1.png"), placeImages("./ESFP2.png")],
  ISFP: [placeImages("./ISFP1.png"), placeImages("./ISFP2.png")],
  ESFJ: [placeImages("./ESFJ1.png"), placeImages("./ESFJ2.png")],
  ISFJ: [placeImages("./ISFJ1.png"), placeImages("./ISFJ2.png")],
};
