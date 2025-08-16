import axios from 'axios';

// Configure base URL for API calls
const API_BASE_URL = 'http://localhost/txtc-react';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const authService = {
  async login(username, password) {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('check_credentials', 'true');

      const response = await api.post('/validation/check_credentials.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Network error. Please check your connection.');
    }
  },

  async checkSession() {
    try {
      const response = await api.get('/validation/check_session.php');
      return response.data;
    } catch (error) {
      console.error('Session check error:', error);
      return { success: false };
    }
  }
};