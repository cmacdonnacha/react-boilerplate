import axios from 'axios';

const FetchAPI = {
  get: async (url: string, params?: unknown) => {
    const response = await axios.get(url, { params });
    return response?.data;
  },
};

export default FetchAPI;
