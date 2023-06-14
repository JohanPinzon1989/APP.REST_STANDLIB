import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getI_d = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM industria_documentos");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findI_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM industria_documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addI_d = async (req, res) => {
  try {
    const { Industria_Id, Documentos_Id } = req.body;

    if (Industria_Id === undefined || Documentos_Id === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const I_d = { Industria_Id, Documentos_Id };
    const connection = await getConnection();
    await connection.query("INSERT INTO industria_documentos SET ?", I_d);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateI_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Industria_Id, Documentos_Id } = req.body;

    if (Industria_Id === undefined || Documentos_Id === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const I_d = { Industria_Id, Documentos_Id };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE industria_documentos SET ? WHERE Id = ?",
      [I_d, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteI_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM industria_documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getI_d,
  findI_d,
  addI_d,
  deleteI_d,
  updateI_d,
};
