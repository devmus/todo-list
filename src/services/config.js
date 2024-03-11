import axios from 'axios';

const apiUrl = 'https://random-todos.azurewebsites.net';
const apiKeyEndpoint = '/keys';
const apiTodosEndpoint = '/todos';

export const getApiKey = async () => {
  try {
    const response = await axios.get(`${apiUrl}${apiKeyEndpoint}`, {
      params: {
        email: 'web3devmus@gmail.com',
      },
    });
    const apiKey = response.data;

    return apiKey;
  } catch (error) {
    console.error('Error fetching API key:', error);
    throw error;
  }
};

export const getTodos = async (apiKey) => {
  try {
    const response = await axios.get(`${apiUrl}${apiTodosEndpoint}`, {
      params: {
        apikey: apiKey,
        amount: 10,
        // randomdone: false,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching API key:', error);
    throw error;
  }
};
