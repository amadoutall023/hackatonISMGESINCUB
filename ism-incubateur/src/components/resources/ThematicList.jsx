import React from 'react';
import { TrendingUp, DollarSign, Code, Scale, Users, Rocket, ArrowRight } from 'lucide-react';
import './ThematicList.css';

const ThematicList = () => {
    const themes = [
        {
            name: 'Marketing & Vente',
            icon: TrendingUp,
            count: 24,
            color: '#4cc9f0'
        },
        {
            name: 'Finance & Comptabilite',
            icon: DollarSign,
            count: 18,
            color: '#f72585'
        },
        {
            name: 'Technique & Tech',
            icon: Code,
            count: 32,
            color: '#7209b7'
        },
        {
            name: 'Juridique & Fiscal',
            icon: Scale,
            count: 15,
            color: '#4361ee'
        },
        {
            name: 'Ressources Humaines',
            icon: Users,
            count: 12,
            color: '#4cc9f0'
        },
        {
            name: 'Strategy & Growth',
            icon: Rocket,
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
                            <div className="theme-icon">
                                <theme.icon size={40} />
                            </div>
                            <h3 className="theme-name">{theme.name}</h3>
                            <p className="theme-count">{theme.count} ressources</p>
                            <button className="theme-btn">
                                Explorer <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThematicList;

