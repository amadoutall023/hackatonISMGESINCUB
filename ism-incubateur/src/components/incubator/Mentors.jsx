import React from 'react';
import Card from '../common/Card';
import './Mentors.css';

const Mentors = () => {
    const mentors = [
        {
            name: 'Marie Dupont',
            role: 'CEO & Fondatrice',
            company: 'TechStart',
            image: 'https://dummyimage.com/400x400/4F46E5/ffffff&text=MD',
            specialty: 'Strategy & Growth'
        },
        {
            name: 'Jean Martin',
            role: 'CTO',
            company: 'InnovTech',
            image: 'https://dummyimage.com/400x400/059669/ffffff&text=JM',
            specialty: 'Technical Architecture'
        },
        {
            name: 'Sophie Bernard',
            role: 'Investisseur Senior',
            company: 'Capital Partners',
            image: 'https://dummyimage.com/400x400/7C3AED/ffffff&text=SB',
            specialty: 'Fundraising'
        },
        {
            name: 'Pierre Durand',
            role: 'Serial Entrepreneur',
            company: 'Multiple exits',
            image: 'https://dummyimage.com/400x400/EA580C/ffffff&text=PD',
            specialty: 'Business Development'
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
                                            e.target.parentElement.innerHTML = '<span class="mentor-fallback">' + mentor.name.split(' ').map(n => n[0]).join('') + '</span>';
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

