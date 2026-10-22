import api from "./api";

export const createContact = async (contactData) => {
  const response = await api.post("/contact", contactData);
  return response.data;
};

export const getContacts = async () => {
  const response = await api.get("/contact");
  return response.data;
};