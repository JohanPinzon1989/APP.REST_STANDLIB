import { json } from "express";
import { getConnection } from "../database/database";

//Listar
const getTenant = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM tenant");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Buscar
const findTenant = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM tenant WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Agregar
const addTenant = async (req, res) => {
  try {
    const {
      Nombre,
      Nom_contacto,
      Tel_contacto,
      Email,
      Email_facturacion,
      Estado,
      NumUsrRegistrados,
      Fecha_creacion,
      Fecha_i_plan,
      Fecha_f_plan,
    } = req.body;

    if (
      (Nombre === undefined,
      Nom_contacto === undefined,
      Tel_contacto === undefined,
      Email === undefined,
      Estado === undefined,
      NumUsrRegistrados === undefined,
      Fecha_creacion === undefined,
      Fecha_i_plan === undefined,
      Fecha_f_plan === undefined)
    ) {
      res.status(400), json({ message: "Bad Request. Ingrese un estado" });
    }

    const tenant = {
      Nombre,
      Nom_contacto,
      Tel_contacto,
      Email,
      Email_facturacion,
      Estado,
      NumUsrRegistrados,
      Fecha_creacion,
      Fecha_i_plan,
      Fecha_f_plan,
    };
    const connection = await getConnection();
    await connection.query("INSERT INTO tenant SET ?", tenant);
    res.json({ message: "Estado de usuario registrado" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Actuaizar
const updateTenant = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Nombre,
      Nom_contacto,
      Tel_contacto,
      Email,
      Email_facturacion,
      Estado,
      NumUsrRegistrados,
      Fecha_creacion,
      Fecha_i_plan,
      Fecha_f_plan,
    } = req.body;

    if (
      (Id === undefined || Nombre === undefined,
      Nom_contacto === undefined,
      Tel_contacto === undefined,
      Email === undefined,
      Estado === undefined,
      NumUsrRegistrados === undefined,
      Fecha_creacion === undefined,
      Fecha_i_plan === undefined,
      Fecha_f_plan === undefined)
    ) {
      res.status(400),
        json({ message: "Bad Request. Por favor ingrese todos los datos." });
    }

    const tenant = {
      Nombre,
      Nom_contacto,
      Tel_contacto,
      Email,
      Email_facturacion,
      Estado,
      NumUsrRegistrados,
      Fecha_creacion,
      Fecha_i_plan,
      Fecha_f_plan,
    };
    const connection = await getConnection();
    const result = await connection.query("UPDATE tenant SET ? WHERE Id = ?", [
      tenant,
      Id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Eliminar
const deleteTenant = async (req, res) => {
  try {
    const { Id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM tenant WHERE Id = ?",
      Id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getTenant,
  findTenant,
  addTenant,
  deleteTenant,
  updateTenant,
};
