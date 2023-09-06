import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passenger.schema.js";
import { insertPassenger } from "../controllers/passenger.controller.js";

const passengerRouter = Router();

passengerRouter.post("/passengers", validateSchema(passengerSchema), insertPassenger);

export default passengerRouter;