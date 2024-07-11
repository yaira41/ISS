import express from "express";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { countriesRoute, issRoute, utmRoute } from "./routes";
import swaggerOptions from "./config/swagger";
import errorHandler from "./middlewares/errorHandler.middlewares";

const app = express();

app.use(express.json());

app.use(express.static(path.join(process.cwd(), "/public")));

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/countries", countriesRoute);
app.use("/api/ISS", issRoute);
app.use("/api/UTM", utmRoute);
app.use(errorHandler);
export default app;
