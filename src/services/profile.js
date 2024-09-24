import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const getProfiles = async () => {
  try {
    const response = await axios.get(`${API_URL}/profiles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return [];
  }
};

export const getSkills = async (profileId) => {
  try {
    const response = await axios.get(`${API_URL}/skills`, { params: { profileId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
};

export const getCertifications = async (profileId) => {
  try {
    const response = await axios.get(`${API_URL}/certifications`, { params: { profileId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return [];
  }
};

export const getSoftwares = async (profileId) => {
  try {
    const response = await axios.get(`${API_URL}/softwares`, { params: { profileId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching softwares:', error);
    return [];
  }
};

export const getMethodologies = async (profileId) => {
  try {
    const response = await axios.get(`${API_URL}/methodologies`, { params: { profileId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching methodologies:', error);
    return [];
  }
};

export const getPositions = async (profileId) => {
  try {
    const response = await axios.get(`${API_URL}/positions`, { params: { profileId } });
    return response.data;
  } catch (error) {
    console.error('Error fetching positions:', error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/countries`);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

export const getCitiesByCountry = async(id_country) => {
  try {
    const response = await axios.get(`${API_URL}/cities/country/${id_country}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cities for country ${id_country}:`, error);
    return [];
  }
}

export const saveProfile = async (profileData) => {
  try {
    const response = await axios.post(`${API_URL}/profile`, profileData);
    return response.data;
  } catch (error) {
    console.error('Error saving profile:', error);
    throw error;
  }
};