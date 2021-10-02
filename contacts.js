const fs = require("fs");
const path = require("path");
const {v4} = require("uuid");


//const contacts = require("./db/contacts.json");
//readFile()
//writeFile()

const contacts = require("./db/contacts.json");
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const listContacts = async () => await contacts;
// function listContacts() {
//     fs.readFile(contactsPath)
//         .then((data) => {
//             console.log(data.toString());
//             return data.toString()
//         })
//         .catch((err) => console.log(err.message))
// }

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


const updateContacts = async newContacts => {
   // console.log(newContacts);
    //console.log(contactsPath);
    //console.log(JSON.stringify(newContacts));
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, ' '));
};

const removeContacts = async (contactId) => {
    try {
        //console.log(contactsPath);
        const list = await listContacts();
        //console.log(list);
        const newContacts = list.filter(item => item.id.toString() !== contactId);
        //console.log(newContacts);
        const update = await updateContacts(newContacts);
        //console.log(update);
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
    await updateContacts(list);
    
        return list
         } catch (error) {
    throw error;
  }
  
}

module.exports = {
    listContacts,
    getContactById,
    removeContacts,
    addContact
}