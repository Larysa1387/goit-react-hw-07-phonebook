import axios from "axios";

const BASE_URL = "http://localhost:4040/contacts";

async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

async function fetchAddContact(name, number, contactType) {
  const { data } = await axios.post(`${BASE_URL}`, {
    name,
    number,
    contactType,
  });
  return data;
}

async function fetchDeleteContact(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
}

export { fetchContacts, fetchAddContact, fetchDeleteContact };
