import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getR_i = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM rol_interfaces");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findR_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM rol_interfaces WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addR_i = async (req, res) => {
  try {
    const { Rol_Usuarios_Empresa_Id, Interfaz, Link } = req.body;

    if (
      Rol_Usuarios_Empresa_Id === undefined ||
      Interfaz === undefined ||
      Link === undefined
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const r_i = { Rol_Usuarios_Empresa_Id, Interfaz, Link };
    const connection = await getConnection();
    await connection.query("INSERT INTO rol_interfaces SET ?", r_i);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateR_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Rol_Usuarios_Empresa_Id, Interfaz, Link } = req.body;

    if (
      Id === undefined ||
      Rol_Usuarios_Empresa_Id === undefined ||
      Interfaz === undefined ||
      Link === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const r_i = { Rol_Usuarios_Empresa_Id, Interfaz, Link };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE rol_interfaces SET ? WHERE Id = ?",
      [r_i, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteR_i = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM rol_interfaces WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getR_i,
  findR_i,
  addR_i,
  deleteR_i,
  updateR_i,
};
