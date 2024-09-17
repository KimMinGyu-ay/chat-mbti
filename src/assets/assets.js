// 아이콘들을 한 번에 가져오기
const icons = require.context("./icon", false, /\.(png|jpe?g|gif|svg)$/);

// MBTI 설명
const mbtiImages = require.context("./mbti", false, /\.(png)$/);


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


// mbti/시간/목적
export const place = {
  ENFJ: {
    0: {
      0: [require('./place/ENFJ/0/0/뉴욕.png'), require('./place/ENFJ/0/0/오슬로.png')],
      1: [require('./place/ENFJ/0/1/리스본.png'), require('./place/ENFJ/0/1/멜버른.png')],
      2: [require('./place/ENFJ/0/2/두바이.png'), require('./place/ENFJ/0/2/아이슬란드.png')],
      3: [require('./place/ENFJ/0/3/뉴욕.png'), require('./place/ENFJ/0/3/아이슬란드.png')],
    },
    1: {
      0: [require('./place/ENFJ/1/0/방콕.png'), require('./place/ENFJ/1/0/치앙마이.png')],
      1: [require('./place/ENFJ/1/0/방콕.png'), require('./place/ENFJ/1/0/치앙마이.png')],
      2: [require('./place/ENFJ/1/0/방콕.png'), require('./place/ENFJ/1/0/치앙마이.png')],
      3: [require('./place/ENFJ/1/0/방콕.png'), require('./place/ENFJ/1/0/치앙마이.png')],
    },
    2: {
      0: [require('./place/ENFJ/2/0/상하이.png'), require('./place/ENFJ/2/0/오사카.png')],
      1: [require('./place/ENFJ/2/0/상하이.png'), require('./place/ENFJ/2/0/오사카.png')],
      2: [require('./place/ENFJ/2/0/상하이.png'), require('./place/ENFJ/2/0/오사카.png')],
      3: [require('./place/ENFJ/2/0/상하이.png'), require('./place/ENFJ/2/0/오사카.png')],
    },
  },
  ENFP: {
    0: {
      0: [require('./place/ENFP/0/0/부다페스트.png'), require('./place/ENFP/0/0/비엔나.png')],
      1: [require('./place/ENFP/0/1/파리.png'), require('./place/ENFP/0/1/프라하.png')],
      2: [require('./place/ENFP/0/2/바르셀로나.png'), require('./place/ENFP/0/2/시드니.png')],
      3: [require('./place/ENFP/0/3/나이로비.png'), require('./place/ENFP/0/3/퀸즈타운.png')],
    },
    1: {
      0: [require('./place/ENFP/1/0/발리.png'), require('./place/ENFP/1/0/자카르타.png')],
      1: [require('./place/ENFP/1/1/발리.png'), require('./place/ENFP/1/1/자카르타.png')],
      2: [require('./place/ENFP/1/2/발리.png'), require('./place/ENFP/1/2/방콕.png')],
      3: [require('./place/ENFP/1/3/발리.png'), require('./place/ENFP/1/3/방콕.png')],
    },
    2: {
      0: [require('./place/ENFP/2/0/교토.png'), require('./place/ENFP/2/0/상하이.png')],
      1: [require('./place/ENFP/2/1/교토.png'), require('./place/ENFP/2/1/오사카.png')],
      2: [require('./place/ENFP/2/2/상하이.png'), require('./place/ENFP/2/2/오사카.png')],
      3: [require('./place/ENFP/2/3/상하이.png'), require('./place/ENFP/2/3/오사카.png')],
    },
  },
  ENTJ: {
    0: {
      0: [require('./place/ENTJ/0/0/뉴욕.png'), require('./place/ENTJ/0/0/오클랜드.png')],
      1: [require('./place/ENTJ/0/1/뉴욕.png'), require('./place/ENTJ/0/1/모스크바.png')],
      2: [require('./place/ENTJ/0/2/뉴욕.png'), require('./place/ENTJ/0/2/도하.png')],
      3: [require('./place/ENTJ/0/3/두바이.png'), require('./place/ENTJ/0/3/오클랜드.png')],
    },
    1: {
      0: [require('./place/ENTJ/1/0/싱가포르.png'), require('./place/ENTJ/1/0/자카르타.png')],
      1: [require('./place/ENTJ/1/1/싱가포르.png'), require('./place/ENTJ/1/1/자카르타.png')],
      2: [require('./place/ENTJ/1/2/싱가포르.png'), require('./place/ENTJ/1/2/자카르타.png')],
      3: [require('./place/ENTJ/1/3/싱가포르.png'), require('./place/ENTJ/1/3/자카르타.png')],
    },
    2: {
      0: [require('./place/ENTJ/2/0/도쿄.png'), require('./place/ENTJ/2/0/상하이.png')],
      1: [require('./place/ENTJ/2/1/도쿄.png'), require('./place/ENTJ/2/1/상하이.png')],
      2: [require('./place/ENTJ/2/2/도쿄.png'), require('./place/ENTJ/2/2/상하이.png')],
      3: [require('./place/ENTJ/2/3/도쿄.png'), require('./place/ENTJ/2/3/상하이.png')],
    },
  },
  ENTP: {
    0: {
      0: [require('./place/ENTP/0/0/루체른.png'), require('./place/ENTP/0/0/샌프란시스코.png')],
      1: [require('./place/ENTP/0/1/베를린.png'), require('./place/ENTP/0/1/샌프란시스코.png')],
      2: [require('./place/ENTP/0/2/더블린.png'), require('./place/ENTP/0/2/토론토.png')],
      3: [require('./place/ENTP/0/3/뭄바이.png'), require('./place/ENTP/0/3/퀸즈타운.png')],
    },
    1: {
      0: [require('./place/ENTP/1/0/나이로비.png'), require('./place/ENTP/1/0/이스탄불.png')],
      1: [require('./place/ENTP/1/1/나이로비.png'), require('./place/ENTP/1/1/이스탄불.png')],
      2: [require('./place/ENTP/1/2/나이로비.png'), require('./place/ENTP/1/2/이스탄불.png')],
      3: [require('./place/ENTP/1/3/나이로비.png'), require('./place/ENTP/1/3/이스탄불.png')],
    },
    2: {
      0: [require('./place/ENTP/2/0/교토.png'), require('./place/ENTP/2/0/오사카.png')],
      1: [require('./place/ENTP/2/1/교토.png'), require('./place/ENTP/2/1/오사카.png')],
      2: [require('./place/ENTP/2/2/교토.png'), require('./place/ENTP/2/2/오사카.png')],
      3: [require('./place/ENTP/2/3/교토.png'), require('./place/ENTP/2/3/오사카.png')],
    },
  },
  ESFJ: {
    0: {
      0: [require('./place/ESFJ/0/0/취리히.png'), require('./place/ESFJ/0/0/토론토.png')],
      1: [require('./place/ESFJ/0/1/암스테르담.png'), require('./place/ESFJ/0/1/취리히.png')],
      2: [require('./place/ESFJ/0/2/시드니.png'), require('./place/ESFJ/0/2/토론토.png')],
      3: [require('./place/ESFJ/0/3/취리히.png'), require('./place/ESFJ/0/3/토론토.png')],
    },
    1: {
      0: [require('./place/ESFJ/1/0/발리.png'), require('./place/ESFJ/1/0/자카르타.png')],
      1: [require('./place/ESFJ/1/1/발리.png'), require('./place/ESFJ/1/1/자카르타.png')],
      2: [require('./place/ESFJ/1/2/발리.png'), require('./place/ESFJ/1/2/자카르타.png')],
      3: [require('./place/ESFJ/1/3/발리.png'), require('./place/ESFJ/1/3/자카르타.png')],
    },
    2: {
      0: [require('./place/ESFJ/2/0/교토.png'), require('./place/ESFJ/2/0/상하이.png')],
      1: [require('./place/ESFJ/2/1/교토.png'), require('./place/ESFJ/2/1/상하이.png')],
      2: [require('./place/ESFJ/2/2/교토.png'), require('./place/ESFJ/2/2/상하이.png')],
      3: [require('./place/ESFJ/2/3/교토.png'), require('./place/ESFJ/2/3/상하이.png')],
    },
  },
  ESFP: {
    0: {
      0: [require('./place/ESFP/0/0/로마.png'), require('./place/ESFP/0/0/오클랜드.png')],
      1: [require('./place/ESFP/0/1/리스본.png'), require('./place/ESFP/0/1/뮌헨.png')],
      2: [require('./place/ESFP/0/2/더블린.png'), require('./place/ESFP/0/2/멜버른.png')],
      3: [require('./place/ESFP/0/3/뭄바이.png'), require('./place/ESFP/0/3/상파울로.png')],
    },
    1: {
      0: [require('./place/ESFP/1/0/싱가포르.png'), require('./place/ESFP/1/0/하노이.png')],
      1: [require('./place/ESFP/1/1/싱가포르.png'), require('./place/ESFP/1/1/하노이.png')],
      2: [require('./place/ESFP/1/2/싱가포르.png'), require('./place/ESFP/1/2/하노이.png')],
      3: [require('./place/ESFP/1/3/싱가포르.png'), require('./place/ESFP/1/3/하노이.png')],
    },
    2: {
      0: [require('./place/ESFP/2/0/도쿄.png'), require('./place/ESFP/2/0/오사카.png')],
      1: [require('./place/ESFP/2/1/도쿄.png'), require('./place/ESFP/2/1/오사카.png')],
      2: [require('./place/ESFP/2/2/상하이.png'), require('./place/ESFP/2/2/오사카.png')],
      3: [require('./place/ESFP/2/3/상하이.png'), require('./place/ESFP/2/3/오사카.png')],
    },
  },
  ESTJ: {
    0: {
      0: [require('./place/ESTJ/0/0/런던.png'), require('./place/ESTJ/0/0/취리히.png')],
      1: [require('./place/ESTJ/0/1/도하.png'), require('./place/ESTJ/0/1/루체른.png')],
      2: [require('./place/ESTJ/0/2/도하.png'), require('./place/ESTJ/0/2/루체른.png')],
      3: [require('./place/ESTJ/0/3/도하.png'), require('./place/ESTJ/0/3/루체른.png')],
    },
    1: {
      0: [require('./place/ESTJ/1/0/방콕.png'), require('./place/ESTJ/1/0/자카르타.png')],
      1: [require('./place/ESTJ/1/1/방콕.png'), require('./place/ESTJ/1/1/자카르타.png')],
      2: [require('./place/ESTJ/1/2/방콕.png'), require('./place/ESTJ/1/2/자카르타.png')],
      3: [require('./place/ESTJ/1/3/방콕.png'), require('./place/ESTJ/1/3/자카르타.png')],
    },
    2: {
      0: [require('./place/ESTJ/2/0/도쿄.png'), require('./place/ESTJ/2/0/상하이.png')],
      1: [require('./place/ESTJ/2/1/도쿄.png'), require('./place/ESTJ/2/1/상하이.png')],
      2: [require('./place/ESTJ/2/2/도쿄.png'), require('./place/ESTJ/2/2/상하이.png')],
      3: [require('./place/ESTJ/2/3/도쿄.png'), require('./place/ESTJ/2/3/상하이.png')],
    },
  },
  ESTP: {
    0: {
      0: [require('./place/ESTP/0/0/샌프란시스코.png'), require('./place/ESTP/0/0/시드니.png')],
      1: [require('./place/ESTP/0/1/샌프란시스코.png'), require('./place/ESTP/0/1/시드니.png')],
      2: [require('./place/ESTP/0/2/샌프란시스코.png'), require('./place/ESTP/0/2/시드니.png')],
      3: [require('./place/ESTP/0/3/나이로비.png'), require('./place/ESTP/0/3/뉴욕.png')],
    },
    1: {
      0: [require('./place/ESTP/1/0/방콕.png'), require('./place/ESTP/1/0/치앙마이.png')],
      1: [require('./place/ESTP/1/1/방콕.png'), require('./place/ESTP/1/1/치앙마이.png')],
      2: [require('./place/ESTP/1/2/방콕.png'), require('./place/ESTP/1/2/치앙마이.png')],
      3: [require('./place/ESTP/1/3/방콕.png'), require('./place/ESTP/1/3/치앙마이.png')],
    },
    2: {
      0: [require('./place/ESTP/2/0/도쿄.png'), require('./place/ESTP/2/0/상하이.png')],
      1: [require('./place/ESTP/2/1/도쿄.png'), require('./place/ESTP/2/1/상하이.png')],
      2: [require('./place/ESTP/2/2/도쿄.png'), require('./place/ESTP/2/2/상하이.png')],
      3: [require('./place/ESTP/2/3/도쿄.png'), require('./place/ESTP/2/3/상하이.png')],
    },
  },
  INFJ: {
    0: {
      0: [require('./place/INFJ/0/0/스톡홀름.png'), require('./place/INFJ/0/0/취리히.png')],
      1: [require('./place/INFJ/0/1/스톡홀름.png'), require('./place/INFJ/0/1/취리히.png')],
      2: [require('./place/INFJ/0/2/스톡홀름.png'), require('./place/INFJ/0/2/취리히.png')],
      3: [require('./place/INFJ/0/3/스톡홀름.png'), require('./place/INFJ/0/3/취리히.png')],
    },
    1: {
      0: [require('./place/INFJ/1/0/치앙마이.png'), require('./place/INFJ/1/0/하노이.png')],
      1: [require('./place/INFJ/1/1/치앙마이.png'), require('./place/INFJ/1/1/하노이.png')],
      2: [require('./place/INFJ/1/2/치앙마이.png'), require('./place/INFJ/1/2/하노이.png')],
      3: [require('./place/INFJ/1/3/치앙마이.png'), require('./place/INFJ/1/3/하노이.png')],
    },
    2: {
      0: [require('./place/INFJ/2/0/도쿄.png'), require('./place/INFJ/2/0/상하이.png')],
      1: [require('./place/INFJ/2/1/도쿄.png'), require('./place/INFJ/2/1/상하이.png')],
      2: [require('./place/INFJ/2/2/도쿄.png'), require('./place/INFJ/2/2/상하이.png')],
      3: [require('./place/INFJ/2/3/도쿄.png'), require('./place/INFJ/2/3/상하이.png')],
    },
  },
  INFP: {
    0: {
      0: [require('./place/INFP/0/0/나이로비.png'), require('./place/INFP/0/0/바르셀로나.png')],
      1: [require('./place/INFP/0/1/파리.png'), require('./place/INFP/0/1/포르투갈.png')],
      2: [require('./place/INFP/0/2/시드니.png'), require('./place/INFP/0/2/포카라.png')],
      3: [require('./place/INFP/0/3/나이로비.png'), require('./place/INFP/0/3/퀸즈타운.png')],
    },
    1: {
      0: [require('./place/INFP/1/0/싱가포르.png'), require('./place/INFP/1/0/치앙마이.png')],
      1: [require('./place/INFP/1/1/싱가포르.png'), require('./place/INFP/1/1/치앙마이.png')],
      2: [require('./place/INFP/1/2/발리.png'), require('./place/INFP/1/2/치앙마이.png')],
      3: [require('./place/INFP/1/3/발리.png'), require('./place/INFP/1/3/치앙마이.png')],
    },
    2: {
      0: [require('./place/INFP/2/0/도쿄.png'), require('./place/INFP/2/0/상하이.png')],
      1: [require('./place/INFP/2/1/도쿄.png'), require('./place/INFP/2/1/상하이.png')],
      2: [require('./place/INFP/2/2/도쿄.png'), require('./place/INFP/2/2/상하이.png')],
      3: [require('./place/INFP/2/3/도쿄.png'), require('./place/INFP/2/3/상하이.png')],
    },
  },
  INTJ: {
    0: {
      0: [require('./place/INTJ/0/0/모스크바.png'), require('./place/INTJ/0/0/카이로.png')],
      1: [require('./place/INTJ/0/1/뮌헨.png'), require('./place/INTJ/0/1/카이로.png')],
      2: [require('./place/INTJ/0/2/에든버러.png'), require('./place/INTJ/0/2/포르투갈.png')],
      3: [require('./place/INTJ/0/3/나이로비.png'), require('./place/INTJ/0/3/헬싱키.png')],
    },
    1: {
      0: [require('./place/INTJ/1/0/발리.png'), require('./place/INTJ/1/0/치앙마이.png')],
      1: [require('./place/INTJ/1/1/발리.png'), require('./place/INTJ/1/1/치앙마이.png')],
      2: [require('./place/INTJ/1/2/발리.png'), require('./place/INTJ/1/2/치앙마이.png')],
      3: [require('./place/INTJ/1/3/발리.png'), require('./place/INTJ/1/3/치앙마이.png')],
    },
    2: {
      0: [require('./place/INTJ/2/0/도쿄.png'), require('./place/INTJ/2/0/오사카.png')],
      1: [require('./place/INTJ/2/1/도쿄.png'), require('./place/INTJ/2/1/오사카.png')],
      2: [require('./place/INTJ/2/2/도쿄.png'), require('./place/INTJ/2/2/오사카.png')],
      3: [require('./place/INTJ/2/3/도쿄.png'), require('./place/INTJ/2/3/오사카.png')],
    },
  },
  INTP: {
    0: {
      0: [require('./place/INTP/0/0/런던.png'), require('./place/INTP/0/0/취리히.png')],
      1: [require('./place/INTP/0/1/런던.png'), require('./place/INTP/0/1/오슬로.png')],
      2: [require('./place/INTP/0/2/런던.png'), require('./place/INTP/0/2/포카라.png')],
      3: [require('./place/INTP/0/3/런던.png'), require('./place/INTP/0/3/취리히.png')],
    },
    1: {
      0: [require('./place/INTP/1/0/치앙마이.png'), require('./place/INTP/1/0/하노이.png')],
      1: [require('./place/INTP/1/1/치앙마이.png'), require('./place/INTP/1/1/하노이.png')],
      2: [require('./place/INTP/1/2/치앙마이.png'), require('./place/INTP/1/2/하노이.png')],
      3: [require('./place/INTP/1/3/치앙마이.png'), require('./place/INTP/1/3/하노이.png')],
    },
    2: {
      0: [require('./place/INTP/2/0/도쿄.png'), require('./place/INTP/2/0/오사카.png')],
      1: [require('./place/INTP/2/1/도쿄.png'), require('./place/INTP/2/1/오사카.png')],
      2: [require('./place/INTP/2/2/도쿄.png'), require('./place/INTP/2/2/오사카.png')],
      3: [require('./place/INTP/2/3/도쿄.png'), require('./place/INTP/2/3/오사카.png')],
    },
  },
  ISFJ: {
    0: {
      0: [require('./place/ISFJ/0/0/로마.png'), require('./place/ISFJ/0/0/상파울로.png')],
      1: [require('./place/ISFJ/0/1/루체른.png'), require('./place/ISFJ/0/1/상파울로.png')],
      2: [require('./place/ISFJ/0/2/더블린.png'), require('./place/ISFJ/0/2/오슬로.png')],
      3: [require('./place/ISFJ/0/3/로마.png'), require('./place/ISFJ/0/3/오슬로.png')],
    },
    1: {
    0: [require('./place/ISFJ/1/0/방콕.png'), require('./place/ISFJ/1/0/자카르타.png')],
      1: [require('./place/ISFJ/1/1/방콕.png'), require('./place/ISFJ/1/1/자카르타.png')],
      2: [require('./place/ISFJ/1/2/방콕.png'), require('./place/ISFJ/1/2/자카르타.png')],
      3: [require('./place/ISFJ/1/3/방콕.png'), require('./place/ISFJ/1/3/자카르타.png')],
    },
    2: {
    0: [require('./place/ISFJ/2/0/상하이.png'), require('./place/ISFJ/2/0/오사카.png')],
      1: [require('./place/ISFJ/2/1/상하이.png'), require('./place/ISFJ/2/1/오사카.png')],
      2: [require('./place/ISFJ/2/2/상하이.png'), require('./place/ISFJ/2/2/오사카.png')],
      3: [require('./place/ISFJ/2/3/상하이.png'), require('./place/ISFJ/2/3/오사카.png')],
    },
  },
  ISFP: {
    0: {
      0: [require('./place/ISFP/0/0/바르셀로나.png'), require('./place/ISFP/0/0/케이프타운.png')],
      1: [require('./place/ISFP/0/1/에든버러.png'), require('./place/ISFP/0/1/프라하.png')],
      2: [require('./place/ISFP/0/2/카이로.png'), require('./place/ISFP/0/2/프로방스.png')],
      3: [require('./place/ISFP/0/3/비엔나.png'), require('./place/ISFP/0/3/에든버러.png')],
    },
    1: {
    0: [require('./place/ISFP/1/0/발리.png'), require('./place/ISFP/1/0/자카르타.png')],
      1: [require('./place/ISFP/1/1/발리.png'), require('./place/ISFP/1/1/자카르타.png')],
      2: [require('./place/ISFP/1/2/발리.png'), require('./place/ISFP/1/2/자카르타.png')],
      3: [require('./place/ISFP/1/3/발리.png'), require('./place/ISFP/1/3/자카르타.png')],
    },
    2: {
    0: [require('./place/ISFP/2/0/도쿄.png'), require('./place/ISFP/2/0/상하이.png')],
      1: [require('./place/ISFP/2/1/도쿄.png'), require('./place/ISFP/2/1/상하이.png')],
      2: [require('./place/ISFP/2/2/도쿄.png'), require('./place/ISFP/2/2/상하이.png')],
      3: [require('./place/ISFP/2/3/도쿄.png'), require('./place/ISFP/2/3/상하이.png')],
    }
  },
    ISTJ: {
      0: {
        0: [require('./place/ISTJ/0/0/도하.png'), require('./place/ISTJ/0/0/모스크바.png')],
        1: [require('./place/ISTJ/0/1/도하.png'), require('./place/ISTJ/0/1/모스크바.png')],
        2: [require('./place/ISTJ/0/2/도하.png'), require('./place/ISTJ/0/2/모스크바.png')],
        3: [require('./place/ISTJ/0/3/도하.png'), require('./place/ISTJ/0/3/모스크바.png')],
      },
      1: {
        0: [require('./place/ISTJ/1/0/발리.png'), require('./place/ISTJ/1/0/방콕.png')],
        1: [require('./place/ISTJ/1/1/발리.png'), require('./place/ISTJ/1/1/방콕.png')],
        2: [require('./place/ISTJ/1/2/발리.png'), require('./place/ISTJ/1/2/방콕.png')],
        3: [require('./place/ISTJ/1/3/발리.png'), require('./place/ISTJ/1/3/방콕.png')],
      },
      2: {
        0: [require('./place/ISTJ/2/0/도쿄.png'), require('./place/ISTJ/2/0/상하이.png')],
        1: [require('./place/ISTJ/2/1/도쿄.png'), require('./place/ISTJ/2/1/상하이.png')],
        2: [require('./place/ISTJ/2/2/도쿄.png'), require('./place/ISTJ/2/2/상하이.png')],
        3: [require('./place/ISTJ/2/3/도쿄.png'), require('./place/ISTJ/2/3/상하이.png')],
      },
  },
  ISTP: {
    0: {
      0: [require('./place/ISTP/0/0/아이슬란드.png'), require('./place/ISTP/0/0/헬싱키.png')],
      1: [require('./place/ISTP/0/1/아이슬란드.png'), require('./place/ISTP/0/1/헬싱키.png')],
      2: [require('./place/ISTP/0/2/포카라.png'), require('./place/ISTP/0/2/헬싱키.png')],
      3: [require('./place/ISTP/0/3/아이슬란드.png'), require('./place/ISTP/0/3/헬싱키.png')],
    },
    1: {
    0: [require('./place/ISTP/1/0/발리.png'), require('./place/ISTP/1/0/방콕.png')],
      1: [require('./place/ISTP/1/1/발리.png'), require('./place/ISTP/1/1/방콕.png')],
      2: [require('./place/ISTP/1/2/발리.png'), require('./place/ISTP/1/2/방콕.png')],
      3: [require('./place/ISTP/1/3/발리.png'), require('./place/ISTP/1/3/방콕.png')],
    },
    2: {
    0: [require('./place/ISTP/2/0/상하이.png'), require('./place/ISTP/2/0/오사카.png')],
      1: [require('./place/ISTP/2/1/상하이.png'), require('./place/ISTP/2/1/오사카.png')],
      2: [require('./place/ISTP/2/2/상하이.png'), require('./place/ISTP/2/2/오사카.png')],
      3: [require('./place/ISTP/2/3/상하이.png'), require('./place/ISTP/2/3/오사카.png')],
    },
  },

  ISTP: {
    0: {
      0: [require('./place/ISTP/0/0/아이슬란드.png'), require('./place/ISTP/0/0/헬싱키.png')],
      1: [require('./place/ISTP/0/1/아이슬란드.png'), require('./place/ISTP/0/1/헬싱키.png')],
      2: [require('./place/ISTP/0/2/포카라.png'), require('./place/ISTP/0/2/헬싱키.png')],
      3: [require('./place/ISTP/0/3/아이슬란드.png'), require('./place/ISTP/0/3/헬싱키.png')],
    },
    1: {
    0: [require('./place/ISTP/1/0/발리.png'), require('./place/ISTP/1/0/방콕.png')],
      1: [require('./place/ISTP/1/1/발리.png'), require('./place/ISTP/1/1/방콕.png')],
      2: [require('./place/ISTP/1/2/발리.png'), require('./place/ISTP/1/2/방콕.png')],
      3: [require('./place/ISTP/1/3/발리.png'), require('./place/ISTP/1/3/방콕.png')],
    },
    2: {
    0: [require('./place/ISTP/2/0/상하이.png'), require('./place/ISTP/2/0/오사카.png')],
      1: [require('./place/ISTP/2/1/상하이.png'), require('./place/ISTP/2/1/오사카.png')],
      2: [require('./place/ISTP/2/2/상하이.png'), require('./place/ISTP/2/2/오사카.png')],
      3: [require('./place/ISTP/2/3/상하이.png'), require('./place/ISTP/2/3/오사카.png')],
    },
  }
}