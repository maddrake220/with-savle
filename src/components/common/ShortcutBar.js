import AppStore from "public/layout/ic_app-store.svg";
import GooglePlay from "public/layout/ic_google-play.svg";
import MobileBackgroundBox from "public/layout/shortcut-bar-mobile.svg";
import TabletBackgroundBox from "public/layout/shortcut-bar-tablet.svg";
import BackgroundBox from "public/layout/shortcut-bar-web.svg";

import { useBreakpoint, useWidth } from "@/hooks/index";
import styles from "@/styles/common/ShortcutBar.module.scss";

function ShortcutBar() {
  const { sm: isMobile, md: isTablet } = useBreakpoint();
  return (
    <>
      <div className={styles.wrap}>
        {isMobile && (
          <MobileBackgroundBox width="100%" style={{ display: "block" }} />
        )}
        {!isMobile && isTablet && (
          <TabletBackgroundBox width="100%" style={{ display: "block" }} />
        )}
        {!isMobile && !isTablet && (
          <BackgroundBox width="100%" style={{ display: "block" }} />
        )}
        <h2>
          쉽고 FUN한 저축
          <br /> SAVLE
        </h2>
        <div className={styles.shortcut}>
          <a
            href="https://buencamino.page.link/fc_android"
            target="_blank"
            rel="noreferrer"
          >
            <GooglePlay width={useWidth(31.3, 15.5, 8.5, "vw")} />
          </a>
          <a
            href="https://buencamino.page.link/fc_ios"
            target="_blank"
            rel="noreferrer"
          >
            <AppStore width={useWidth(31.3, 15.5, 8.5, "vw")} />
          </a>
        </div>
      </div>
    </>
  );
}

export default ShortcutBar;
