import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine('hbs', engine({
extname: '.hbs',
defaultLayout: 'main',
layoutsDir: path.join(__dirname, 'views', 'layout'),
partialsDir: path.join(__dirname, 'views', 'templates'),
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));

app.use('/', usuarioRoutes);
app.use('/auth', usuarioRoutes);

const port = 3000
app.listen(port, ()=> {
    console.log(`Servidor en ejecucion en http://localhost:${port}`)
})