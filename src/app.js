import express from "express";
import morgan from "morgan";
import paisRoutes from "./routes/pais.routes";
import perfilUsuariosRoutes from "./routes/perfilUsuarios.routes";
import TipoIdentificacionRoutes from "./routes/TipoIdentificacion.routes";
import estadoUsuarioRoutes from "./routes/EstadosUsuario.routes";
import estadoTenantRoutes from "./routes/estadoTenant.routes";
import estadosDocumentosRoutes from "./routes/estadosDocumentos.routes";
import organismosRoutes from "./routes/organismos.routes";
import industriaRoutes from "./routes/industria.routes";
import planesRoutes from "./routes/planes.routes";
import rolUsuarioEmpresa from "./routes/rolUsuarioEmpresa.routes";

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
app.use("/api/e_t", estadoTenantRoutes);
app.use("/api/e_d", estadosDocumentosRoutes);
app.use("/api/organismos", organismosRoutes);
app.use("/api/industria", industriaRoutes);
app.use("/api/planes", planesRoutes);
app.use("/api7r_u_e", rolUsuarioEmpresa);

export default app;
