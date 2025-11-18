import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.get('/api/validate/first-name/:name', (req, res) => {
  const name = req.params.name;
  if (name === 'Bálint') {
    res.json({ valid: false });
  }
  else {
    res.json({ valid: true });
  }
});

app.get('/api/validate/last-name/:name', (req, res) => {
  const name = req.params.name;
  if (name === 'Neuhausz') {
    res.json({ valid: false });
  }
  else {
    res.json({ valid: true });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});