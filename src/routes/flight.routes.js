import { Router } from "express";
import { validateQuerySchema, validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema, getFlightsSchema } from "../schemas/flight.schemas.js";
import { flightController } from "../controllers/flight.controllers.js";

const flightRouter = Router();

flightRouter.post("/flights", validateSchema(flightSchema), flightController.create);
flightRouter.get("/flights", validateQuerySchema(getFlightsSchema), flightController.getAll);

export default flightRouter;