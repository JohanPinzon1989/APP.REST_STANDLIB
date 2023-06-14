import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getP_i = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM planes_industria");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findP_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM planes_industria WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addP_i = async (req, res) => {
  try {
    const { Planes_Id, Industria_Id } = req.body;

    if (Planes_Id === undefined || Industria_Id === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const p_i = { Planes_Id, Industria_Id };
    const connection = await getConnection();
    await connection.query("INSERT INTO planes_industria SET ?", p_i);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateP_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Planes_Id, Industria_Id } = req.body;

    if (
      Id === undefined ||
      Planes_Id === undefined ||
      Industria_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const p_i = { Planes_Id, Industria_Id };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE planes_industria SET ? WHERE Id = ?",
      [p_i, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteP_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM planes_industria WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getP_i,
  findP_i,
  addP_i,
  deleteP_i,
  updateP_i,
};
