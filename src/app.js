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
import rolUsuarioEmpresaRoutes from "./routes/rolUsuarioEmpresa.routes";
import estadoProvinciaRoutes from "./routes/estadoProvincia.routes";
import tenantRoutes from "./routes/tenant.routes";
import documentosRoutes from "./routes/documentos.routes";
import i_dRoutes from "./routes/industriaDocumentos.routes";
import u_sRoutes from "./routes/usuariosStandlib.routes";
import p_iRoutes from "./routes/planesIndustria.routes";
import r_iRoutes from "./routes/rolInterfaces.routes";
import usRoutes from "./routes/usuario.routes";
import u_iRoutes from "./routes/usuariosIndustria.routes";

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
app.use("/api/r_u_e", rolUsuarioEmpresaRoutes);
app.use("/api/e_p", estadoProvinciaRoutes);
app.use("/api/tenant", tenantRoutes);
app.use("/api/documentos", documentosRoutes);
app.use("/api/i_d", i_dRoutes);
app.use("/api/u_s", u_sRoutes);
app.use("/api/p_i", p_iRoutes);
app.use("/api/r_i", r_iRoutes);
app.use("/api/us", usRoutes);
app.use("/api/u_i", u_iRoutes);

export default app;
