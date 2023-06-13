import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getE_u = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM estado_usuarios");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findE_u = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM estado_usuarios WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addE_u = async (req, res) => {
  try {
    const { Estado, Descripcion } = req.body;

    if (Estado === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const e_u = { Estado, Descripcion };
    const connection = await getConnection();
    await connection.query("INSERT INTO estado_usuarios SET ?", e_u);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateE_u = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Estado, Descripcion } = req.body;

    if (Id === undefined || Estado === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const e_u = { Estado, Descripcion };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE estado_usuarios SET ? WHERE Id = ?",
      [e_u, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteE_u = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM estado_usuarios WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getE_u,
  findE_u,
  addE_u,
  deleteE_u,
  updateE_u,
};
