import style from "@/styles/layout/Layout.module.scss";

export { LogoBox } from "./LogoBox";
export { MBTI } from "./MBTI";
export { MenuItem } from "./MenuItem";
export { Nav } from "./Nav";
export { Wrapper } from "./Wrapper";

export const ToggleStyles = (isToggled, pathname) => ({
  nav: isToggled
    ? [style.nav, style.backgroundColor_primary, style.height_open].join(" ")
    : [style.nav, style.height_close, style[pathname.split("/")[0]]].join(" "),
  backIcon: [
    isToggled ? style.fill_white : "",
    !isToggled && pathname === "" && style.hide,
  ].join(" "),
  mobileLogo: [
    style.mobileLogo,
    isToggled ? style.fill_white : style.fill_primary,
  ].join(" "),
  drawer: isToggled ? style.stroke_white : style.stroke_primary,
  menuBox: [style.menuBox, isToggled ? style.toggled : style.notToggled].join(
    " ",
  ),
  activeLink: style.active,
});
