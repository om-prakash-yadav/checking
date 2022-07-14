import React from "react";
import s from "./header-burger.module.scss";

const HeaderBurger = ({ toggleNav, isMenuOpen , home }) => {
  const openClass = isMenuOpen ? s.open : "";
  let homeNav = home ? s.burger__home__line : s.burger__line;
  return (
    <div className={`${s.burger} ${openClass}`} onClick={() => toggleNav()}>
      <span className={homeNav} />
      <span className={homeNav} />
      <span className={homeNav} />
    </div>
  );
};

export default HeaderBurger;
