import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Card from '../components/common/Card';
import { Leaf, Heart, CreditCard, Wheat, Book, Bike } from 'lucide-react';
import '../styles/global.css';
import '../styles/variables.css';
import './ProjectsPage.css';

const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState('Tous');

    const projects = [
        {
            id: 1,
            name: 'EcoTech Solutions',
            description: 'Solution innovative pour le recyclage des dechets electroniques',
            sector: 'GreenTech',
            status: 'En cours',
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop',
            color: '#22c55e'
        },
        {
            id: 2,
            name: 'HealthAI',
            description: 'Intelligence artificielle pour le diagnostic medical',
            sector: 'HealthTech',
            status: 'Accelere',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
            color: '#ef4444'
        },
        {
            id: 3,
            name: 'FinFlow',
            description: 'Application de gestion de finances personnelles',
            sector: 'FinTech',
            status: 'Prets pour serie A',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
            color: '#3b82f6'
        },
        {
            id: 4,
            name: 'AgriSmart',
            description: 'IoT pour l\'agriculture de precision',
            sector: 'AgriTech',
            status: 'En cours',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
            color: '#f59e0b'
        },
        {
            id: 5,
            name: 'EduLearn',
            description: 'Plateforme d\'apprentissage personnalise par IA',
            sector: 'EdTech',
            status: 'Lancer',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
            color: '#8b5cf6'
        },
        {
            id: 6,
            name: 'CityMobility',
            description: 'Solution de mobilite urbaine durable',
            sector: 'Mobility',
            status: 'Accelere',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
            color: '#06b6d4'
        }
    ];

    const filters = ['Tous', 'GreenTech', 'HealthTech', 'FinTech', 'EdTech'];

    const filteredProjects = activeFilter === 'Tous'
        ? projects
        : projects.filter(project => project.sector === activeFilter);

    return (
        <div className="projects-page">
            <Header />
            <main>
                <section className="projects-hero">
                    <div className="container">
                        <h1>Nos Projets</h1>
                        <p>Decouvrez les startups accompagnees par l'ISM Incubateur</p>
                    </div>
                </section>
                <section className="projects-content">
                    <div className="container">
                        <div className="projects-filter">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="projects-grid">
                            {filteredProjects.map(project => (
                                <Card key={project.id} variant="elevated" hoverable padding="none">
                                    <div className="project-card">
                                        <div className="project-image">
                                            <img src={project.image} alt={project.name} />
                                        </div>
                                        <div className="project-body">
                                            <span className="project-sector">{project.sector}</span>
                                            <h3 className="project-name">{project.name}</h3>
                                            <p className="project-description">{project.description}</p>
                                            <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectsPage;

