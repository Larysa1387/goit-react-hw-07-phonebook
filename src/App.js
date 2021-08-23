import React from "react";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Phonebook</h1>
      <ContactForm />
      <h2 className="App-header">Contacts</h2>
      <Filter />
      {<ContactList />}
    </div>
  );
}

export default App;
