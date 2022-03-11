import css from "styled-jsx/css";
import BackgroundBox from "public/layout/shortcut-bar-web.svg";
import MobileBackgroundBox from "public/layout/shortcut-bar-mobile.svg";
import TabletBackgroundBox from "public/layout/shortcut-bar-tablet.svg";
import GooglePlay from "public/layout/ic_google-play.svg";
import AppStore from "public/layout/ic_app-store.svg";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const style = css`
  .wrap {
    position: relative;
    box-sizing: border-box;
    background: #f7f8fa;
  }

  h2 {
    position: absolute;
    color: #fff;
    font-weight: bold;
    text-align: center;
    left: 50%;
    transform: translate(-50%);
    margin: 0;
    font-size: 5vw;
    line-height: 1.5;
    top: 17%;
  }
  .shortcut {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    top: 63%;
  }
  .shortcut a:first-child {
    margin-right: 6.3vw;
  }
  @media (min-width: 576px) {
    .wrap {
      padding: 0 1.1vw;
    }
    h2 {
      font-size: 2.6vw;
      line-height: 1.3;
      top: 20%;
    }
    .shortcut {
      top: 60%;
    }
    .shortcut a:first-child {
      margin-right: 2.4vw;
    }
  }
  @media (min-width: 1200px) {
    .wrap {
      padding: 0 0.9vw;
    }
    h2 {
      font-size: 1.6vw;
      line-height: 1.3;
      top: 20%;
    }
    .shortcut {
      top: 60%;
    }
    .shortcut a:first-child {
      margin-right: 1.3vw;
    }
  }
`;
function ShortcutBar() {
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  return (
    <>
      <div className="wrap">
        {isMobile && <MobileBackgroundBox width="100%" style={{ display: "block" }} />}
        {!isMobile && isTablet && <TabletBackgroundBox width="100%" style={{ display: "block" }} />}
        {!isMobile && !isTablet && <BackgroundBox width="100%" style={{ display: "block" }} />}
        <h2>
          쉽고 FUN한 저축
          <br /> SAVLE
        </h2>
        <div className="shortcut">
          <a href="https://play.google.com/store/apps/details?id=io.buencamino.app.just" target="_blank" rel="noreferrer">
            <GooglePlay width={isMobile ? "31.3vw" : isTablet ? "15.5vw" : "8.5vw"} />
          </a>
          <a href="https://apps.apple.com/kr/app/savle-%EC%84%B8%EC%9D%B4%EB%B8%94/id1562933122" target="_blank" rel="noreferrer">
            <AppStore width={isMobile ? "31.3vw" : isTablet ? "15.5vw" : "8.5vw"} />
          </a>
        </div>
        <style jsx>{style}</style>
      </div>
    </>
  );
}

export default ShortcutBar;
