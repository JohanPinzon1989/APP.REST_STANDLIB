import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getR_d = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM registro_documentos");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findR_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM registro_documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addR_d = async (req, res) => {
  try {
    const {
      Id_Uduarios,
      Id_Documentos,
      Id_Industria,
      Ide_tenant,
      Id_Estado_Provincia,
      Id_Pais,
      Id_Organismos,
      Fecha_hora,
      Accion,
      Accion_ing,
    } = req.body;

    if (
      Id_Uduarios === undefined ||
      Id_Documentos === undefined ||
      Id_Industria === undefined ||
      Ide_tenant === undefined ||
      Id_Estado_Provincia === undefined ||
      Id_Pais === undefined ||
      Id_Organismos === undefined ||
      Fecha_hora === undefined ||
      Accion === undefined ||
      Accion_ing === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Ingrese todos los datos" });
    }

    const r_d = {
      Id_Uduarios,
      Id_Documentos,
      Id_Industria,
      Ide_tenant,
      Id_Estado_Provincia,
      Id_Pais,
      Id_Organismos,
      Fecha_hora,
      Accion,
      Accion_ing,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO registro_documentos SET ?", r_d);
    res.json({ message: "Tipo de identificacion registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateR_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Id_Uduarios,
      Id_Documentos,
      Id_Industria,
      Ide_tenant,
      Id_Estado_Provincia,
      Id_Pais,
      Id_Organismos,
      Fecha_hora,
      Accion,
      Accion_ing,
    } = req.body;

    if (
      Id === undefined ||
      Id_Uduarios === undefined ||
      Id_Documentos === undefined ||
      Id_Industria === undefined ||
      Ide_tenant === undefined ||
      Id_Estado_Provincia === undefined ||
      Id_Pais === undefined ||
      Id_Organismos === undefined ||
      Fecha_hora === undefined ||
      Accion === undefined ||
      Accion_ing === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const r_d = {
      Id_Uduarios,
      Id_Documentos,
      Id_Industria,
      Ide_tenant,
      Id_Estado_Provincia,
      Id_Pais,
      Id_Organismos,
      Fecha_hora,
      Accion,
      Accion_ing,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE registro_documentos SET ? WHERE Id = ?",
      [r_d, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteR_d = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM registro_documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getR_d,
  findR_d,
  addR_d,
  deleteR_d,
  updateR_d,
};
