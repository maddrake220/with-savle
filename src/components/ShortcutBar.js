import css from "styled-jsx/css";
import BackgroundBox from "public/layout/shortcut-bar-web.svg";
import MobileBackgroundBox from "public/layout/shortcut-bar-mobile.svg";
import GooglePlay from "public/layout/ic_google-play.svg";
import AppStore from "public/layout/ic_app-store.svg";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const style = css`
  .wrap {
    position: relative;
  }
  .backgroundBox {
    position: absolute;
    left: 0;
    top: 0;
  }
  h2 {
    position: absolute;
    color: #fff;
    font-weight: bold;
    text-align: center;
    left: 50%;
    transform: translate(-50%);
    margin: 0;
  }
  .shortcut {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    display: flex;
  }
`;
function ShortcutBar() {
  const { sm: isMobile } = useBreakpoint();
  return (
    <>
      <div className="wrap">
        {isMobile ? (
          <MobileBackgroundBox width="100%" className="backgroundBox" style={{ display: "block" }} />
        ) : (
          <BackgroundBox width="100%" className="backgroundBox" style={{ display: "block" }} />
        )}
        <h2 className={isMobile && "mobile"}>
          쉽고 FUN한 저축
          <br /> SAVLE
        </h2>
        <div className="shortcut">
          <a href="https://play.google.com/store/apps/details?id=io.buencamino.app.just" target="_blank" rel="noreferrer">
            <GooglePlay width={isMobile ? "31.3vw" : "8.5vw"} />
          </a>
          <a href="https://apps.apple.com/kr/app/savle-%EC%84%B8%EC%9D%B4%EB%B8%94/id1562933122" target="_blank" rel="noreferrer">
            <AppStore width={isMobile ? "31.3vw" : "8.5vw"} />
          </a>
        </div>
        <style jsx>{style}</style>
        <style jsx>{`
          .wrap {
            margin: ${isMobile ? "0" : "0 1.7vw"};
          }
          h2 {
            font-size: ${isMobile ? "5vw" : "1.6vw"};
            line-height: ${isMobile ? "1.5" : "1.3"};
            top: ${isMobile ? "17%" : "20%"};
          }
          .shortcut {
            top: ${isMobile ? "63%" : "60%"};
          }
          .shortcut a:first-child {
            margin-right: ${isMobile ? "6.3vw" : "1.3vw"};
          }
        `}</style>
      </div>
    </>
  );
}

export default ShortcutBar;
