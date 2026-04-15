import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <span>Find a Location</span>
        <span>Change Language</span>
        <span onClick={() => setModalOpen(true)} className="login-link">Login / Register</span>
      </div>
      <div className="header-main">
        <Link to="/" className="logo">
          VALVE<span>MENTOR</span>
        </Link>
        
        <nav className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/engineering">Engineering Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
        </nav>
      </div>

      {isModalOpen && <LoginModal onClose={() => setModalOpen(false)} />}
    </header>
  );
}