import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getOrg = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM organismos");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findOrg = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM organismos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addOrg = async (req, res) => {
  try {
    const {
      Organismo,
      Organismo_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    } = req.body;

    if (
      (Organismo === undefined,
      Organismo_ing === undefined,
      Abreviacion === undefined,
      Abreviacion_ing === undefined)
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const org = {
      Organismo,
      Organismo_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO organismos SET ?", org);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateOrg = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Organismo,
      Organismo_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    } = req.body;

    if (
      (Id === undefined || Organismo === undefined,
      Organismo_ing === undefined,
      Abreviacion === undefined,
      Abreviacion_ing === undefined)
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const org = {
      Organismo,
      Organismo_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE organismos SET ? WHERE Id = ?",
      [org, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteOrg = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM organismos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getOrg,
  findOrg,
  addOrg,
  deleteOrg,
  updateOrg,
};
