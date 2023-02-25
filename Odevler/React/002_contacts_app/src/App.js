import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [contacts, setContacts] = useState([
    {
      fullName:"Rıdvan",
      phone_number:"536555444"
    },
    {
      fullName:"Esat",
      phone_number:"534777888"
    },
    {
      fullName:"Mahmut",
      phone_number:"531222111"
    }
  ])

  useEffect(() => {
    console.log(contacts);
  },[contacts])

  return (
    <div className="App">
      <div className='container'>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
