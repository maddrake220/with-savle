import styles from "@/styles/layout/Layout.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.company_name}>주식회사 부엔까미노</h1>
      <span>대표이사 이수영</span>
      <address className={styles.address}>
        <span>
          주소. 서울시 영등포구 의사당대로 83{" "}
          <span className={styles.address__detail}>
            오투타워, 서울 핀테크랩 8층
          </span>
        </span>
        <span>고객센터번호. 070-7537-1705</span>
        <span>
          이메일.{" "}
          <a className={styles.link} href="mailto:support@buencamino.io">
            support@buencamino.io
          </a>
        </span>
      </address>
      <span>
        |{" "}
        <a
          className={styles.link}
          href="https://buencamino.notion.site/Savle-5128bd3f0ad245d88a655db906b36caf"
        >
          서비스 이용약관
        </a>{" "}
        |{" "}
        <a
          className={styles.link}
          href="https://buencamino.notion.site/6480232ee8a746258f1207bcef1c9005"
        >
          개인정보 처리방침
        </a>{" "}
        |
      </span>
    </footer>
  );
}

export default Footer;
