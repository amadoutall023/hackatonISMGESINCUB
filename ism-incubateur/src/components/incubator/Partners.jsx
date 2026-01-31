import React from 'react';
import Card from '../common/Card';
import './Partners.css';

const Partners = () => {
    const partners = [
        {
            name: 'Google',
            logo: 'https://dummyimage.com/200x80/4285F4/ffffff&text=Google',
            type: 'Technology Partner'
        },
        {
            name: 'Microsoft',
            logo: 'https://dummyimage.com/200x80/00A4EF/ffffff&text=Microsoft',
            type: 'Technology Partner'
        },
        {
            name: 'BNP Paribas',
            logo: 'https://dummyimage.com/200x80/FF6600/ffffff&text=BNP+Paribas',
            type: 'Bank Partner'
        },
        {
            name: 'BPI France',
            logo: 'https://dummyimage.com/200x80/FF0000/ffffff&text=BPI+France',
            type: 'Public Partner'
        },
        {
            name: 'AWS',
            logo: 'https://dummyimage.com/200x80/FF9900/ffffff&text=AWS',
            type: 'Cloud Partner'
        },
        {
            name: 'Orange',
            logo: 'https://dummyimage.com/200x80/FF7900/ffffff&text=Orange',
            type: 'Telecom Partner'
        }
    ];

    return (
        <section className="partners">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nos Partenaires</h2>
                    <p className="section-subtitle">
                        Un reseau solide de partenaires pour soutenir les startups
                    </p>
                </div>
                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <Card key={index} variant="outlined" padding="large">
                            <div className="partner-card">
                                <div className="partner-logo">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<span class="partner-fallback">' + partner.name.charAt(0) + '</span>';
                                        }}
                                    />
                                </div>
                                <h3 className="partner-name">{partner.name}</h3>
                                <p className="partner-type">{partner.type}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;

