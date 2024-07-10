import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import countriesRoute from "./routes/countries.routes";
import swaggerOptions from "./config/swagger";

const app = express();

app.use(express.json());

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/countries", countriesRoute);

export default app;
