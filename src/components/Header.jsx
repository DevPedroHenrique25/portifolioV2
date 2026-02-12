import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faX } from "@fortawesome/free-solid-svg-icons"
import "../App.css";

export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  function handleScroll(e, id) {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

   const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   const handleLinkClick = (e, section) => {
    handleScroll(e, section);
    setMenuOpen(false); // fecha ao clicar
  };

  return (
    <header data-aos="fade-down"  >
      <div className="container">
        <div className="logomarca">
          <a href="#" onClick={(e) => handleScroll(e, "home")}>
            LOGOMARCA
          </a>
        </div>

        <nav className="desktop">
          <ul>
            <li>
              <a href="#" onClick={(e) => handleScroll(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScroll(e, "sobre")}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScroll(e, "servicos")}>
                Serviços
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScroll(e, "projetos")}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScroll(e, "contato")}>
                Contato
              </a>
            </li>
          </ul>
        </nav>



        <nav className="mobile">
      
      <div className="btn-mobile" onClick={toggleMenu}>
        <FontAwesomeIcon 
          style={{ fontSize: "40px" }} 
          icon={menuOpen ? faX : faBars} 
        />
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#" onClick={(e) => handleLinkClick(e, "home")}>Home</a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleLinkClick(e, "sobre")}>Sobre</a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleLinkClick(e, "servicos")}>Serviços</a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleLinkClick(e, "projetos")}>Projetos</a>
        </li>
        <li>
          <a href="#" onClick={(e) => handleLinkClick(e, "contato")}>Contato</a>
        </li>
      </ul>

    </nav>
      </div>
    </header>
  );
}
