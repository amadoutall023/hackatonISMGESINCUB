import React from 'react';
import Card from '../common/Card';
import './Mission.css';

const Mission = () => {
    const missions = [
        {
            image: '/assets/images/Accompagnement.jpg',
            title: 'Accompagnement Personnalise',
            description: 'Un mentorat adapte a chaque etape de votre projet pour maximiser vos chances de succes.'
        },
        {
            image: '/assets/images/Reseau .jpg',
            title: 'Reseau Professionnel',
            description: 'Accedez a notre reseau d\'investisseurs, partenaires et alumni pour accelerer votre croissance.'
        },
        {
            image: '/assets/images/Formation.jpg',
            title: 'Formation Continue',
            description: 'Des workshops et formations regulieres pour developper vos competences entrepreneuriales.'
        },
        {
            image: '/assets/images/Espaces.jpg',
            title: 'Espaces de Travail',
            description: 'Bureaux equipes et espaces de coworking pour vous concentrer sur votre developpement.'
        },
        {
            image: '/assets/images/Financement.jpg',
            title: 'Financement',
            description: 'Des opportunites de financement et de levee de fonds avec nos partenaires investisseurs.'
        },
        {
            image: '/assets/images/acceleration.jpg',
            title: 'Acceleration',
            description: 'Un programme structure pour transformer votre idee en entreprise viable et perenne.'
        }
    ];

    return (
        <section className="mission">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Notre Mission</h2>
                    <p className="section-subtitle">
                        L'ISM Incubateur s'engage a accompagner les entrepreneurs dans leur parcours de creation d'entreprise
                    </p>
                </div>
                <div className="mission-grid">
                    {missions.map((mission, index) => (
                        <Card key={index} variant="elevated" hoverable padding="none">
                            <div className="mission-card">
                                <div className="mission-image">
                                    <img src={mission.image} alt={mission.title} />
                                </div>
                                <div className="mission-content">
                                    <h3 className="mission-title">{mission.title}</h3>
                                    <p className="mission-description">{mission.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;

