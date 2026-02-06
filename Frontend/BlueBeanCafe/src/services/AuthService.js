import api from './api';

export const AuthService = {
    login: async (email, password) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                return { success: true, user: response.data.user };
            }
            return { success: false, message: 'Login failed' };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    },

    signup: async (name, email, password, avatar) => {
        try {
            const response = await api.post('/auth/signup', {
                name,
                email,
                password,
                avatar // Optional
            });
            if (response.data.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                return { success: true, user: response.data.user };
            }
            return { success: false };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Signup failed'
            };
        }
    },

    logout: async () => {
        try {
            await api.post('/auth/logout');
        } catch (error) {
            console.error("Logout failed", error);
        } finally {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        }
    },

    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);
        return null;
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('accessToken');
    },

    // Placeholder for other methods until backend is ready
    addToPlaylist: async (course) => {
        // TODO: Implement backend endpoint
        console.warn("addToPlaylist: Backend not implemented");
        return { success: false, message: "Not implemented" };
    },

    removeFromPlaylist: async (courseId) => {
        // TODO: Implement backend endpoint
        console.warn("removeFromPlaylist: Backend not implemented");
        return { success: false, message: "Not implemented" };
    },

    updateProfile: async (name, email) => {
        // TODO: Implement backend endpoint
        console.warn("updateProfile: Backend not implemented");
        return { success: false, message: "Not implemented" };
    },

    changePassword: async (oldPassword, newPassword) => {
        // TODO: Implement backend endpoint
        console.warn("changePassword: Backend not implemented");
        return { success: false, message: "Not implemented" };
    },

    forgotPassword: async (email) => {
        // TODO: Implement backend endpoint
        console.warn("forgotPassword: Backend not implemented");
        return { success: true, message: "Sent (Mock)" };
    },

    resetPassword: async (token, newPassword) => {
        // TODO: Implement backend endpoint
        console.warn("resetPassword: Backend not implemented");
        return { success: true, message: "Reset (Mock)" };
    },

    getProfile: async () => {
        const response = await api.get('/auth/profile');
        return response.data;
    }
};
