import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import About from '../components/incubator/About';
import Mentors from '../components/incubator/Mentors';
import Partners from '../components/incubator/Partners';
import './IncubatorPage.css';

const IncubatorPage = () => {
    return (
        <div className="incubator-page">
            <Header />

            {/* Hero Section */}
            <section className="incubator-hero">
                <div className="hero-content-wrapper">
                    <h1 className="incubator-hero-title">
                        ISM <span>Incubateur</span>
                    </h1>
                    <p className="incubator-hero-description">
                        Accompagner les entrepreneurs dans leur projet de création d'entreprise
                        depuis 2018. Innovation, collaboration et excellence au service de votre succès.
                    </p>
                    <div className="incubator-hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-value">150+</span>
                            <span className="hero-stat-label">Startups lancées</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">50+</span>
                            <span className="hero-stat-label">Mentors experts</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">6+</span>
                            <span className="hero-stat-label">Années d'expérience</span>
                        </div>
                    </div>
                </div>
            </section>

            <main>
                <About />
                <Mentors />
                <Partners />
            </main>

            <Footer />
        </div>
    );
};

export default IncubatorPage;

