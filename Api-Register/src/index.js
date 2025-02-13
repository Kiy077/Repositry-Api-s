import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Cors 🔜 Para permitir solicitudes entre los dominios
import userRoutes from "./routes/user.routes.js"
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//Usar middleware
app.use(cors());
app.use(express.json());

//RUTAS localhost:4000/api/users
app.use("/api/users", userRoutes)


//Ruta principal localhost:4000
app.get("/", (req, res)=>{
    res.send("Bienvenido a mi Api-Register");
})

//iniciar servidor

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando desde localhost:${PORT}`)
})
