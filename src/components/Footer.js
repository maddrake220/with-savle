function Footer() {
  return (
    <footer>
      <h1>주식회사 부엔까미노</h1>
      <span>대표이사 이수영</span>
      <address>
        <span>주소 서울시 영등포구 의사당대로 83 오투타워, 서울 핀테크랩 8층</span>
        <span>고객센터번호. 070-7537-1705</span>
        <span>이메일. support@buencamino.io</span>
      </address>
      <span>|서비스 이용약관|개인정보 처리방침|</span>
      <style jsx>{`
        footer {
          margin-top: 60px;
          margin-left: 165px;
        }
        h1 {
          font-size: 16px;
          margin: 0px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
