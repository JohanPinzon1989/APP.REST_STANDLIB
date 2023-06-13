import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getP_u = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM perfil_usuario");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findP_u = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM perfil_usuario WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addP_u = async (req, res) => {
  try {
    const { Perfil, Descripcion } = req.body;

    if (Perfil === undefined) {
      res.status(400), json({ message: "Bad Request. Ingrese un perfil" });
    }

    const p_u = { Perfil, Descripcion };
    const connection = await getConnection();
    await connection.query("INSERT INTO perfil_usuario SET ?", p_u);
    res.json({ message: "Perfil registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateP_u = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Perfil, Descripcion } = req.body;

    if (Id === undefined || Perfil === undefined) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const p_u = { Perfil, Descripcion };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE perfil_usuario SET ? WHERE Id = ?",
      [p_u, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteP_u = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM perfil_usuario WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getP_u,
  findP_u,
  addP_u,
  deleteP_u,
  updateP_u,
};
