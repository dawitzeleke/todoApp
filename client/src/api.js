import axios from 'axios';

const API_URL = 'http://localhost:3000/api/todo';

export const getTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  };
export const addTask = async (task) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);
      return response.data.data;
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  };
  

export const updateTask = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, updatedData);
      return response.data.data; // The updated task
    } catch (error) {
      console.error("Error updating task:", error);
      throw error;
    }
  };
  

export const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/tasks/${id}`);
      return response.data.message; // Confirmation message
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };
  