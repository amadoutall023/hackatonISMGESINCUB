import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ResourcesHub from '../components/resources/ResourcesHub';
import ThematicList from '../components/resources/ThematicList';
import CTASection from '../components/home/CTASection';
import './ResourcesPage.css';

const ResourcesPage = () => {
    return (
        <div className="resources-page">
            <Header />

            {/* Hero Section */}
            <section className="resources-hero">
                <div className="resources-hero-content">
                    <h1 className="resources-hero-title">
                        Nos <span>Ressources</span>
                    </h1>
                    <p className="resources-hero-description">
                        Accédez à nos guides, modèles et contenus exclusifs pour accompagner
                        votre projet entrepreneurial du début à la réussite.
                    </p>
                    <div className="resources-hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-value">150+</span>
                            <span className="hero-stat-label">Ressources</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">6</span>
                            <span className="hero-stat-label">Thèmes</span>
                        </div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">Gratuit</span>
                            <span className="hero-stat-label">Accès illimité</span>
                        </div>
                    </div>
                </div>
            </section>

            <main>
                <ResourcesHub />
                <ThematicList />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
};

export default ResourcesPage;

