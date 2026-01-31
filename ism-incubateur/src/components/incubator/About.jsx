import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="about-title">A Propos de l'ISM Incubateur</h2>
                        <p className="about-description">
                            L'ISM Incubateur est un programme d'accompagnement cree pour soutenir les entrepreneurs
                            dans leur projet de creation d'entreprise. Depuis notre lancement, nous avons aide plus
                            de 150 startups a voir le jour et a se developper avec succes.
                        </p>
                        <p className="about-description">
                            Notre approche est fondee sur trois piliers : l'innovation, la collaboration et l'excellence.
                            Nous croyons que chaque idee a le potentiel de transformer le monde, et notre mission
                            est de fournir les outils et le soutien necessaires pour realiser ce potentiel.
                        </p>
                        <div className="about-stats">
                            <div className="about-stat">
                                <span className="stat-value">2018</span>
                                <span className="stat-label">Annee de creation</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-value">150+</span>
                                <span className="stat-label">Startups lancees</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-value">50+</span>
                                <span className="stat-label">Mentors experts</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual">
                        <div className="about-image-wrapper">
                            <div className="about-shape"></div>
                            <div className="about-card">
                                <h3>Notre Vision</h3>
                                <p>Devenir le principal incubateur d'Europe pour les startups technologiques innovantes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

