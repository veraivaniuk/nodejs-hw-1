const fs = require('fs/promises');
const path = require("path");
const {v4} = require("uuid");

const contacts = require("./db/contacts.json");
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const listContacts = async () => contacts;


const getContactById = async contactId => {
    try {
        const list =  await listContacts()
        const result = list.find(item => item.id.toString() === contactId);
    if (!result) {
        throw new Error('Id is not valid');
    }
        return result;
    } catch (error) {
    throw error;
  }
}


const updateContacts = async contacts => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

const removeContact = async (contactId) => {
    try {
        const list = await listContacts();
        const newContacts = list.filter(item => item.id.toString() !== contactId);
        updateContacts(newContacts);
        return newContacts
        } catch (error) {
    throw error;
  }
    
}

const addContact = async (name, email, phone) => {
    try {
    const newContact = {
        id: v4(),
        name,
        email,
        phone
    }
    const list = await listContacts();
    list.push(newContact);
    updateContacts(list);
    
        return list
         } catch (error) {
    throw error;
  }
  
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}