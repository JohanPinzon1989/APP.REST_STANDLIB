import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getE_t = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM estado_tenant");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findE_t = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM estado_tenant WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addE_t = async (req, res) => {
  try {
    const { Estado, Descripcion } = req.body;

    if (Estado === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const e_t = { Estado, Descripcion };
    const connection = await getConnection();
    await connection.query("INSERT INTO estado_tenant SET ?", e_t);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateE_t = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Estado, Descripcion } = req.body;

    if (Id === undefined || Estado === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const e_t = { Estado, Descripcion };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE estado_tenant SET ? WHERE Id = ?",
      [e_t, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteE_t = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM estado_tenant WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getE_t,
  findE_t,
  addE_t,
  deleteE_t,
  updateE_t,
};
