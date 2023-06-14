import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getUs = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findUs = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM usuarios WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addUs = async (req, res) => {
  try {
    const {
      N_identificacion,
      Nombre,
      Apellido,
      Email,
      Num_fijo,
      Num_Celular,
      Estado,
      Estado_ing,
      username,
      password,
      Publicidad,
      Tipo_Identificacion_Id,
      Tenant_Id,
      Estado_Provincia_Id,
      Perfil_Uduario_Id,
    } = req.body;

    if (
      N_identificacion === undefined ||
      Nombre === undefined ||
      Apellido === undefined ||
      Email === undefined ||
      Estado === undefined ||
      Estado_ing === undefined ||
      username === undefined ||
      password === undefined ||
      Publicidad === undefined ||
      Tipo_Identificacion_Id === undefined ||
      Tenant_Id === undefined ||
      Estado_Provincia_Id === undefined ||
      Perfil_Uduario_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Ingrese todos los datos" });
    }

    const us = {
      N_identificacion,
      Nombre,
      Apellido,
      Email,
      Num_fijo,
      Num_Celular,
      Estado,
      Estado_ing,
      username,
      password,
      Publicidad,
      Tipo_Identificacion_Id,
      Tenant_Id,
      Estado_Provincia_Id,
      Perfil_Uduario_Id,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO usuarios SET ?", us);
    res.json({ message: "Tipo de identificacion registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateUs = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      N_identificacion,
      Nombre,
      Apellido,
      Email,
      Num_fijo,
      Num_Celular,
      Estado,
      Estado_ing,
      username,
      password,
      Publicidad,
      Tipo_Identificacion_Id,
      Tenant_Id,
      Estado_Provincia_Id,
      Perfil_Uduario_Id,
    } = req.body;

    if (
      Id === undefined ||
      N_identificacion === undefined ||
      Nombre === undefined ||
      Apellido === undefined ||
      Email === undefined ||
      Estado === undefined ||
      Estado_ing === undefined ||
      username === undefined ||
      password === undefined ||
      Publicidad === undefined ||
      Tipo_Identificacion_Id === undefined ||
      Tenant_Id === undefined ||
      Estado_Provincia_Id === undefined ||
      Perfil_Uduario_Id === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const us = {
      N_identificacion,
      Nombre,
      Apellido,
      Email,
      Num_fijo,
      Num_Celular,
      Estado,
      Estado_ing,
      username,
      password,
      Publicidad,
      Tipo_Identificacion_Id,
      Tenant_Id,
      Estado_Provincia_Id,
      Perfil_Uduario_Id,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE usuarios SET ? WHERE Id = ?",
      [us, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteUs = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM usuarios WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getUs,
  findUs,
  addUs,
  deleteUs,
  updateUs,
};
