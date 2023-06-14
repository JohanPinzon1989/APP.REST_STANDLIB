import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getU_s = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios_standlib");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findU_s = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM usuarios_standlib WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addU_s = async (req, res) => {
  try {
    const {
      Nombre,
      Apellido,
      Email,
      User_name,
      Password,
      Estado,
      Rol_Usuarios_Empresa_Id,
    } = req.body;

    if (
      Nombre === undefined ||
      Apellido === undefined ||
      Email === undefined ||
      User_name === undefined ||
      Password === undefined ||
      Estado === undefined ||
      Rol_Usuarios_Empresa_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Ingrese todos los datos" });
    }

    const u_s = {
      Nombre,
      Apellido,
      Email,
      User_name,
      Password,
      Estado,
      Rol_Usuarios_Empresa_Id,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO usuarios_standlib SET ?", u_s);
    res.json({ message: "Tipo de identificacion registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateU_s = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Nombre,
      Apellido,
      Email,
      User_name,
      Password,
      Estado,
      Rol_Usuarios_Empresa_Id,
    } = req.body;

    if (
      Nombre === undefined ||
      Apellido === undefined ||
      Email === undefined ||
      User_name === undefined ||
      Password === undefined ||
      Estado === undefined ||
      Rol_Usuarios_Empresa_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const u_s = {
      Nombre,
      Apellido,
      Email,
      User_name,
      Password,
      Estado,
      Rol_Usuarios_Empresa_Id,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE usuarios_standlib SET ? WHERE Id = ?",
      [u_s, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteU_s = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM usuarios_standlib WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getU_s,
  findU_s,
  addU_s,
  deleteU_s,
  updateU_s,
};
