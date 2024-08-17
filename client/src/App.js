import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, email, number };

    try {
      console.log("ok");
      const response = await axios.post('http://localhost:5000/submit', data);
      console.log(response.data);
      if (response.data.result === 'success') {
        alert('Successfully submitted');
      } else {
        alert('Error - Not Submitted');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error - Not Submitted');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
