import Link from "next/link";
import { useRouter } from "next/router";
import Back from "public/layout/back.svg";
import Bar from "public/layout/bar.svg";
import Logo from "public/layout/logo.svg";
import MobileLogo from "public/layout/logo-mobile.svg";
import { useCallback, useState } from "react";
import css from "styled-jsx/css";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import styles from "./styles/Navbar.module.scss";

const style = css`
  nav {
    background-color: #3178ff;
    width: 100vw;
    height: 53.87px;
    display: flex;
    /* padding: 0 7.083333vw; */
    z-index: 999;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .active {
    font-weight: bold;
  }
  .logoBox {
    margin-left: 11.726562vw;
    padding-left: 7.083333vw;
    display: flex;
    align-items: center;
  }
  .menuBox {
    display: flex;
    align-items: center;
    padding-right: 7.083333vw;
  }
  .menuBox > a {
    text-decoration: none;
    white-space: nowrap;
    display: block;
    margin: 0 17px;
    font-size: 13px;
  }
  .logo {
    margin: 0;
    font-size: 0;
    flex-basis: 85%;
  }
  @media (max-width: 575px) {
    nav {
      background-color: #f0f6fb;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      top: 0;
      padding: 0;
    }
    .notMobile {
      display: none;
    }
    .menuBox {
      flex-direction: column;
      padding: 0 16px;
    }
    .logoBox {
      height: 52px;
      margin: 0;
      padding: 0 4.0625vw 0 5.78125vw;
    }
    .mobile {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    .mobileLogo {
      flex-grow: 1;
      flex-basis: 70%;
    }
    .menuBox > a {
      width: 100%;
      padding: 4.375vw 0 5.625vw 0;
      border-bottom: 0.8px solid #ffffff;
      font-size: 13px;
      line-height: 20px;
    }
    .goal,
    .vote {
      background-color: #ffffff;
    }
    .saving-calc {
      background-color: #f7f8fa;
    }
  }
  @media (min-width: 576px) {
    nav {
      justify-content: space-between;
    }
    .mobile {
      display: none;
    }
    .logoBox {
      margin-left: 0vw;
    }
  }
  @media (min-width: 1200px) {
    .logoBox {
      margin-left: 11.726562vw;
    }
  }
`;

const routes = [
  { name: "goal", path: "/goal", title: "목표공유" },
  { name: "index", path: "/saving-calc", title: "저축계산기" },
  { name: "index", path: "/vote", title: "고민해결소" },
];

function Navbar() {
  const { sm: isMobile } = useBreakpoint();
  const { pathname, back } = useRouter();
  const [toggled, setToggled] = useState(false);
  const handleToggle = useCallback(() => setToggled((previous) => !previous), []);

  return (
    // <nav className={`${!toggled && pathname.split("/")[1]}`}>
    <nav className={styles.nav}>
      <div className="logoBox">
        <div className="mobile">
          {toggled && <Back fill="#FFFFFF" onClick={handleToggle} />}
          {!toggled && pathname !== "/" && <Back fill="#3178ff" onClick={() => back()} />}
          <Link href="/" passHref>
            <h1 className="logo">
              <MobileLogo className="mobileLogo" fill={toggled ? "#FFFFFF" : "#3178ff"} onClick={() => setToggled(false)} />
            </h1>
          </Link>
          <Bar stroke={toggled ? "#FFFFFF" : "#3178ff"} onClick={handleToggle} />
        </div>
        <div className="notMobile">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
      <div className="menuBox">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <a className={`${pathname.includes(route.path) && "active"} white`} onClick={isMobile && handleToggle}>
              {route.title}
            </a>
          </Link>
        ))}
        <Link href="https://savle.net/MBTI/index.html">
          <a className="white" target="_blank" onClick={isMobile && handleToggle}>
            저축성향 테스트
          </a>
        </Link>
      </div>
      <style jsx>{style}</style>
      <style jsx>{`
        nav {
          height: ${isMobile && toggled ? "100vh" : "52px"};
          background-color: ${isMobile && toggled && "#3178ff"};
        }
        path {
          stroke: ${isMobile && !toggled ? "#3178ff" : "#FFFFFF"};
          fill: ${isMobile && !toggled ? "#3178ff" : "#FFFFFF"};
        }
        .menuBox {
          display: ${isMobile && !toggled ? "none" : "flex"};
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
