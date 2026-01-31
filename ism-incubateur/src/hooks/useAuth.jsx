import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit etre utilise dans un AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simuler la verification du token au chargement
        const checkAuth = () => {
            const token = localStorage.getItem('authToken');
            const userData = localStorage.getItem('userData');
            if (token && userData) {
                setUser(JSON.parse(userData));
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        try {
            // Simulation d'une requete API
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Verifier les credentials admin
            if (email === 'admin@gmail.com' && password === 'admin123') {
                const adminUser = {
                    id: 1,
                    email: 'admin@gmail.com',
                    name: 'Admin ISM',
                    role: 'admin'
                };
                const fakeToken = 'admin-jwt-token';
                localStorage.setItem('authToken', fakeToken);
                localStorage.setItem('userData', JSON.stringify(adminUser));
                setUser(adminUser);
                return { success: true, user: adminUser };
            }

            // Verifier les credentials utilisateur standard (pour demo)
            if (email && password) {
                const regularUser = {
                    id: 2,
                    email: email,
                    name: email.split('@')[0],
                    role: 'entrepreneur'
                };
                const fakeToken = 'user-jwt-token';
                localStorage.setItem('authToken', fakeToken);
                localStorage.setItem('userData', JSON.stringify(regularUser));
                setUser(regularUser);
                return { success: true, user: regularUser };
            }

            return { success: false, error: 'Email ou mot de passe incorrect' };
        } catch (error) {
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const fakeToken = 'user-jwt-token';
            localStorage.setItem('authToken', fakeToken);
            const newUser = {
                id: Date.now(),
                email: userData.email,
                name: `${userData.firstName} ${userData.lastName}`,
                role: 'entrepreneur'
            };
            localStorage.setItem('userData', JSON.stringify(newUser));
            setUser(newUser);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin'
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

