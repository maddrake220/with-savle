import { useRouter } from "next/router";
import Back from "public/layout/back.svg";
import Bar from "public/layout/bar.svg";
import Logo from "public/layout/logo.svg";
import MobileLogo from "public/layout/logo-mobile.svg";

import { useBreakpoint, useToggleHook } from "@/hooks/index";
import {
  logo,
  logoBox,
  mobile,
  notMobile,
} from "@/styles/layout/Layout.module.scss";
import { routes } from "@/utils/index";

import { LogoBox, MBTI, MenuItem, Nav, ToggleStyles, Wrapper } from "./nav";

function Navbar() {
  const { sm: isMobile } = useBreakpoint();
  const { pathname, back } = useRouter();
  const { toggled, setToggled, handleToggle } = useToggleHook();

  const { nav, backIcon, mobileLogo, drawer, menuBox, activeLink } =
    ToggleStyles(toggled, pathname.replace("/", ""));

  const mobileToggle = isMobile && handleToggle;

  return (
    <Nav className={nav}>
      <Wrapper className={logoBox}>
        <Wrapper className={mobile}>
          <Back className={backIcon} onClick={toggled ? handleToggle : back} />
          <LogoBox className={logo}>
            <MobileLogo
              className={mobileLogo}
              onClick={() => setToggled(false)}
            />
          </LogoBox>
          <Bar className={drawer} onClick={handleToggle} />
        </Wrapper>
        <Wrapper className={notMobile}>
          <LogoBox>
            <Logo />
          </LogoBox>
        </Wrapper>
      </Wrapper>
      <Wrapper className={menuBox}>
        {routes.map((route) => (
          <MenuItem
            key={route.path}
            route={route}
            event={mobileToggle}
            className={pathname.includes(route.path) ? activeLink : ""}
          />
        ))}
        <MBTI event={mobileToggle} />
      </Wrapper>
    </Nav>
  );
}

export default Navbar;
