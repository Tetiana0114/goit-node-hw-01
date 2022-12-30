const { addContact, listContacts, removeContact, getContactById } = require("./contacts");


async function invokeAction({ action, name, email, phone, id }) {
  switch (action) {
    case "add":
      await addContact(name, email, phone);
      break;
    case "getContactById":
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case "remove":
      await removeContact(id);
      break;
    case "listContacts":
      const contacts = await listContacts();
      console.table(contacts);
      break;

      default:
          break;
  }
}

// invokeAction({ action: "add", name: "Lewis", email: "lewis@mail.com", phone: "333 333 333" });
// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "1" });
// invokeAction({ action: "remove", id: "c0ph" });
