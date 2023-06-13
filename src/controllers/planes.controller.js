import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getPlanes = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM planes");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findPlanes = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM planes WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addPlanes = async (req, res) => {
  try {
    const {
      Nombre,
      Nombre_ing,
      N_Usuarios,
      Divisa,
      Divisa_ing,
      Costo,
      Costo_ing,
      Periodiciad_dias,
      Periodicidad_meses,
      Estado,
      Prioridad,
    } = req.body;

    if (
      Nombre === undefined ||
      Nombre_ing === undefined ||
      N_Usuarios === undefined ||
      Divisa === undefined ||
      Divisa_ing === undefined ||
      Costo === undefined ||
      Costo_ing === undefined ||
      Periodiciad_dias === undefined ||
      Periodicidad_meses === undefined ||
      Estado === undefined ||
      Prioridad === undefined
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const planes = {
      Nombre,
      Nombre_ing,
      N_Usuarios,
      Divisa,
      Divisa_ing,
      Costo,
      Costo_ing,
      Periodiciad_dias,
      Periodicidad_meses,
      Estado,
      Prioridad,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO planes SET ?", planes);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updatePlanes = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Nombre,
      Nombre_ing,
      N_Usuarios,
      Divisa,
      Divisa_ing,
      Costo,
      Costo_ing,
      Periodiciad_dias,
      Periodicidad_meses,
      Estado,
      Prioridad,
    } = req.body;

    if (
      Id === undefined ||
      Nombre === undefined ||
      Nombre_ing === undefined ||
      N_Usuarios === undefined ||
      Divisa === undefined ||
      Divisa_ing === undefined ||
      Costo === undefined ||
      Costo_ing === undefined ||
      Periodiciad_dias === undefined ||
      Periodicidad_meses === undefined ||
      Estado === undefined ||
      Prioridad === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const planes = {
      Nombre,
      Nombre_ing,
      N_Usuarios,
      Divisa,
      Divisa_ing,
      Costo,
      Costo_ing,
      Periodiciad_dias,
      Periodicidad_meses,
      Estado,
      Prioridad,
    };
    const connection = await getConnection();
    const result = await connection.query("UPDATE planes SET ? WHERE Id = ?", [
      planes,
      Id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deletePlanes = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM planes WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPlanes,
  findPlanes,
  addPlanes,
  deletePlanes,
  updatePlanes,
};
