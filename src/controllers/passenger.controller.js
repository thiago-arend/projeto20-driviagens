import httpStatus from "http-status";
import { passengerService } from "../services/passenger.services.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerService.create(firstName, lastName);
  res.sendStatus(httpStatus.CREATED);
}

async function getPassengersAndTravels(req, res) {
  const { name } = req.query;

  const results = await passengerService.getPassengersAndTravels(name);
  res.status(httpStatus.OK).send(results);
}

export const passengerController = { create, getPassengersAndTravels };