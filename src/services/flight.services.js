import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repositories.js";
import { flightRepository } from "../repositories/flight.repositories.js";

async function create(origin, destination, date) {

    if (origin === destination) throw errors.originDestinationConflict();

    const originCity = await cityRepository.getById(origin);
    if (originCity === undefined) throw errors.notFound("Id");

    const destinationCity = await cityRepository.getById(destination);
    if (destinationCity === undefined) throw errors.notFound("Id");

    await flightRepository.create(origin, destination, date);
}

async function getFlightById(id) {
    const flight = await flightRepository.getFlightById(id);
    return flight;
}

export const flightService = { create, getFlightById };