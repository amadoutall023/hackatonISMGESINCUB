import React from 'react';
import { Link } from 'react-router-dom';
import './StepsFlow.css';

const StepsFlow = () => {
    const steps = [
        {
            step: 1,
            title: 'Candidature',
            description: 'Soumettez votre dossier de candidature en ligne avec votre projet',
            icon: '📝'
        },
        {
            step: 2,
            title: 'Evaluation',
            description: 'Analyse de votre projet par notre comite de selection',
            icon: '🔍'
        },
        {
            step: 3,
            title: 'Entretien',
            description: 'Presentation de votre projet devant notre jury d\'experts',
            icon: '🎤'
        },
        {
            step: 4,
            title: 'Selection',
            description: 'Notification des resultats et debut de votre parcours',
            icon: '🎉'
        }
    ];

    return (
        <section className="steps-flow">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Comment Postuler</h2>
                    <p className="section-subtitle">
                        Un processus de selection en 4 etapes pour rejoindre notre programme
                    </p>
                </div>
                <div className="steps-container">
                    {steps.map((item, index) => (
                        <div key={index} className="step-item">
                            <div className="step-icon-wrapper">
                                <span className="step-icon">{item.icon}</span>
                                <div className="step-number">{item.step}</div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{item.title}</h3>
                                <p className="step-description">{item.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-arrow">→</div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="cta-container">
                    <Link to="/candidature">
                        <button className="btn btn-primary btn-large">Commencer ma Candidature</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StepsFlow;

