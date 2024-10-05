import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',  // Your backend base URL
});

// Handle login
export const login = async (username, password) => {
  try {
    const response = await api.post('/token/', {
      username,
      password
    });
    const { access, refresh } = response.data;
    // Store tokens in localStorage
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    return access;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Fetch items
export const fetchItems = async () => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await api.get('/items', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export default api;