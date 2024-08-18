import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setmessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, email, number, message };

    try {
      console.log("ok");
      const response = await axios.post('https://event-registration-server.onrender.com', data);
      console.log(response.data);
      if (response.data.result === 'success') {
        alert('Successfully submitted');
        setName('');
        setEmail('');
        setNumber('');
        setmessage('');
      } else {
        alert('Error - Not Submitted');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error - Not Submitted');
    }
  };

  return (
    <div className="flex items-center p-9 justify-center min-h-screen bg-cyan-400">
      <div className="w-full max-w-3xl p-9  bg-yellow-400 rounded-lg shadow-lg">
        <h1 className="text-3xl  font-bold mb-5 text-center">Registration Form</h1>
        <p className='py-5 text-violet-600'><i>Register and join us for the upcoming Vinayaka Chaviti(Chaturthi) celebrations</i></p>
        <p className='text-sm text-gray-700'>*  Required fields</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-cyan-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-cyan-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="number" className="block text-lg font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              id="number"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border border-cyan-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Any message you want to convey to us ( optional )
            </label>
            <textarea
              id="message"
              type="text"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              className="w-full px-4 py-2 border border-cyan-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 cursor-pointer bg-green-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
