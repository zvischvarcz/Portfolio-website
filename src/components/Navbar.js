import { Link} from "react-router-dom";
import menuIcon from "../Resorces/menu-burger-icon.svg";
import { useState } from "react";
import Modal from 'react-modal';
import myCV from "../Resorces/CV-Zvi-Schvarcz.pdf"


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

    const openCloseMenu = () => {
      if (!menuOpen) {
        setMenuOpen(true)
        openModal()
      } else {
        setMenuOpen(false)
        closeModal()
      }
    }

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
    
    return (
      <nav className="navWrap">
        <div>
          <Link className="zviLogo" to="/">ZVI</Link>
        </div>
        <img className="menuIcon" src={menuIcon} alt="menu" onClick={openCloseMenu}/>
        
        <div>
          <Link className="navBarOptionText" to="/">Home</Link>

          <Link className="navBarOptionText" to="/about">About Me</Link>

          <Link className="navBarOptionText" to="/projects">Projects</Link>

          <a rel="noreferrer" target="_blank" className="navBarOptionText" href={myCV} >My CV</a>

          <Link className="navBarOptionText contactButton" to="/contact">Contact</Link>
        </div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="menuModal"
        overlayClassName="modalOverlay"
        >
          <Link onClick={closeModal} className="menuNavBarOptionText" to="/">Home</Link>

          <Link onClick={closeModal} className="menuNavBarOptionText" to="/about">About Me</Link>

          <Link onClick={closeModal} className="menuNavBarOptionText" to="/projects">Projects</Link>

          <a rel="noreferrer" onClick={closeModal} target="_blank" className="menuNavBarOptionText" href={myCV} >My CV</a>

          <Link onClick={closeModal} className="menuNavBarOptionText" to="/contact">Contact</Link>
        </Modal>
      </nav>
    );
  }
  
  export default Navbar;