import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css"; // Create this file for custom styles

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      {["About", "Portfolio", "Resume", "Contact"].map((page) => (
        <li className="nav-item" key={page}>
          <Link
            to={page === "About" ? "/" : `/${page}`}
            className={`nav-link ${
              currentPage === (page === "About" ? "/" : `/${page}`)
                ? "active"
                : ""
            }`}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
