import React from 'react';
import Card from '../common/Card';
import './Mentors.css';

const Mentors = () => {
    const mentors = [
        {
            name: 'Marie Dupont',
            role: 'CEO & Fondatrice',
            company: 'TechStart',
            image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            specialty: 'Strategy & Growth'
        },
        {
            name: 'Jean Martin',
            role: 'CTO',
            company: 'InnovTech',
            image: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            specialty: 'Technical Architecture'
        },
        {
            name: 'Sophie Bernard',
            role: 'Directrice Marketing',
            company: 'MarketGenius',
            image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            specialty: 'Digital Marketing'
        },
        {
            name: 'Lucas Moreau',
            role: 'CFO',
            company: 'FinancePro',
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
            specialty: 'Financial Planning'
        }
    ];

    return (
        <section className="mentors">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Mentors</h2>
                    <p className="section-subtitle">
                        Une equipe d'experts reconnus pour vous accompagner dans votre projet
                    </p>
                </div>
                <div className="mentors-grid">
                    {mentors.map((mentor, index) => (
                        <Card key={index} variant="elevated" padding="large">
                            <div className="mentor-card">
                                <div className="mentor-avatar">
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const parent = e.target.parentElement;
                                            if (parent && !parent.querySelector('.mentor-fallback')) {
                                                const span = document.createElement('span');
                                                span.className = 'mentor-fallback';
                                                span.textContent = mentor.name.split(' ').map(n => n[0]).join('');
                                                parent.appendChild(span);
                                            }
                                        }}
                                    />
                                </div>
                                <h3 className="mentor-name">{mentor.name}</h3>
                                <p className="mentor-role">{mentor.role}</p>
                                <p className="mentor-company">{mentor.company}</p>
                                <div className="mentor-specialty">
                                    <span className="specialty-label">Specialite:</span>
                                    <span className="specialty-value">{mentor.specialty}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mentors;

