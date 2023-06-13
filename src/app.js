import express from "express";
import morgan from "morgan";
import paisRoutes from "./routes/pais.routes";
import perfilUsuariosRoutes from "./routes/perfilUsuarios.routes";
import TipoIdentificacionRoutes from "./routes/TipoIdentificacion.routes";
import estadoUsuarioRoutes from "./routes/EstadosUsuario.routes";

const app = express();

//Settings
app.set("port", 4100);

//Middleware
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/paises", paisRoutes);
app.use("/api/p_u", perfilUsuariosRoutes);
app.use("/api/t_i", TipoIdentificacionRoutes);
app.use("/api/e_u", estadoUsuarioRoutes);

export default app;
