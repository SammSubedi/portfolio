import express from 'express';
import cors from 'cors';
import pool from './db.js';
import projectsRouter from './routes/projects.js';
import messagesRouter from './routes/messages.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Database connected. Current time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection failed');
  }
});

app.use('/api/projects', projectsRouter);
app.use('/api/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});