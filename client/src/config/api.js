const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://management-system-x82f.onrender.com';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  },
  TASKS: {
    GET_ALL: `${API_BASE_URL}/api/tasks`,
    CREATE: `${API_BASE_URL}/api/tasks`,
    UPDATE: (id) => `${API_BASE_URL}/api/tasks/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/tasks/${id}`,
  },
};

export default API_BASE_URL;
