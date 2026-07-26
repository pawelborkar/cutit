import axios from "axios";

interface IPayload {
  url: string;
}

const API_URL = import.meta.env.API_URL || "https://c.pawel.in";

export const createShortURL = async (payload: IPayload) => {
  try {
    const response = await axios.post(`${API_URL}/links`, payload);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(`Failed to create a short link: ${error}`);
    throw error;
  }
};
