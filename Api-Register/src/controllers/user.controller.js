import bcrypt from "bcryptjs"; // Encriptar contraseñas
import jwt from "jsonwebtoken"; // genera un token de autenticación
import dotenv from "dotenv"; // carga las varibales de entorno (.env)

dotenv.config() /*Nos carga las varibales en .env
y nos permite usar mas herramientas */

const users = []; // bd temporal

export const registerUser = async (req, res) => {
    const{email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({mensaje:"Datos incompletos"});
    }

    const hashedPassword = await bcrypt.hash(password,10)//encriptacion de la contraseña 
    users.push({email, password: hashedPassword});//guardando el usuario y la contraseña encriptada en la BD
    res.status(201).json({mensaje: "Usuario registrado con exito"});
}

VOY A TOMAR AWITA
ya vengo voy a buscar la comiADA

 BREAK DE 15 MINUTOS
d
e mi abuelo 
nojodaBaaa
siii recreooooo 
JAJAJ
