import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getTheme } from "../../utils/utils";
import { ContainerWidths, THEMES } from "../../shared/enums";

const CenteredNavbar = ({ container = ContainerWidths.DEFAULT, openSearch, scrolled, theme = THEMES.LIGHT, changeTheme }: any) => {
    return (
        <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? classes.hideNav : " ", theme === THEMES.DARK ? classes.dark : null, "py-10")}>
            <div className={combineClasses(classes.navbar__container, container, "px-15")}>
                <div className={classes.search_icon_wrapper} onClick={() => openSearch()}>
                    <button>
                        <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
                    </button>
                    <p className="m-0 font-14 pl-10 display-sm-none">
                        Search ...
                    </p>
                </div>
                
                <Link href="/">
                    <a className={combineClasses(classes.logo, 'd-mob-none')}></a>
                </Link>

                <div className="d-flex align-center">
                    <button className={combineClasses(classes.theme_switch, "pl-10 pr-0")} onClick={changeTheme}>
                        <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default CenteredNavbar;
