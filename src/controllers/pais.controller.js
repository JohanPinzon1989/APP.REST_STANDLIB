import { getConnection } from "../database/database";

const getPais = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM Pais");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addPais = async (req, res) => {
  try {
    const { Pais, Abreviatura } = req.body;
    const pais = { Pais, Abreviatura };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO Pais SET ?", pais);
    res.json("res");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getPais,
  addPais,
};
