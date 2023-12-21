import express from 'express';
import { createItem, getReport, getGraph } from './controllers';

const router = express.Router();

// Rota de cadastro dos itens
router.post('/items', createItem);

// Rota de consumo do relatório paginado
router.get('/report', getReport);

// Rota do gráfico
router.get('/graph', getGraph);

export default router;