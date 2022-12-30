const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function readContacts() {
  const contactsRaw = await fs.readFile(contactsPath);
  const contacts = JSON.parse(contactsRaw);
  return contacts;
}

async function writeContacts(db) {
  await fs.writeFile(contactsPath, JSON.stringify(db, null, 4));
}


async function listContacts() {
    const contacts = await readContacts();
    return contacts;
}

async function getContactById(contactId) {
    const contacts = await readContacts();
    const contactById = contacts.find((contact) => contact.id === contactId);
    return contactById;
}

async function removeContact(contactId) {
    const contacts = await readContacts();
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    await writeContacts(updatedContacts);
}

async function addContact(name, email, phone) {
    const id = nanoid(4);
    const contact = { id, name, email, phone };

    const db = await readContacts();
    db.push(contact);

    await writeContacts(db);
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};