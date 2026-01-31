import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('Inscription reussie!');
        }, 1500);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <Link to="/" className="auth-logo">
                        <span className="logo-icon"></span>
                        <span className="logo-text">ISM Incubateur</span>
                    </Link>
                    <h1>Creer un compte</h1>
                    <p>Rejoignez l'ISM Incubateur et demarrez votre projet</p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="name-row">
                        <div className="form-group">
                            <label htmlFor="firstName">Prenom</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Jean"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Nom</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Dupont"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Adresse email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="votre@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="8+ caracteres"
                                minLength="8"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Repetez votre mot de passe"
                            required
                        />
                    </div>

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                required
                            />
                            <span>J'accepte les <a href="#">conditions d'utilisation</a></span>
                        </label>
                    </div>

                    <Button type="submit" fullWidth size="large" disabled={loading}>
                        {loading ? 'Inscription...' : 'Creer mon compte'}
                    </Button>
                </form>

                <div className="auth-footer">
                    <p>Deja un compte? <Link to="/login">Se connecter</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;

