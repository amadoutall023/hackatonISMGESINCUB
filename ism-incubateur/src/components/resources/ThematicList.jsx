import React from 'react';
import './ThematicList.css';

const ThematicList = () => {
    const themes = [
        {
            name: 'Marketing & Vente',
            icon: '📈',
            count: 24,
            color: '#4cc9f0'
        },
        {
            name: 'Finance & Comptabilite',
            icon: '💰',
            count: 18,
            color: '#f72585'
        },
        {
            name: 'Technique & Tech',
            icon: '💻',
            count: 32,
            color: '#7209b7'
        },
        {
            name: 'Juridique & Fiscal',
            icon: '⚖️',
            count: 15,
            color: '#4361ee'
        },
        {
            name: 'Ressources Humaines',
            icon: '👥',
            count: 12,
            color: '#4cc9f0'
        },
        {
            name: 'Strategy & Growth',
            icon: '🚀',
            count: 28,
            color: '#f72585'
        }
    ];

    return (
        <section className="thematic-list">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Explorer par Theme</h2>
                    <p className="section-subtitle">
                        Decouvrez nos ressources organisees par theme pour trouver ce dont vous avez besoin
                    </p>
                </div>
                <div className="themes-grid">
                    {themes.map((theme, index) => (
                        <div key={index} className="theme-card" style={{ '--theme-color': theme.color }}>
                            <div className="theme-icon">{theme.icon}</div>
                            <h3 className="theme-name">{theme.name}</h3>
                            <p className="theme-count">{theme.count} ressources</p>
                            <button className="theme-btn">Explorer →</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThematicList;

