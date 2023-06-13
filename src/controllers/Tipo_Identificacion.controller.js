import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getT_i = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM Tipo_Identificacion");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findT_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM Tipo_Identificacion WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addT_i = async (req, res) => {
  try {
    const { Tipo, Abreviacion, Descripcion } = req.body;

    if (Tipo === undefined || Abreviacion === undefined) {
      res.status(400),
        json({ message: "Bad Request. Ingrese todos los datos" });
    }

    const t_i = { Perfil, Descripcion };
    const connection = await getConnection();
    await connection.query("INSERT INTO Tipo_Identificacion SET ?", t_i);
    res.json({ message: "Tipo de identificacion registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateT_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Tipo, Abreviacion, Descripcion } = req.body;

    if (Id === undefined || Tipo === undefined || Abreviacion === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const t_i = { Tipo, Abreviacion, Descripcion };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE Tipo_Identificacion SET ? WHERE Id = ?",
      [t_i, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteT_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM Tipo_Identificacion WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getT_i,
  findT_i,
  addT_i,
  deleteT_i,
  updateT_i,
};
