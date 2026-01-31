import React from 'react';
import Card from '../common/Card';
import './Journey.css';

const Journey = () => {
    const journeySteps = [
        {
            phase: 'Phase 1',
            title: 'Ideation & Validation',
            duration: 'Mois 1-2',
            description: 'Validez votre idee de projet et developpez votre business model',
            milestones: [
                'Business Model Canvas',
                'Etude de marche',
                'Prototypage',
                'Premiers tests utilisateurs'
            ]
        },
        {
            phase: 'Phase 2',
            title: 'Construction & MVP',
            duration: 'Mois 3-5',
            description: 'Developpez votre produit minimum viable et preparez le lancement',
            milestones: [
                'Developpement MVP',
                'Tests techniques',
                'Preuve de concept',
                'Preparation lancement'
            ]
        },
        {
            phase: 'Phase 3',
            title: 'Lancement & Traction',
            duration: 'Mois 6-8',
            description: 'Lancez votre produit et atteignez vos premiers utilisateurs',
            milestones: [
                'Lancement public',
                'Acquisition clients',
                'Premieres ventes',
                'Iteration produit'
            ]
        },
        {
            phase: 'Phase 4',
            title: 'Acceleration & Scale',
            duration: 'Mois 9-12',
            description: 'Accelerez votre croissance et preparez la levee de fonds',
            milestones: [
                'Optimisation operations',
                'Preparation fundraising',
                'Partenariats strategiques',
                'Expansion marche'
            ]
        }
    ];

    return (
        <section className="journey">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Votre Parcours</h2>
                    <p className="section-subtitle">
                        Un programme structure en 4 phases pour transformer votre vision en entreprise performante
                    </p>
                </div>
                <div className="journey-timeline">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="journey-step">
                            <div className="step-connector">
                                <div className="step-number">{index + 1}</div>
                                {index < journeySteps.length - 1 && <div className="step-line"></div>}
                            </div>
                            <Card variant="elevated" padding="large" hoverable>
                                <div className="step-content">
                                    <div className="step-header">
                                        <span className="step-phase">{step.phase}</span>
                                        <span className="step-duration">{step.duration}</span>
                                    </div>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                    <ul className="step-milestones">
                                        {step.milestones.map((milestone, idx) => (
                                            <li key={idx} className="milestone">
                                                <span className="milestone-check">✓</span>
                                                {milestone}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;

