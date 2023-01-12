import "./Header.css";
import logo from "../../images/logo.svg";
import menu_icon from "../../images/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />

      <img src={menu_icon} alt="Menu Icon" className="header__menu_btn" />

      {/* TODO - Create dropdown menu */}
      <nav className="header__nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        {/* TODO - Convert to Button */}
        Request Invite
      </nav>
    </header>
  );
};

export default Header;
