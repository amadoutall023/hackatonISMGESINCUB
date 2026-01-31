import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import '../styles/global.css';
import '../styles/variables.css';
import './ResourceDetailPage.css';

const ResourceDetailPage = () => {
    const { id } = useParams();

    const resource = {
        id: id,
        title: 'Guide du parfait business plan',
        description: 'Apprenez a rediger un business plan convaincant pour investor et partenaires.',
        type: 'PDF',
        size: '2.4 MB',
        pages: 32,
        publishedDate: '15 Janvier 2024',
        author: 'ISM Incubateur',
        downloads: 1250,
        content: [
            'Introduction au business plan',
            'Analyse de marche',
            'Modele financier',
            'Strategie marketing',
            'Equipe et organisation',
            'Analyse des risques'
        ]
    };

    return (
        <div className="resource-detail-page">
            <Header />
            <main>
                <section className="resource-detail-hero">
                    <div className="container">
                        <Link to="/resources" className="back-link">← Retour aux ressources</Link>
                        <div className="resource-detail-content">
                            <div className="resource-info">
                                <span className="resource-type-badge">{resource.type}</span>
                                <h1>{resource.title}</h1>
                                <p className="resource-description">{resource.description}</p>
                                <div className="resource-meta">
                                    <span>📄 {resource.pages} pages</span>
                                    <span>📦 {resource.size}</span>
                                    <span>📅 {resource.publishedDate}</span>
                                    <span>📥 {resource.downloads} telechargements</span>
                                </div>
                            </div>
                            <div className="resource-actions">
                                <button className="btn btn-primary btn-large">Telecharger</button>
                                <button className="btn btn-outline btn-large">Ajouter aux favoris</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="resource-detail-body">
                    <div className="container">
                        <div className="detail-grid">
                            <div className="detail-main">
                                <h2>Contenu du guide</h2>
                                <ul className="content-list">
                                    {resource.content.map((item, index) => (
                                        <li key={index}>
                                            <span className="check-icon">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="detail-sidebar">
                                <div className="sidebar-card">
                                    <h3>Autres ressources populaires</h3>
                                    <ul className="related-list">
                                        <li>
                                            <a href="#">Modele de pitch deck</a>
                                            <span className="related-type">PPTX</span>
                                        </li>
                                        <li>
                                            <a href="#">Les bases du marketing digital</a>
                                            <span className="related-type">Video</span>
                                        </li>
                                        <li>
                                            <a href="#">Modele de canvas lean startup</a>
                                            <span className="related-type">PDF</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ResourceDetailPage;

