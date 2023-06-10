import express from "express";
import morgan from "morgan";
import paisRoutes from "./routes/pais.routes";

const app = express();

//Settings
app.set("port", 4100);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/paises", paisRoutes);

export default app;
