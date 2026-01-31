import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/assets/images/iesa.webp" alt="IESA Incubateur" className="footer-logo-image" />
                        </div>
                        <p className="footer-description">
                            Accompagner les entrepreneurs innovants dans leur parcours de création d'entreprise.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Liens Rapides</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/incubator">Incubateur</Link></li>
                            <li><Link to="/programs">Programmes</Link></li>
                            <li><Link to="/projects">Projets</Link></li>
                            <li><Link to="/resources">Ressources</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Programme</h4>
                        <ul className="footer-links">
                            <li><Link to="/programs">Candidater</Link></li>
                            <li><Link to="/programs">Calendrier</Link></li>
                            <li><Link to="/resources">Ressources</Link></li>
                            <li><Link to="/mentors">Mentors</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-title">Contact</h4>
                        <ul className="footer-links">
                            <li><MapPin size={18} /> Campus ISM, Paris</li>
                            <li><Mail size={18} /> contact@ism-incubateur.fr</li>
                            <li><Phone size={18} /> +33 1 23 45 67 89</li>
                        </ul>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ISM Incubateur. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

