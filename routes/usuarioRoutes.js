import express from 'express';
import { ExpressHandlebars } from 'express-handlebars';
import { formulariologin } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', function(req, res) {
    res.send('Hola mundo')
})

router.get('/nosotros', function(req, res) {
    res.send('Sobre nosotros')
})

router.get('/login', formulariologin)


export default router