import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img
                        src="/assets/images/iesa.webp"
                        alt="IESA Incubateur"
                        className="logo-image"
                    />
                </Link>

                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/incubator" className="nav-link">Incubateur</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/programs" className="nav-link">Programmes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Projets</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resources" className="nav-link">Ressources</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/candidature" className="nav-link nav-link-highlight">Candidature</Link>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <Link to="/login" className="btn btn-secondary">Connexion</Link>
                    <Link to="/register" className="btn btn-primary">Inscription</Link>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

