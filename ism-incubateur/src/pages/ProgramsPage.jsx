import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Journey from '../components/programs/Journey';
import StepsFlow from '../components/programs/StepsFlow';
import CTASection from '../components/home/CTASection';
import './ProgramsPage.css';

const ProgramsPage = () => {
    return (
        <div className="programs-page">
            <Header />

            {/* Hero Section */}
            <section className="programs-hero">
                <div className="programs-hero-content">
                    <h1 className="programs-hero-title">
                        Nos <span>Programmes</span>
                    </h1>
                    <p className="programs-hero-description">
                        Un programme d'accompagnement structuré en 4 phases pour transformer
                        votre vision en entreprise performante. De l'idéation à l'accélération,
                        nous sommes à vos côtés.
                    </p>
                    <div className="programs-hero-features">
                        <div className="hero-feature">
                            <span className="hero-feature-icon">🎯</span>
                            <span className="hero-feature-text">Programme 12 mois</span>
                        </div>
                        <div className="hero-feature">
                            <span className="hero-feature-icon">👥</span>
                            <span className="hero-feature-text">50+ Mentors</span>
                        </div>
                        <div className="hero-feature">
                            <span className="hero-feature-icon">💰</span>
                            <span className="hero-feature-text">Financement possible</span>
                        </div>
                    </div>
                </div>
            </section>

            <main>
                <Journey />
                <StepsFlow />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};

export default ProgramsPage;

