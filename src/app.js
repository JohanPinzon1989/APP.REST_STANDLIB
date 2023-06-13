import express from "express";
import morgan from "morgan";
import paisRoutes from "./routes/pais.routes";
import perfil_usuariosRoutes from "./routes/perfil_usuarios.routes";
import Tipo_IdentificacionRoutes from "./routes/Tipo_Identificacion.routes";

const app = express();

//Settings
app.set("port", 4100);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/paises", paisRoutes);
app.use("/api/p_u", perfil_usuariosRoutes);
app.use("/api/t_i", Tipo_IdentificacionRoutes);

export default app;
