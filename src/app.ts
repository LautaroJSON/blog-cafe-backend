import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Endpoint de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola, bienvenido a mi API REST!");
});

// Puedes añadir más rutas o controllers aquí

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
