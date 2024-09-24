import {Link} from "react-router-dom";
import "./Header.scss";
import menuburger from "../../assets/Icons/menu-burger.svg";
import stethescope from "../../assets/Icons/stethescope.png";
import seachIcon from "../../assets/Icons/search.png";

export function Header() {
  return (
    <header className="header">
      <section className="header__content">
        <Link to="/">
            <img
              src={stethescope}
              className="header__stethescope"
              alt="stethescope"
            />
        </Link>
        <Link to="/">
            <h1 className="header__title">Patient First</h1>
        </Link>
        <div className="header__search-div">
          <input className="header__search" type="text" />
          <Link to="/search">
              <img
                src={seachIcon}
                className="header__search-icon"
                alt="search-icon"
              />
          </Link>
        </div>
        <img
          src={menuburger}
          className="header__menu-burger"
          alt="menu-burger"
        />
      </section>
    </header>
  );
}
