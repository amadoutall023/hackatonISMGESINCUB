import React from 'react';
import Card from '../common/Card';
import './Partners.css';

const Partners = () => {
    const partners = [
        {
            name: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
            type: 'Technology Partner'
        },
        {
            name: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
            type: 'Technology Partner'
        },
        {
            name: 'BNP Paribas',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/BNP_Paribas_logo.svg',
            type: 'Bank Partner'
        },
        {
            name: 'BPI France',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bpifrance_%282022%29.svg',
            type: 'Public Partner'
        },
        {
            name: 'AWS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
            type: 'Cloud Partner'
        },
        {
            name: 'Orange',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Orange_logo.svg',
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

