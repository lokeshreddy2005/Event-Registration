import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors'

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { name, email, number } = req.body;
  
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbykZUUfq16atX7nTrk22RvG3JfTK2PBiOiiMZkK26gztT1faKftywOOfPpKu2F__azn-A/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, number }),
    });
    
    const result = await response.json();
    if (result.result === 'success') {
      res.status(200).send({ result: 'success' });
    } else {
      res.status(400).send({ result: 'error', error: result.error });
    }
  } catch (error) {
    res.status(500).send({ result: 'error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
