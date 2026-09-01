import { FaBars } from "react-icons/fa";
import CustomLink from "../CustomLink";
import "../Styles/style.css";

function NavBarNew() {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="bx bx-menu">
            <FaBars />
          </i>
        </label>
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/resume">resume</CustomLink>
          <CustomLink to="/contact">contact</CustomLink>
        </ul>
      </nav>
    </>
  );
}

export default NavBarNew;
