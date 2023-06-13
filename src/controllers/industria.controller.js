import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getIndustria = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM industria");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findIndustria = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM industria WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addIndustria = async (req, res) => {
  try {
    const {
      Industria,
      industria_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    } = req.body;

    if (
      Industria === undefined ||
      industria_ing === undefined ||
      Abreviacion === undefined ||
      Abreviacion_ing === undefined
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const industria = {
      Industria,
      industria_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO industria SET ?", industria);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateIndustria = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Industria,
      industria_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    } = req.body;

    if (
      Id === undefined ||
      Industria === undefined ||
      industria_ing === undefined ||
      Abreviacion === undefined ||
      Abreviacion_ing === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const industria = {
      Industria,
      industria_ing,
      Abreviacion,
      Abreviacion_ing,
      Descripcion,
      Descripcion_ing,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE industria SET ? WHERE Id = ?",
      [industria, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteIndustria = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM industria WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getIndustria,
  findIndustria,
  addIndustria,
  deleteIndustria,
  updateIndustria,
};
