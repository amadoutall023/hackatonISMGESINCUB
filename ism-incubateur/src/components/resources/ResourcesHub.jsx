import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import './ResourcesHub.css';

const ResourcesHub = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'Tout' },
        { id: 'guides', label: 'Guides' },
        { id: 'templates', label: 'Modeles' },
        { id: 'videos', label: 'Videos' },
        { id: 'webinars', label: 'Webinars' }
    ];

    const resources = [
        {
            id: 1,
            title: 'Guide du parfait business plan',
            description: 'Apprenez a rediger un business plan convaincant pour investor et partenaires.',
            category: 'guides',
            type: 'PDF',
            downloads: 1250
        },
        {
            id: 2,
            title: 'Modele de pitch deck',
            description: 'Un template professionnel pour presenter votre projet lors des reunions.',
            category: 'templates',
            type: 'PPTX',
            downloads: 890
        },
        {
            id: 3,
            title: 'Les bases du marketing digital',
            description: 'Video formation sur les strategies de marketing pour startups.',
            category: 'videos',
            type: 'Video',
            duration: '45 min',
            downloads: 2100
        },
        {
            id: 4,
            title: 'Webinar: Trouver vos premiers clients',
            description: 'Replay de notre webinar avec des experts sur l acquisition client.',
            category: 'webinars',
            type: 'Video',
            duration: '1h 30min',
            downloads: 560
        },
        {
            id: 5,
            title: 'Modele de canvas lean startup',
            description: 'Outil simple pour valider votre idee et iterer rapidement.',
            category: 'templates',
            type: 'PDF',
            downloads: 1670
        },
        {
            id: 6,
            title: 'Guide des statuts juridiques',
            description: 'Comparez les differentes formes juridiques pour votre entreprise.',
            category: 'guides',
            type: 'PDF',
            downloads: 980
        }
    ];

    const filteredResources = activeCategory === 'all'
        ? resources
        : resources.filter(r => r.category === activeCategory);

    return (
        <section className="resources-hub">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Ressources</h2>
                    <p className="section-subtitle">
                        Accedez a nos guides, modeles et contenus exclusifs pour votre projet
                    </p>
                </div>
                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                <div className="resources-grid">
                    {filteredResources.map(resource => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResourcesHub;

