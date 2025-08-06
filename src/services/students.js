import { ContactsCollection } from '../db/models/student.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactById) => {
  const contact = await ContactsCollection.findById(contactById);
  return contact;
};
