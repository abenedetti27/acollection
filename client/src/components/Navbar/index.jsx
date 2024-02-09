import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/1.png";
import { initMDB } from "mdb-ui-kit";

initMDB();

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    const navToggle = document.querySelector(".navbar-toggler");
    const targetID = navToggle.getAttribute("data-mdb-target");
    const target = document.querySelector(targetID);

    if (target) {
      target.classList.toggle("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-body-tertiary ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link className="logo" to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "200px" }}
            className="d-inline-block align-top"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Other navigation links */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* Other navigation links */}
            <li className="nav-item">
              <Link className="nav-link" to="/FineArtParties">
                Fine Art Parties
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Artists">
                Artists
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Galleries">
                Galleries
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>

          <Link
            to="/search"
            className="btn"
            style={{ width: "auto" }}
          >
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
