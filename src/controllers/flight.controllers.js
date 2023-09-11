import httpStatus from "http-status";
import { flightService } from "../services/flight.services.js";

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightService.create(origin, destination, date);
  res.sendStatus(httpStatus.CREATED);
}

async function getAll(req, res) {
  const { origin, destination, smallerDate, biggerDate } = res.locals.parsedQuery;

  const flights = await flightService.getAll(origin, destination, smallerDate, biggerDate);
  res.status(httpStatus.OK).send(flights);
}

export const flightController = { create, getAll };