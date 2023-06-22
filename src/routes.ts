import express from "express";
import {assetsRoutes} from "./modules/v1";

export default (app: express.Application) => {
    app.use('/api/v1', assetsRoutes);
}