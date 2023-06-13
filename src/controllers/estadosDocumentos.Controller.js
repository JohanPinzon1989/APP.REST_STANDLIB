import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getE_d = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM estado_documento");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findE_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM estado_documento WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addE_d = async (req, res) => {
  try {
    const { Estado, Descripcion } = req.body;

    if (Estado === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const e_d = { Estado, Descripcion };
    const connection = await getConnection();
    await connection.query("INSERT INTO estado_documento SET ?", e_d);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateE_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Estado, Descripcion } = req.body;

    if (Id === undefined || Estado === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const e_d = { Estado, Descripcion };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE estado_documento SET ? WHERE Id = ?",
      [e_d, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteE_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM estado_documento WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getE_d,
  findE_d,
  addE_d,
  deleteE_d,
  updateE_d,
};
