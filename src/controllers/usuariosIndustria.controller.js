import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getU_i = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios_industria");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findU_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM usuarios_industria WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addU_i = async (req, res) => {
  try {
    const { Usuarios_Id, Industria_Id } = req.body;

    if (Usuarios_Id === undefined || Industria_Id === undefined) {
      res.status(400),
        json({ message: "Bad Request. Ingrese todos los datos" });
    }

    const u_i = { Usuarios_Id, Industria_Id };
    const connection = await getConnection();
    await connection.query("INSERT INTO usuarios_industria SET ?", u_i);
    res.json({ message: "Tipo de identificacion registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateU_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Usuarios_Id, Industria_Id } = req.body;

    if (Usuarios_Id === undefined || Industria_Id === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const u_i = { Usuarios_Id, Industria_Id };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE usuarios_industria SET ? WHERE Id = ?",
      [u_i, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteU_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM usuarios_industria WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getU_i,
  findU_i,
  addU_i,
  deleteU_i,
  updateU_i,
};
