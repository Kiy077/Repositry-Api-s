import bcrypt from "bcryptjs"; // Encriptar contraseñas
import jwt from "jsonwebtoken"; // genera un token de autenticación
import dotenv from "dotenv"; // carga las varibales de entorno (.env)

dotenv.config() /*Nos carga las varibales en .env
y nos permite usar mas herramientas */

const users = []; // bd temporal

export const registerUser = async (req, res) => {
    const{email, password} = req.body;

    if (!email || !password){
        return res.status(400).json({messaje:"Datos incompletos"});
    }

    const hashedPassword = await bcrypt.hash(password,10)//encriptacion de la contraseña 
    users.push({email, password: hashedPassword});//guardando el usuario y la contraseña encriptada en la BD
    res.status(201).json({messaje: "Usuario registrado con exito"});
}

export const loginuser = async (req, res) => {
    const { email, password} = req.body;
    
    const user = users.find((u) => u.email === email);
     
     if (!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({messaje: "El usuario o la contraseña son incorrecta"});
    }

    const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {expiresIn:"1h"})
    res.json({token});
}