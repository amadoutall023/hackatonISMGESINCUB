import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img
                    src="/assets/images/ism.jpg"
                    alt="ISM Incubateur Background"
                    className="hero-bg-image"
                />
                <div className="hero-overlay"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Transformez Votre Idée en
                        <span className="highlight"> Entreprise Innovante</span>
                    </h1>
                    <p className="hero-description">
                        L'ISM Incubateur accompagne les entrepreneurs ambitieux dans leur parcours de création.
                        Rejoignez notre communauté d'innovateurs et donnez vie à vos projets.
                    </p>
                    <div className="hero-actions">
                        <Link to="/candidature">
                            <Button size="large">Postuler Maintenant</Button>
                        </Link>
                        <Link to="/programs">
                            <Button variant="outline" size="large" className="btn-white">Découvrir les Programmes</Button>
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">150+</span>
                            <span className="stat-label stat-label-white">Startups Accompagnées</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">85%</span>
                            <span className="stat-label stat-label-white">Taux de Survie</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50M€</span>
                            <span className="stat-label stat-label-white">Levées de Fonds</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <div className="hero-shape shape-1"></div>
                        <div className="hero-shape shape-2"></div>
                        <div className="hero-shape shape-3"></div>
                        <div className="hero-content-card">
                            <span className="card-icon"></span>
                            <span className="card-text">Innovation</span>
                        </div>
                        <div className="hero-content-card card-2">
                            <span className="card-icon">💡</span>
                            <span className="card-text">Ideas</span>
                        </div>
                        <div className="hero-content-card card-3">
                            <span className="card-icon">🌟</span>
                            <span className="card-text">Growth</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

