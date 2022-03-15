import escapeRegExp from "lodash.escaperegexp";

function ch2pattern(ch) {
  const offset = 44_032; /* '가'의 코드 */
  // 한국어 음절
  if (/[가-힣]/.test(ch)) {
    const chCode = ch.codePointAt(0) - offset;
    // 종성이 있으면 문자 그대로를 찾는다.
    if (chCode % 28 > 0) {
      return ch;
    }
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  // 한글 자음
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
      ㄱ: "가".codePointAt(0),
      ㄲ: "까".codePointAt(0),
      ㄴ: "나".codePointAt(0),
      ㄷ: "다".codePointAt(0),
      ㄸ: "따".codePointAt(0),
      ㄹ: "라".codePointAt(0),
      ㅁ: "마".codePointAt(0),
      ㅂ: "바".codePointAt(0),
      ㅃ: "빠".codePointAt(0),
      ㅅ: "사".codePointAt(0),
    };
    const begin =
      // eslint-disable-next-line security/detect-object-injection
      con2syl[ch] ||
      (ch.codePointAt(0) - 12_613) /* 'ㅅ'의 코드 */ * 588 + con2syl["ㅅ"];
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  // 그 외엔 그대로 내보냄
  // escapeRegExp는 lodash에서 가져옴
  return escapeRegExp(ch);
}
export const createFuzzyMatcher = (input) => {
  const pattern = [...input].map((element) => ch2pattern(element)).join(".*?");
  // eslint-disable-next-line security/detect-non-literal-regexp
  return new RegExp(pattern);
};
