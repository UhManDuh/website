import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NAV_ITEMS } from "../../constants";
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <FaBars />
      </button>
      <ul className={open ? "is-open" : undefined}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
