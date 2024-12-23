import axios from "npm:axios";
import { DictionaryResponse } from "./types.ts";
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const dictionaryAPICall = async (
  word: string
): Promise<DictionaryResponse[]> => {
  try {
    const response = await axios.get(API_URL + word.toLowerCase().trim());
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error(`Word "${word}" not found`);
    }
    throw new Error("Failed to fetch word defination");
  }
};
