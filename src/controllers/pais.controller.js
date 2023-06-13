import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getPaises = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM Pais");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findPais = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM Pais WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addPais = async (req, res) => {
  try {
    const { Pais, Pais_ing, Abreviatura } = req.body;

    if (
      Pais === undefined ||
      Pais_ing === Pais_ing ||
      Abreviatura === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const pais = { Pais, Pais_ing, Abreviatura };
    const connection = await getConnection();
    await connection.query("INSERT INTO Pais SET ?", pais);
    res.json({ message: "Pais registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updatePais = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Pais, Pais_ing, Abreviatura } = req.body;

    if (
      Id === undefined ||
      Pais === undefined ||
      Pais_ing === undefined ||
      Abreviatura === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const pais = { Pais, Pais_ing, Abreviatura };
    const connection = await getConnection();
    const result = await connection.query("UPDATE Pais SET ? WHERE Id = ?", [
      pais,
      Id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deletePais = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM Pais WHERE Id = ?", Id);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPaises,
  findPais,
  addPais,
  deletePais,
  updatePais,
};
