import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getDocumentos = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM documentos");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findDocumentos = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addDocumentos = async (req, res) => {
  try {
    const {
      Nombre,
      Abreviacion,
      Descripcion,
      Descripcion_ing,
      Fecha_carga,
      Fecha_vigencia,
      Estado,
      Link,
      Organismos_Id,
    } = req.body;

    if (
      (Nombre === undefined,
      Abreviacion === undefined,
      Descripcion === undefined,
      Descripcion_ing === undefined,
      Fecha_carga === undefined,
      Fecha_vigencia === undefined,
      Estado === undefined,
      Link === undefined,
      Organismos_Id === undefined)
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const documentos = {
      Nombre,
      Abreviacion,
      Descripcion,
      Descripcion_ing,
      Fecha_carga,
      Fecha_vigencia,
      Estado,
      Link,
      Organismos_Id,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO documentos SET ?", documentos);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateDocumentos = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Nombre,
      Abreviacion,
      Descripcion,
      Descripcion_ing,
      Fecha_carga,
      Fecha_vigencia,
      Estado,
      Link,
      Organismos_Id,
    } = req.body;

    if (
      (Id === undefined || Nombre === undefined,
      Abreviacion === undefined,
      Descripcion === undefined,
      Descripcion_ing === undefined,
      Fecha_carga === undefined,
      Fecha_vigencia === undefined,
      Estado === undefined,
      Link === undefined,
      Organismos_Id === undefined)
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const documentos = {
      Nombre,
      Abreviacion,
      Descripcion,
      Descripcion_ing,
      Fecha_carga,
      Fecha_vigencia,
      Estado,
      Link,
      Organismos_Id,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE documentos SET ? WHERE Id = ?",
      [documentos, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteDocumentos = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM documentos WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getDocumentos,
  findDocumentos,
  addDocumentos,
  deleteDocumentos,
  updateDocumentos,
};
