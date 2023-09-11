import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travel.schemas.js";
import { travelController } from "../controllers/travel.controllers.js";

const travelRouter = Router();

travelRouter.post("/travels", validateSchema(travelSchema), travelController.create);

export default travelRouter;