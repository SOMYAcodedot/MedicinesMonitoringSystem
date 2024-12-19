// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api', // Backend API base URL
//   timeout: 10000, // Optional timeout
// });

// // Helper function to attach the Authorization header
// const getAuthHeader = () => {
//   const token = localStorage.getItem('accessToken');
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// // Handle login to get JWT tokens
// export const login = async (username, password) => {
//   try {
//     const response = await api.post('/token/', { username, password });
//     const { access, refresh } = response.data;
//     localStorage.setItem('accessToken', access); // Store the tokens
//     localStorage.setItem('refreshToken', refresh);
//     return access; // Return the access token
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error; // Throw error to be caught in the component
//   }
// };

// // Refresh the token when access token expires
// export const refreshToken = async () => {
//   const refresh = localStorage.getItem('refreshToken'); // Get refresh token from localStorage
//   if (!refresh) {
//     console.error('No refresh token found');
//     throw new Error('No refresh token found');
//   }

//   try {
//     const response = await api.post('/token/refresh/', { refresh });
//     const { access } = response.data;
//     localStorage.setItem('accessToken', access); // Update access token
//     return access;
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.error('Invalid refresh token. Please log in again.');
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('refreshToken');
//       throw new Error('Session expired. Please log in again.');
//     }
//     console.error('Error refreshing token:', error);
//     throw error;
//   }
// };

// // Fetch items with token authentication
// export const fetchItems = async (searchQuery = '') => {
//   let token = localStorage.getItem('accessToken');
//   if (!token) {
//     console.error('No access token found');
//     throw new Error('No access token found');
//   }

//   try {
//     const response = await api.get(`/items?q=${encodeURIComponent(searchQuery)}`, {
//       headers: getAuthHeader(), // Use helper function for Authorization header
//     });
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.log('Access token expired. Attempting to refresh...');
//       try {
//         const newToken = await refreshToken(); // Refresh the token
//         const retryResponse = await api.get(`/items?q=${encodeURIComponent(searchQuery)}`, {
//           headers: { Authorization: `Bearer ${newToken}` },
//         });
//         return retryResponse.data;
//       } catch (refreshError) {
//         console.error('Token refresh failed:', refreshError);
//         throw refreshError;
//       }
//     } else {
//       handleRequestError(error); // Handle other types of errors
//       throw error;
//     }
//   }
// };

// // Add a new item
// export const addItem = async (itemData) => {
//   const token = localStorage.getItem('accessToken');
//   if (!token) throw new Error('No access token found');
//   try {
//     const response = await api.post('/items/', itemData, {
//       headers: getAuthHeader(),
//     });
//     return response.data;
//   } catch (error) {
//     handleRequestError(error);
//     throw error;
//   }
// };

// // Update an item
// export const updateItem = async (id, updatedData) => {
//   const token = localStorage.getItem('accessToken');
//   if (!token) throw new Error('No access token found');
//   try {
//     const response = await api.put(`/items/${id}/`, updatedData, {
//       headers: getAuthHeader(),
//     });
//     return response.data;
//   } catch (error) {
//     handleRequestError(error);
//     throw error;
//   }
// };

// // Delete an item
// export const deleteItem = async (id) => {
//   const token = localStorage.getItem('accessToken');
//   if (!token) throw new Error('No access token found');
//   try {
//     await api.delete(`/items/${id}/`, {
//       headers: getAuthHeader(),
//     });
//   } catch (error) {
//     handleRequestError(error);
//     throw error;
//   }
// };

// // Generic error handler for API requests
// const handleRequestError = (error) => {
//   if (error.response) {
//     console.error('Server responded with an error:', error.response.data);
//   } else if (error.request) {
//     console.error('No response received from server:', error.request);
//   } else {
//     console.error('Error setting up the request:', error.message);
//   }
// };

// export default api;


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Backend API base URL
  timeout: 10000, // Optional timeout
});

// Helper function to attach the Authorization header
const getAuthHeader = () => {
  const token = localStorage.getItem('accessToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Handle login to get JWT tokens
export const login = async (username, password) => {
  try {
    const response = await api.post('/token/', { username, password });
    const { access, refresh } = response.data;
    localStorage.setItem('accessToken', access); // Store the tokens
    localStorage.setItem('refreshToken', refresh);
    return access; // Return the access token
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Throw error to be caught in the component
  }
};

// Refresh the token when access token expires
export const refreshToken = async () => {
  const refresh = localStorage.getItem('refreshToken');
  if (!refresh) throw new Error('No refresh token found');

  try {
    const response = await api.post('/token/refresh/', { refresh });
    const { access } = response.data;
    localStorage.setItem('accessToken', access);
    return access;
  } catch (error) {
    console.error('Error refreshing token:', error);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    throw error;
  }
};

// Fetch all items
export const fetchItems = async (searchQuery = '') => {
  try {
    const response = await api.get(`/items/?q=${encodeURIComponent(searchQuery)}`, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// Add a new item
export const addItem = async (itemData) => {
  try {
    const response = await api.post('/items/', itemData, {
      headers: getAuthHeader(),
    });
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

// Delete an item
export const deleteItem = async (id) => {
  try {
    await api.delete(`/items/${id}/`, {
      headers: getAuthHeader(),
    });
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

export default api;