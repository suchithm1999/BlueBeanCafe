import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Skip 401 interception for login, signup, and refresh endpoints to avoid infinite loops or unnecessary reloads
        if (originalRequest.url.includes('/auth/login') || originalRequest.url.includes('/auth/signup') || originalRequest.url.includes('/auth/refresh')) {
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) {
                    // No refresh token, simple logout
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('user');
                    window.location.href = '/sign-in';
                    return Promise.reject(error);
                }

                const response = await axios.post(`${API_URL}/auth/refresh`, {}, {
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
                });

                const { accessToken, refreshToken: newRefreshToken } = response.data;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', newRefreshToken); // Update refresh token too

                api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

                return api(originalRequest);
            } catch (refreshError) {
                // Refresh failed (expired or invalid), fully logout
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('user');
                window.location.href = '/sign-in';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
