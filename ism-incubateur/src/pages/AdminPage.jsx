import React, { useState } from 'react';
import {
    LayoutDashboard,
    Rocket,
    Users,
    Book,
    User,
    Settings,
    TrendingUp,
    Briefcase,
    GraduationCap,
    Download,
    Edit,
    Trash2,
    Plus,
    Search,
    Filter,
    MoreHorizontal,
    CheckCircle,
    XCircle,
    X,
    Calendar,
    FolderKanban,
    Target,
    Eye,
    Leaf,
    Heart,
    Banknote,
    Wheat,
    BookOpen,
    Zap,
    Building2,
    Sprout,
    FlaskConical,
    Palette,
    Truck,
    Cpu,
    LogOut
} from 'lucide-react';
import '../styles/global.css';
import '../styles/variables.css';
import './AdminPage.css';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [formData, setFormData] = useState({});
    const [viewMode, setViewMode] = useState('grid');

    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Sample data
    const stats = {
        totalProjects: 156,
        activeStartups: 42,
        totalMentors: 58,
        totalDownloads: 12450
    };

    const [recentProjects, setRecentProjects] = useState([
        {
            id: 1,
            name: 'EcoTech Solutions',
            status: 'En cours',
            date: '2024-01-15',
            category: 'Environment',
            founder: 'Jean Dupont',
            progress: 65,
            icon: Leaf,
            iconColor: 'icon-green'
        },
        {
            id: 2,
            name: 'HealthAI',
            status: 'Accelere',
            date: '2024-01-14',
            category: 'Santé',
            founder: 'Marie Martin',
            progress: 85,
            icon: Heart,
            iconColor: 'icon-red'
        },
        {
            id: 3,
            name: 'FinFlow',
            status: 'Prets pour serie A',
            date: '2024-01-13',
            category: 'Finance',
            founder: 'Pierre Durand',
            progress: 92,
            icon: Banknote,
            iconColor: 'icon-green'
        },
        {
            id: 4,
            name: 'AgriSmart',
            status: 'En cours',
            date: '2024-01-12',
            category: 'Agriculture',
            founder: 'Sophie Leroy',
            progress: 45,
            icon: Wheat,
            iconColor: 'icon-yellow'
        },
        {
            id: 5,
            name: 'EduLearn',
            status: 'Accelere',
            date: '2024-01-11',
            category: 'Éducation',
            founder: 'Lucas Moreau',
            progress: 78,
            icon: BookOpen,
            iconColor: 'icon-blue'
        },
        {
            id: 6,
            name: 'GreenEnergy',
            status: 'En cours',
            date: '2024-01-10',
            category: 'Énergie',
            founder: 'Emma Rousseau',
            progress: 30,
            icon: Zap,
            iconColor: 'icon-yellow'
        }
    ]);

    const [mentors, setMentors] = useState([
        { id: 1, name: 'Jean Martin', specialty: 'Finance', projects: 12, rating: 4.8 },
        { id: 2, name: 'Sophie Dubois', specialty: 'Marketing', projects: 8, rating: 4.9 },
        { id: 3, name: 'Pierre Dupont', specialty: 'Technique', projects: 15, rating: 4.7 },
        { id: 4, name: 'Marie Lefebvre', specialty: 'Business', projects: 10, rating: 4.6 }
    ]);

    const [resources, setResources] = useState([
        { id: 1, title: 'Guide de création entreprise', downloads: 1250, category: 'Guide' },
        { id: 2, title: 'Modèle Business Plan', downloads: 890, category: 'Template' },
        { id: 3, title: 'Pitch Deck Template', downloads: 756, category: 'Template' },
        { id: 4, title: 'Checklist due diligence', downloads: 543, category: 'Guide' }
    ]);

    const [users, setUsers] = useState([
        { id: 1, name: 'Alexandre Kim', email: 'akim@email.com', role: 'Entrepreneur', status: 'Actif' },
        { id: 2, name: 'Emma Wilson', email: 'ewilson@email.com', role: 'Mentor', status: 'Actif' },
        { id: 3, name: 'Lucas Martin', email: 'lmartin@email.com', role: 'Entrepreneur', status: 'En attente' },
        { id: 4, name: 'Sophie Brown', email: 'sbrown@email.com', role: 'Investisseur', status: 'Actif' }
    ]);

    const openModal = (type) => {
        setModalType(type);
        setFormData({});
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
        setFormData({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        switch (modalType) {
            case 'project':
                const newProject = {
                    id: recentProjects.length + 1,
                    name: formData.name || 'Nouveau Projet',
                    status: 'En cours',
                    date: new Date().toISOString().split('T')[0],
                    category: formData.category || 'Autre',
                    founder: 'Nouveau Fondateur',
                    progress: 0,
                    image: '🚀'
                };
                setRecentProjects([...recentProjects, newProject]);
                break;
            case 'mentor':
                const newMentor = {
                    id: mentors.length + 1,
                    name: formData.name || 'Nouveau Mentor',
                    specialty: formData.specialty || 'General',
                    projects: 0,
                    rating: 5.0
                };
                setMentors([...mentors, newMentor]);
                break;
            case 'resource':
                const newResource = {
                    id: resources.length + 1,
                    title: formData.title || 'Nouvelle Ressource',
                    downloads: 0,
                    category: formData.category || 'Guide'
                };
                setResources([...resources, newResource]);
                break;
            case 'user':
                const newUser = {
                    id: users.length + 1,
                    name: formData.name || 'Nouvel Utilisateur',
                    email: formData.email || 'email@example.com',
                    role: formData.role || 'Entrepreneur',
                    status: 'En attente'
                };
                setUsers([...users, newUser]);
                break;
            default:
                break;
        }

        closeModal();
        alert(`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} ajouté avec succès!`);
    };

    const handleDelete = (id, type) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet élément?')) {
            switch (type) {
                case 'project':
                    setRecentProjects(recentProjects.filter(p => p.id !== id));
                    break;
                case 'mentor':
                    setMentors(mentors.filter(m => m.id !== id));
                    break;
                case 'resource':
                    setResources(resources.filter(r => r.id !== id));
                    break;
                case 'user':
                    setUsers(users.filter(u => u.id !== id));
                    break;
                default:
                    break;
            }
        }
    };

    const getStatusClass = (status) => {
        const statusMap = {
            'En cours': 'status-en-cours',
            'Accelere': 'status-accelere',
            'Prets pour serie a': 'status-prets-pour-serie-a',
            'Actif': 'status-active',
            'En attente': 'status-pending'
        };
        return statusMap[status] || 'status-en-cours';
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return 'progress-high';
        if (progress >= 50) return 'progress-medium';
        return 'progress-low';
    };

    const renderModal = () => {
        if (!showModal) return null;

        const getModalTitle = () => {
            switch (modalType) {
                case 'project': return 'Nouveau Projet';
                case 'mentor': return 'Nouveau Mentor';
                case 'resource': return 'Nouvelle Ressource';
                case 'user': return 'Nouvel Utilisateur';
                default: return 'Nouveau';
            }
        };

        const getFormFields = () => {
            switch (modalType) {
                case 'project':
                    return (
                        <>
                            <div className="form-group">
                                <label>Nom du projet</label>
                                <input type="text" name="name" placeholder="Entrez le nom du projet" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Catégorie</label>
                                <select name="category" onChange={handleInputChange}>
                                    <option value="">Sélectionnez une catégorie</option>
                                    <option value="Environment">Environnement</option>
                                    <option value="Santé">Santé</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Éducation">Éducation</option>
                                    <option value="Technology">Technologie</option>
                                </select>
                            </div>
                        </>
                    );
                case 'mentor':
                    return (
                        <>
                            <div className="form-group">
                                <label>Nom du mentor</label>
                                <input type="text" name="name" placeholder="Entrez le nom" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Spécialité</label>
                                <select name="specialty" onChange={handleInputChange}>
                                    <option value="">Sélectionnez une spécialité</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Technique">Technique</option>
                                    <option value="Business">Business</option>
                                    <option value="Legal">Juridique</option>
                                </select>
                            </div>
                        </>
                    );
                case 'resource':
                    return (
                        <>
                            <div className="form-group">
                                <label>Titre de la ressource</label>
                                <input type="text" name="title" placeholder="Entrez le titre" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Catégorie</label>
                                <select name="category" onChange={handleInputChange}>
                                    <option value="">Sélectionnez une catégorie</option>
                                    <option value="Guide">Guide</option>
                                    <option value="Template">Template</option>
                                    <option value="Checklist">Checklist</option>
                                    <option value="Video">Vidéo</option>
                                </select>
                            </div>
                        </>
                    );
                case 'user':
                    return (
                        <>
                            <div className="form-group">
                                <label>Nom complet</label>
                                <input type="text" name="name" placeholder="Entrez le nom" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="entrez@email.com" onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Rôle</label>
                                <select name="role" onChange={handleInputChange}>
                                    <option value="">Sélectionnez un rôle</option>
                                    <option value="Entrepreneur">Entrepreneur</option>
                                    <option value="Mentor">Mentor</option>
                                    <option value="Investisseur">Investisseur</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </>
                    );
                default:
                    return null;
            }
        };

        return (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>{getModalTitle()}</h3>
                        <button className="modal-close" onClick={closeModal}>
                            <X size={20} />
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {getFormFields()}
                        <div className="modal-actions">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                Annuler
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Ajouter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    const renderDashboard = () => (
        <>
            {/* Stats Grid */}
            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-icon stat-icon-blue">
                        <Rocket size={28} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.totalProjects}</span>
                        <span className="stat-label">Total Projets</span>
                        <span className="stat-trend trend-up">+12% ce mois</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon stat-icon-green">
                        <Briefcase size={28} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.activeStartups}</span>
                        <span className="stat-label">Startups Actives</span>
                        <span className="stat-trend trend-up">+5% ce mois</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon stat-icon-purple">
                        <GraduationCap size={28} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.totalMentors}</span>
                        <span className="stat-label">Mentors</span>
                        <span className="stat-trend trend-up">+3 ce mois</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon stat-icon-orange">
                        <Download size={28} />
                    </div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.totalDownloads}</span>
                        <span className="stat-label">Téléchargements</span>
                        <span className="stat-trend trend-up">+18% ce mois</span>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="admin-section">
                <div className="section-header">
                    <div className="section-title-group">
                        <FolderKanban size={24} />
                        <h2>Projets Récents</h2>
                    </div>
                    <div className="section-actions">
                        <div className="view-toggle">
                            <button
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                <Target size={16} />
                            </button>
                            <button
                                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                <Filter size={16} />
                            </button>
                        </div>
                        <button className="btn btn-primary" onClick={() => setActiveTab('projects')}>
                            Voir tout
                        </button>
                    </div>
                </div>

                {viewMode === 'grid' ? (
                    <div className="projects-grid">
                        {recentProjects.map(project => {
                            const IconComponent = project.icon;
                            return (
                                <div key={project.id} className="project-card">
                                    <div className="project-card-header">
                                        <div className={`project-icon ${project.iconColor}`}>
                                            <IconComponent size={28} />
                                        </div>
                                        <span className={`status-badge ${getStatusClass(project.status)}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-founder">{project.founder}</p>
                                    <div className="project-category">
                                        <span>{project.category}</span>
                                    </div>
                                    <div className="project-progress">
                                        <div className="progress-header">
                                            <span>Progression</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className={`progress-fill ${getProgressColor(project.progress)}`}
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="project-footer">
                                        <span className="project-date">
                                            <Calendar size={14} />
                                            {project.date}
                                        </span>
                                        <div className="project-actions">
                                            <button className="action-btn-small" title="Voir">
                                                <Eye size={14} />
                                            </button>
                                            <button className="action-btn-small" title="Modifier">
                                                <Edit size={14} />
                                            </button>
                                            <button className="action-btn-small" title="Supprimer" onClick={() => handleDelete(project.id, 'project')}>
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <table className="admin-table projects-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Projet</th>
                                <th>Fondateur</th>
                                <th>Catégorie</th>
                                <th>Progression</th>
                                <th>Statut</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentProjects.map(project => {
                                const IconComponent = project.icon;
                                return (
                                    <tr key={project.id}>
                                        <td>#{project.id}</td>
                                        <td>
                                            <div className="project-cell">
                                                <div className={`project-icon-small ${project.iconColor}`}>
                                                    <IconComponent size={18} />
                                                </div>
                                                <span>{project.name}</span>
                                            </div>
                                        </td>
                                        <td>{project.founder}</td>
                                        <td>{project.category}</td>
                                        <td>
                                            <div className="progress-cell">
                                                <div className="progress-bar-small">
                                                    <div
                                                        className={`progress-fill ${getProgressColor(project.progress)}`}
                                                        style={{ width: `${project.progress}%` }}
                                                    ></div>
                                                </div>
                                                <span>{project.progress}%</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </td>
                                        <td>{project.date}</td>
                                        <td>
                                            <div className="table-actions">
                                                <button className="action-btn-small" title="Voir">
                                                    <Eye size={14} />
                                                </button>
                                                <button className="action-btn-small" title="Modifier">
                                                    <Edit size={14} />
                                                </button>
                                                <button className="action-btn-small" title="Supprimer" onClick={() => handleDelete(project.id, 'project')}>
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );

    const renderProjects = () => (
        <>
            <div className="section-header">
                <div className="section-title-group">
                    <FolderKanban size={24} />
                    <h2>Tous les Projets</h2>
                </div>
                <div className="section-actions">
                    <button className="btn btn-primary" onClick={() => openModal('project')}>
                        <Plus size={18} style={{ marginRight: '8px' }} />
                        Nouveau Projet
                    </button>
                </div>
            </div>

            <div className="admin-section">
                <div className="table-toolbar">
                    <div className="search-box">
                        <Search size={18} />
                        <input type="text" placeholder="Rechercher un projet..." />
                    </div>
                    <div className="filter-actions">
                        <select className="filter-select">
                            <option value="">Toutes les catégories</option>
                            <option value="Environment">Environnement</option>
                            <option value="Santé">Santé</option>
                            <option value="Finance">Finance</option>
                            <option value="Agriculture">Agriculture</option>
                        </select>
                        <select className="filter-select">
                            <option value="">Tous les statuts</option>
                            <option value="En cours">En cours</option>
                            <option value="Accelere">Accelere</option>
                            <option value="Prets pour serie a">Prets pour serie A</option>
                        </select>
                    </div>
                </div>
                <table className="admin-table projects-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Projet</th>
                            <th>Fondateur</th>
                            <th>Catégorie</th>
                            <th>Progression</th>
                            <th>Statut</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentProjects.map(project => (
                            <tr key={project.id}>
                                <td>#{project.id}</td>
                                <td>
                                    <div className="project-cell">
                                        <span className="project-emoji-small">{project.image}</span>
                                        <span>{project.name}</span>
                                    </div>
                                </td>
                                <td>{project.founder}</td>
                                <td>{project.category}</td>
                                <td>
                                    <div className="progress-cell">
                                        <div className="progress-bar-small">
                                            <div
                                                className={`progress-fill ${getProgressColor(project.progress)}`}
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                        <span>{project.progress}%</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(project.status)}`}>
                                        {project.status}
                                    </span>
                                </td>
                                <td>{project.date}</td>
                                <td>
                                    <div className="table-actions">
                                        <button className="action-btn-small" title="Voir">
                                            <Eye size={14} />
                                        </button>
                                        <button className="action-btn-small" title="Modifier">
                                            <Edit size={14} />
                                        </button>
                                        <button className="action-btn-small" title="Supprimer" onClick={() => handleDelete(project.id, 'project')}>
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return renderDashboard();
            case 'projects':
                return renderProjects();
            case 'mentors':
                return (
                    <>
                        <div className="section-header">
                            <div className="section-title-group">
                                <Users size={24} />
                                <h2>Tous les Mentors</h2>
                            </div>
                            <div className="section-actions">
                                <div className="search-box">
                                    <Search size={18} />
                                    <input type="text" placeholder="Rechercher un mentor..." />
                                </div>
                                <button className="btn btn-primary" onClick={() => openModal('mentor')}>
                                    <Plus size={18} style={{ marginRight: '8px' }} />
                                    Ajouter Mentor
                                </button>
                            </div>
                        </div>
                        <div className="admin-section">
                            <div className="mentors-grid-view">
                                {mentors.map(mentor => (
                                    <div key={mentor.id} className="mentor-card-admin">
                                        <div className="mentor-card-header">
                                            <div className="mentor-avatar-large">
                                                <Users size={32} />
                                            </div>
                                            <div className="mentor-info-header">
                                                <h3>{mentor.name}</h3>
                                                <span className="mentor-specialty">{mentor.specialty}</span>
                                            </div>
                                        </div>
                                        <div className="mentor-stats">
                                            <div className="mentor-stat">
                                                <Briefcase size={18} />
                                                <span>{mentor.projects} projets</span>
                                            </div>
                                            <div className="mentor-stat">
                                                <TrendingUp size={18} />
                                                <span>{mentor.rating}/5</span>
                                            </div>
                                        </div>
                                        <div className="mentor-actions">
                                            <button className="action-btn" title="Voir le profil">
                                                <Eye size={16} />
                                            </button>
                                            <button className="action-btn" title="Modifier">
                                                <Edit size={16} />
                                            </button>
                                            <button className="action-btn delete" title="Supprimer" onClick={() => handleDelete(mentor.id, 'mentor')}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'resources':
                return (
                    <>
                        <div className="section-header">
                            <div className="section-title-group">
                                <Book size={24} />
                                <h2>Toutes les Ressources</h2>
                            </div>
                            <div className="section-actions">
                                <div className="search-box">
                                    <Search size={18} />
                                    <input type="text" placeholder="Rechercher une ressource..." />
                                </div>
                                <button className="btn btn-primary" onClick={() => openModal('resource')}>
                                    <Plus size={18} style={{ marginRight: '8px' }} />
                                    Ajouter Ressource
                                </button>
                            </div>
                        </div>
                        <div className="admin-section">
                            <div className="resources-grid-view">
                                {resources.map(resource => (
                                    <div key={resource.id} className="resource-card-admin">
                                        <div className="resource-icon-wrapper">
                                            <BookOpen size={28} />
                                        </div>
                                        <div className="resource-content">
                                            <h3>{resource.title}</h3>
                                            <div className="resource-meta">
                                                <span className="resource-category">{resource.category}</span>
                                                <span className="resource-downloads">
                                                    <Download size={14} />
                                                    {resource.downloads}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="resource-actions">
                                            <button className="action-btn" title="Télécharger">
                                                <Download size={16} />
                                            </button>
                                            <button className="action-btn" title="Modifier">
                                                <Edit size={16} />
                                            </button>
                                            <button className="action-btn delete" title="Supprimer" onClick={() => handleDelete(resource.id, 'resource')}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'users':
                return (
                    <>
                        <div className="section-header">
                            <div className="section-title-group">
                                <User size={24} />
                                <h2>Tous les Utilisateurs</h2>
                            </div>
                            <div className="section-actions">
                                <div className="search-box">
                                    <Search size={18} />
                                    <input type="text" placeholder="Rechercher un utilisateur..." />
                                </div>
                                <button className="btn btn-primary" onClick={() => openModal('user')}>
                                    <Plus size={18} style={{ marginRight: '8px' }} />
                                    Ajouter Utilisateur
                                </button>
                            </div>
                        </div>
                        <div className="admin-section">
                            <div className="users-grid-view">
                                {users.map(user => (
                                    <div key={user.id} className="user-card-admin">
                                        <div className="user-card-header">
                                            <div className="user-avatar-large">
                                                <User size={28} />
                                            </div>
                                            <div className="user-info-header">
                                                <h3>{user.name}</h3>
                                                <span className="user-email">{user.email}</span>
                                            </div>
                                        </div>
                                        <div className="user-meta">
                                            <span className="user-role-badge">{user.role}</span>
                                            <span className={`status-badge ${getStatusClass(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </div>
                                        <div className="user-actions">
                                            <button className="action-btn" title="Valider">
                                                <CheckCircle size={16} />
                                            </button>
                                            <button className="action-btn" title="Modifier">
                                                <Edit size={16} />
                                            </button>
                                            <button className="action-btn delete" title="Supprimer" onClick={() => handleDelete(user.id, 'user')}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                );
            case 'settings':
                return (
                    <>
                        <div className="section-header">
                            <h2>Paramètres</h2>
                        </div>
                        <div className="admin-section">
                            <div className="settings-form">
                                <div className="form-group">
                                    <label>Nom de l'application</label>
                                    <input type="text" defaultValue="ISM Incubateur" />
                                </div>
                                <div className="form-group">
                                    <label>Email de contact</label>
                                    <input type="email" defaultValue="contact@ism-incubateur.com" />
                                </div>
                                <div className="form-group">
                                    <label>URL du site</label>
                                    <input type="url" defaultValue="https://ism-incubateur.com" />
                                </div>
                                <div className="form-group">
                                    <label>Mode maintenance</label>
                                    <select>
                                        <option value="false">Non</option>
                                        <option value="true">Oui</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary">Enregistrer les modifications</button>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="admin-page">
            <div className="admin-layout">
                <aside className="admin-sidebar">
                    <div className="sidebar-header">
                        <div className="logo">
                            <Building2 size={32} />
                            <span>ISM Admin</span>
                        </div>
                    </div>
                    <nav className="admin-nav">
                        <button
                            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <LayoutDashboard size={20} />
                            Dashboard
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
                            onClick={() => setActiveTab('projects')}
                        >
                            <Rocket size={20} />
                            Projets
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'mentors' ? 'active' : ''}`}
                            onClick={() => setActiveTab('mentors')}
                        >
                            <Users size={20} />
                            Mentors
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
                            onClick={() => setActiveTab('resources')}
                        >
                            <Book size={20} />
                            Ressources
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
                            onClick={() => setActiveTab('users')}
                        >
                            <User size={20} />
                            Utilisateurs
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                            onClick={() => setActiveTab('settings')}
                        >
                            <Settings size={20} />
                            Paramètres
                        </button>
                    </nav>
                    <div className="sidebar-footer">
                        <div className="user-info">
                            <div className="user-avatar">
                                <User size={20} />
                            </div>
                            <div className="user-details">
                                <span className="user-name">{user?.name || 'Admin'}</span>
                                <span className="user-role">Administrateur</span>
                            </div>
                        </div>
                        <button className="logout-btn" onClick={handleLogout} title="Déconnexion">
                            <LogOut size={18} />
                        </button>
                    </div>
                </aside>
                <main className="admin-content">
                    <div className="admin-header">
                        <h1>Administration</h1>
                        <p>Bienvenue sur le tableau de bord de l'ISM Incubateur</p>
                    </div>
                    {renderContent()}
                </main>
            </div>
            {renderModal()}
        </div>
    );
};

export default AdminPage;

