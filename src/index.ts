import express, { Express } from "express";
import cors from "cors";
import { router } from "./routes/routes";

const api: Express = express();

const port = process.env.PORT || 8081;

api.use(express.json(), cors(), router);

api.listen(port, () => console.log("Servidor OK"));
