import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getR_u_e = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM rol_usuarios_empresa");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findR_u_e = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM rol_usuarios_empresa WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addR_u_e = async (req, res) => {
  try {
    const { Rol, Descripcion } = req.body;

    if (Rol === undefined || Descripcion === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const r_u_e = { Rol, Descripcion };
    const connection = await getConnection();
    await connection.query("INSERT INTO rol_usuarios_empresa SET ?", r_u_e);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateR_u_e = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Rol, Descripcion } = req.body;

    if (Id === undefined || Rol === undefined || Descripcion === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const r_u_e = { Rol, Descripcion };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE rol_usuarios_empresa SET ? WHERE Id = ?",
      [r_u_e, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteR_u_e = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM rol_usuarios_empresa WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getR_u_e,
  findR_u_e,
  addR_u_e,
  deleteR_u_e,
  updateR_u_e,
};
