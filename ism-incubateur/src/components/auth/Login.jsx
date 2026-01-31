import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const result = await login(email, password);
            if (result.success) {
                if (result.user?.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                setError(result.error || 'Erreur de connexion');
            }
        } catch (err) {
            setError('Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };

    // Remplir automatiquement pour demo admin
    const fillAdminCredentials = () => {
        setEmail('admin@gmail.com');
        setPassword('admin123');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <Link to="/" className="auth-logo">
                        <span className="logo-icon"></span>
                        <span className="logo-text">ISM Incubateur</span>
                    </Link>
                    <h1>Bon retour parmi nous!</h1>
                    <p>Connectez-vous pour acceder a votre espace personnel</p>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Adresse email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Entrez votre mot de passe"
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

                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Se souvenir de moi</span>
                        </label>
                        <Link to="/forgot-password" className="forgot-link">
                            Mot de passe oublie?
                        </Link>
                    </div>

                    <Button type="submit" fullWidth size="large" disabled={loading}>
                        {loading ? 'Connexion...' : 'Se connecter'}
                    </Button>
                </form>

                <div className="auth-footer">
                    <p>Pas encore de compte? <Link to="/register">S'inscrire</Link></p>
                </div>

                {/* Demo credentials hint */}
                <div className="demo-hint">
                    <button
                        type="button"
                        className="demo-btn"
                        onClick={fillAdminCredentials}
                    >
                        Remplir identifiants Admin (demo)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

