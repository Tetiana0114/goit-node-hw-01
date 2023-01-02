const { Command } = require("commander");
const { addContact, listContacts, removeContact, getContactById } = require("./contacts");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

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
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);