import Link from "next/link";
import { useRouter } from "next/router";
import Back from "public/layout/back.svg";
import Bar from "public/layout/bar.svg";
import Logo from "public/layout/logo.svg";
import MobileLogo from "public/layout/logo-mobile.svg";
import { useCallback, useState } from "react";
import styles from "styles/layout/Navbar.module.scss";

import { useBreakpoint } from "@/hooks/useBreakpoint";

const routes = [
  { name: "goal", path: "/goal", title: "목표공유" },
  { name: "index", path: "/saving-calc", title: "저축계산기" },
  { name: "index", path: "/vote", title: "고민해결소" },
];

function Navbar() {
  const { sm: isMobile } = useBreakpoint();
  const { pathname, back } = useRouter();
  const [toggled, setToggled] = useState(false);
  const handleToggle = useCallback(
    () => setToggled((previous) => !previous),
    [],
  );
  return (
    // <nav className={`${!toggled && pathname.split("/")[1]}`}>
    <nav className={styles.nav}>
      <div className={styles.logoBox}>
        <div className={styles.mobile}>
          {toggled && (
            <Back className={styles.fill_white} onClick={handleToggle} />
          )}
          {!toggled && pathname !== "/" && (
            <Back className={styles.fill_primary} onClick={() => back()} />
          )}
          <Link href="/" passHref>
            <h1 className={styles.logo}>
              <MobileLogo
                className={`${styles.mobileLogo} ${
                  toggled ? styles.fill_white : styles.fill_primary
                }`}
                onClick={() => setToggled(false)}
              />
            </h1>
          </Link>
          <Bar
            className={`${
              toggled ? styles.stroke_white : styles.stroke_primary
            }`}
            onClick={handleToggle}
          />
        </div>
        <div className={styles.notMobile}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.menuBox} ${
          toggled ? styles.toggled : styles.notToggled
        }`}
      >
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <a
              className={`${pathname.includes(route.path) && "active"} white`}
              onClick={isMobile && handleToggle}
            >
              {route.title}
            </a>
          </Link>
        ))}
        <Link href="https://savle.net/MBTI/index.html">
          <a
            className="white"
            target="_blank"
            onClick={isMobile && handleToggle}
          >
            저축성향 테스트
          </a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          height: ${isMobile && toggled ? "100vh" : "52px"};
          background-color: ${isMobile && toggled && "#3178ff"};
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
