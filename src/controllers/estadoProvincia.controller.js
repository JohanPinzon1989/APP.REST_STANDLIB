import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getE_p = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM estado_provincia");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findE_p = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM estado_provincia WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addE_p = async (req, res) => {
  try {
    const { EstPrv, Abreviacion, Longitud, Latitud, Pais_Id } = req.body;

    if (
      EstPrv === undefined ||
      Abreviacion === undefined ||
      Pais_Id === undefined
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const e_p = { EstPrv, Abreviacion, Longitud, Latitud, Pais_Id };
    const connection = await getConnection();
    await connection.query("INSERT INTO estado_provincia SET ?", e_p);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateE_p = async (req, res) => {
  try {
    const { Id } = req.params;
    const { EstPrv, Abreviacion, Longitud, Latitud, Pais_Id } = req.body;

    if (
      Id === undefined ||
      EstPrv === undefined ||
      Abreviacion === undefined ||
      Pais_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const e_p = { EstPrv, Abreviacion, Longitud, Latitud, Pais_Id };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE estado_provincia SET ? WHERE Id = ?",
      [e_p, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteE_p = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM estado_provincia WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getE_p,
  findE_p,
  addE_p,
  deleteE_p,
  updateE_p,
};
