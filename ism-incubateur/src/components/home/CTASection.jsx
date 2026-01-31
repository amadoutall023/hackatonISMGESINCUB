import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './CTASection.css';

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Pret a Transformer Votre Idee en Realite?</h2>
                    <p className="cta-description">
                        Rejoignez l'ISM Incubateur et beneficiez d'un accompagnement personnalise pour lancer votre entreprise.
                        Les inscriptions pour notre prochain programme sont ouvertes!
                    </p>
                    <div className="cta-actions">
                        <Link to="/candidature">
                            <Button size="large" fullWidth>Postuler Maintenant</Button>
                        </Link>
                        <Link to="/incubator">
                            <Button variant="outline" size="large" fullWidth>En Savoir Plus</Button>
                        </Link>
                    </div>
                    <div className="cta-features">
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>Programme gratuit</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>Mentorat personnalise</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>reseau d'investisseurs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;

