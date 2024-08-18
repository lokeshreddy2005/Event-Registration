import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors'
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT||5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { name, email, number,message } = req.body;
  
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzQcWSbq31GxGFJLcn9IxOZr30kJuJHovN2kyNve8R_YFfM7FeMK83OcSRr3JR97eSSpg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, number,message }),
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
