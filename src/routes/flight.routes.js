import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema, getFlightsSchema } from "../schemas/flight.schemas.js";
import { flightController } from "../controllers/flight.controllers.js";

const flightRouter = Router();

flightRouter.post("/flights", validateSchema(flightSchema), flightController.create);
flightRouter.get("/flights", validateSchema(getFlightsSchema), flightController.getAll);

export default flightRouter;