const { addContact, listContacts, removeContact, getContactById } = require("./contacts");

async function invokeAction({ action, name, email, phone, id }) {
  switch (action) {
    case "add":
      await addContact(name, email, phone);
      break;
    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case "remove":
      await removeContact(id);
      break;
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

      default:
          break;
  }
}

// invokeAction({ action: "add", name: "Lewis", email: "lewis@mail.com", phone: "333 333 333" });
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1" });
// invokeAction({ action: "remove", id: "4ca0" });