import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citySchema } from "../schemas/city.schemas.js";
import { cityController } from "../controllers/city.controllers.js";

const cityRouter = Router();

cityRouter.post("/cities", validateSchema(citySchema), cityController.create);

export default cityRouter;