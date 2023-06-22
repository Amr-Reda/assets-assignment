import dotenv from "dotenv";
dotenv.config()
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import initRoutes from "./routes";
import {swaggerDocs} from "./swagger";

const app: Express = express();
const PORT = process.env.PORT || 3000

const jsonParser = bodyParser.json({ limit: '50mb' });
app.use(jsonParser);
const urlEncode = bodyParser.urlencoded({ extended: true });
app.use(urlEncode);

app.use(cors());

const options = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'APSARC Task Api Docs',
};
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

initRoutes(app);

app.listen(PORT, () => {
    console.log(`[Server]: I am running at https://localhost:${PORT}`);
});