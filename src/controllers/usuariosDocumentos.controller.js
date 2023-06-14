import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getU_d = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuario_documentos");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findU_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM usuario_documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addU_d = async (req, res) => {
  try {
    const { Usuarios_Id, Documentos_Id } = req.body;

    if (Usuarios_Id === undefined || Documentos_Id === undefined) {
      res.status(400),
        json({ message: "Bad Request. Ingrese todos los datos" });
    }

    const u_d = { Usuarios_Id, Documentos_Id };
    const connection = await getConnection();
    await connection.query("INSERT INTO usuario_documentos SET ?", u_d);
    res.json({ message: "Tipo de identificacion registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateU_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Usuarios_Id, Documentos_Id } = req.body;

    if (
      Id === undefined ||
      Usuarios_Id === undefined ||
      Documentos_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const u_d = { Usuarios_Id, Documentos_Id };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE usuario_documentos SET ? WHERE Id = ?",
      [u_d, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteU_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM usuario_documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getU_d,
  findU_d,
  addU_d,
  deleteU_d,
  updateU_d,
};
