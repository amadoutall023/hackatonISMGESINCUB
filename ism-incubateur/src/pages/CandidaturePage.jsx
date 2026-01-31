import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import {
    FileText,
    Send,
    CheckCircle,
    ChevronRight,
    User,
    Lightbulb,
    Users,
    Calendar,
    ArrowRight
} from 'lucide-react';
import './CandidaturePage.css';

const CandidaturePage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        projectName: '',
        projectDescription: '',
        projectCategory: '',
        projectStage: '',
        teamSize: '',
        motivation: '',
        howHeard: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Votre candidature a été soumise avec succès! Nous vous contacterons bientôt.');
    };

    const steps = [
        { id: 1, title: 'Informations Personnelles', icon: User },
        { id: 2, title: 'Votre Projet', icon: Lightbulb },
        { id: 3, title: 'Équipe & Motivation', icon: Users },
        { id: 4, title: 'Validation', icon: CheckCircle }
    ];

    const categories = [
        'Technologie & Innovation',
        'Santé & Biotech',
        'Finance & Fintech',
        'Éducation & EdTech',
        'Agriculture & AgriTech',
        'Énergie & Cleantech',
        'Commerce & E-commerce',
        'Tourisme & Hôtellerie',
        'Art & Culture',
        'Autre'
    ];

    const stages = [
        'Idée (Pas encore commencé)',
        'Prototype en développement',
        'MVP (Produit minimum viable)',
        'Déjà sur le marché',
        'En phase de scaling'
    ];

    return (
        <div className="candidature-page">
            <Header />
            <section className="candidature-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <FileText size={16} />
                            Candidature 2024
                        </div>
                        <h1>Soumettez votre dossier de candidature en ligne avec votre projet</h1>
                        <p>
                            L'ISM Incubateur vous accompagne dans la réalisation de votre projet entrepreneurial.
                            Postulez dès maintenant et rejoignez notre programme d'incubation!
                        </p>
                        <button className="cta-btn" onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}>
                            Commencer ma candidature
                            <ArrowRight size={20} />
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">150+</span>
                            <span className="stat-label">Projets accompagnés</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">85%</span>
                            <span className="stat-label">Taux de survie</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2M€</span>
                            <span className="stat-label">Fonds levés</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="steps-section">
                <div className="container">
                    <h2>Comment soumettre votre candidature</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <div className="step-icon">
                                <User size={24} />
                            </div>
                            <h3>Remplissez le formulaire</h3>
                            <p>Complétez vos informations personnelles et celles de votre projet</p>
                        </div>
                        <div className="step-arrow">
                            <ChevronRight size={24} />
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <div className="step-icon">
                                <Lightbulb size={24} />
                            </div>
                            <h3>Décrivez votre projet</h3>
                            <p>Présentez votre idée, votre marché et votre équipe</p>
                        </div>
                        <div className="step-arrow">
                            <ChevronRight size={24} />
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <div className="step-icon">
                                <Users size={24} />
                            </div>
                            <h3>Partagez votre motivation</h3>
                            <p>Expliquez pourquoi vous voulez rejoindre l'ISM Incubateur</p>
                        </div>
                        <div className="step-arrow">
                            <ChevronRight size={24} />
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <div className="step-icon">
                                <Calendar size={24} />
                            </div>
                            <h3>Validation & Entretien</h3>
                            <p>Notre équipe analysera votre dossier et vous contactera</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="application-form" className="form-section">
                <div className="container">
                    <div className="form-header">
                        <h2>Formulaire de Candidature</h2>
                        <p>Remplissez tous les champs obligatoires pour soumettre votre dossier</p>
                    </div>
                    <div className="progress-steps">
                        {steps.map(step => (
                            <button
                                key={step.id}
                                className={`progress-step ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                                onClick={() => setCurrentStep(step.id)}
                            >
                                <step.icon size={20} />
                                <span>{step.title}</span>
                            </button>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="application-form">
                        {/* Step 1: Informations Personnelles */}
                        {currentStep === 1 && (
                            <div className="form-step">
                                <h3>Informations Personnelles</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Prénom *</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Votre prénom" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Nom *</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Votre nom" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Téléphone *</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+33 6 00 00 00 00" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Ville *</label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Votre ville" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Pays *</label>
                                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Votre pays" required />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Votre Projet */}
                        {currentStep === 2 && (
                            <div className="form-step">
                                <h3>Votre Projet</h3>
                                <div className="form-group">
                                    <label>Nom du projet *</label>
                                    <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Le nom de votre projet" required />
                                </div>
                                <div className="form-group">
                                    <label>Description du projet *</label>
                                    <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange} placeholder="Décrivez votre projet..." rows="5" required></textarea>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Catégorie *</label>
                                        <select name="projectCategory" value={formData.projectCategory} onChange={handleChange} required>
                                            <option value="">Sélectionnez une catégorie</option>
                                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Stade de développement *</label>
                                        <select name="projectStage" value={formData.projectStage} onChange={handleChange} required>
                                            <option value="">Sélectionnez un stade</option>
                                            {stages.map(stage => <option key={stage} value={stage}>{stage}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Équipe & Motivation */}
                        {currentStep === 3 && (
                            <div className="form-step">
                                <h3>Équipe & Motivation</h3>
                                <div className="form-group">
                                    <label>Taille de l'équipe *</label>
                                    <select name="teamSize" value={formData.teamSize} onChange={handleChange} required>
                                        <option value="">Sélectionnez la taille</option>
                                        <option value="1">1 personne (solo founder)</option>
                                        <option value="2">2 personnes</option>
                                        <option value="3">3 personnes</option>
                                        <option value="4">4 personnes</option>
                                        <option value="5+">5 personnes ou plus</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Pourquoi voulez-vous rejoindre l'ISM Incubateur ? *</label>
                                    <textarea name="motivation" value={formData.motivation} onChange={handleChange} placeholder="Expliquez votre motivation..." rows="4" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Comment avez-vous connu l'ISM Incubateur ?</label>
                                    <select name="howHeard" value={formData.howHeard} onChange={handleChange}>
                                        <option value="">Sélectionnez une option</option>
                                        <option value="google">Moteur de recherche (Google)</option>
                                        <option value="social">Réseaux sociaux</option>
                                        <option value="recommendation">Recommandation</option>
                                        <option value="event">Événement / Conférence</option>
                                        <option value="press">Presse / Média</option>
                                        <option value="other">Autre</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Validation */}
                        {currentStep === 4 && (
                            <div className="form-step validation-step">
                                <h3>Validation de votre candidature</h3>
                                <div className="validation-summary">
                                    <h4>Récapitulatif de votre candidature</h4>
                                    <div className="summary-card">
                                        <div className="summary-item">
                                            <span className="summary-label">Candidat:</span>
                                            <span className="summary-value">{formData.firstName} {formData.lastName}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Projet:</span>
                                            <span className="summary-value">{formData.projectName || 'Non renseigné'}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Catégorie:</span>
                                            <span className="summary-value">{formData.projectCategory || 'Non renseigné'}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Stade:</span>
                                            <span className="summary-value">{formData.projectStage || 'Non renseigné'}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span className="summary-label">Email:</span>
                                            <span className="summary-value">{formData.email || 'Non renseigné'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="consent-checkbox">
                                    <label>
                                        <input type="checkbox" required />
                                        <span>J'accepte que mes données personnelles soient traitées par l'ISM Incubateur. *</span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="form-navigation">
                            {currentStep > 1 && (
                                <button type="button" className="btn btn-secondary" onClick={() => setCurrentStep(prev => prev - 1)}>Précédent</button>
                            )}
                            {currentStep < 4 ? (
                                <button type="button" className="btn btn-primary" onClick={() => setCurrentStep(prev => prev + 1)}>Suivant</button>
                            ) : (
                                <button type="submit" className="btn btn-submit">
                                    <Send size={18} />
                                    Soumettre ma candidature
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CandidaturePage;

