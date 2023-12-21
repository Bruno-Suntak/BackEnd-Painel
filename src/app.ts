import express from 'express';
import mongoose from 'mongoose';
import routes from './route';

const app = express();
const PORT = 3000;

app.use(express.json());
var cors = require('cors');
app.use(cors());

// Conectar ao MongoDB
mongoose.connect('mongodb://mongodb:27017/backend');

// Usar as rotas definidas
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});