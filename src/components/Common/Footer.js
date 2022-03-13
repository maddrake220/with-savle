function Footer() {
  return (
    <footer>
      <h1>주식회사 부엔까미노</h1>
      <span>대표이사 이수영</span>
      <address>
        <span>
          주소. 서울시 영등포구 의사당대로 83{" "}
          <span className="address__detail">오투타워, 서울 핀테크랩 8층</span>
        </span>
        <span>고객센터번호. 070-7537-1705</span>
        <span>
          이메일.{" "}
          <a className="black" href="mailto:support@buencamino.io">
            support@buencamino.io
          </a>
        </span>
      </address>
      <span>
        |{" "}
        <a
          className="black"
          href="https://buencamino.notion.site/Savle-5128bd3f0ad245d88a655db906b36caf"
        >
          서비스 이용약관
        </a>{" "}
        |{" "}
        <a
          className="black"
          href="https://buencamino.notion.site/6480232ee8a746258f1207bcef1c9005"
        >
          개인정보 처리방침
        </a>{" "}
        |
      </span>
      <style jsx>{`
        footer {
          padding-top: 60px;
          padding-bottom: 73px;
          padding-left: 8.59375vw;
          padding-right: 8.59375vw;
          line-height: 24px;
          background: #f7f8fa;
        }
        address {
          margin: 40px 0px;
          font-style: inherit;
        }
        address > span {
          display: block;
        }
        .address__detail {
          display: inline-block;
        }
        a {
          text-decoration: none;
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
