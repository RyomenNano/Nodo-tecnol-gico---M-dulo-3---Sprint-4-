import express from "express";
import {connectDB} from './config/DBConfig.mjs';
import superHeroRoutes from './routes/Rutas.mjs';
import methodOverride from 'method-override';
import expressLayouts from 'express-ejs-layouts'

const app=express();
const PORT=3000;

connectDB();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(expressLayouts)

app.set('layout', 'layout')

app.use("", superHeroRoutes);

app.use((req, res)=>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
}) 