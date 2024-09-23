import axios from 'axios';

const API_BASE_URL = 'https://localhost:7184/api'; // Replace with your actual API URL

// ... other API functions ...

export const getMenuItems = async (formData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/MenuItems`, formData);
    return response.data;
  } catch (error) {
    console.error('Error getting menu items:', error);
    throw error;
  }
};