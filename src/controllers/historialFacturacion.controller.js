import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getH_f = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM historial_facturacion"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findH_f = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM historial_facturacion WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addH_f = async (req, res) => {
  try {
    const { Tenant_Id, Planes_Id, Prioridad, Fecha_inicio, Fecha_fin, Estado } =
      req.body;

    if (
      Tenant_Id === undefined ||
      Planes_Id === undefined ||
      Prioridad === undefined ||
      Fecha_inicio === undefined ||
      Fecha_fin === undefined ||
      Estado === undefined
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const h_f = {
      Tenant_Id,
      Planes_Id,
      Prioridad,
      Fecha_inicio,
      Fecha_fin,
      Estado,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO historial_facturacion SET ?", h_f);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateH_f = async (req, res) => {
  try {
    const { Id } = req.params;
    const { Tenant_Id, Planes_Id, Prioridad, Fecha_inicio, Fecha_fin, Estado } =
      req.body;

    if (
      Id === undefined ||
      Tenant_Id === undefined ||
      Planes_Id === undefined ||
      Prioridad === undefined ||
      Fecha_inicio === undefined ||
      Fecha_fin === undefined ||
      Estado === undefined
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const h_f = {
      Tenant_Id,
      Planes_Id,
      Prioridad,
      Fecha_inicio,
      Fecha_fin,
      Estado,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE historial_facturacion SET ? WHERE Id = ?",
      [h_f, Id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteH_f = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM historial_facturacion WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getH_f,
  findH_f,
  addH_f,
  deleteH_f,
  updateH_f,
};
