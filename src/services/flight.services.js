import { errors } from "../errors/errors.js";
import { cityRepository } from "../repositories/city.repositories.js";
import { flightRepository } from "../repositories/flight.repositories.js";

async function create(origin, destination, date) {

    if (origin === destination) throw errors.originDestinationConflict();

    const originCity = await cityRepository.getById(origin);
    if (originCity === undefined) throw errors.notFound("Id");

    const destinationCity = await cityRepository.getById(destination);
    if (destinationCity === undefined) throw errors.notFound("Id");

    await flightRepository.create(origin, new Date(destination), date);
}

async function getAll(origin, destination, smallerDate, biggerDate) {
    if (smallerDate > biggerDate) throw errors.unmatchedDatas();

    const flights = await flightRepository.getAll(origin, destination, smallerDate, biggerDate);
    return flights;
}

async function getFlightById(id) {
    const flight = await flightRepository.getFlightById(id);
    return flight;
}

export const flightService = { create, getFlightById, getAll };