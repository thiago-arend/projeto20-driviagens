import { errors } from "../errors/errors.js";
import { travelRepository } from "../repositories/travel.repositories.js";
import { flightService } from "./flight.services.js";
import { passengerService } from "./passenger.services.js";

async function create(passengerId, flightId) {

    const passenger = await passengerService.getPassengerById(passengerId);
    if (passenger === undefined) throw errors.notFound("Passageiro");

    const flight = await flightService.getFlightById(flightId);
    if (flight === undefined) throw errors.notFound("Voô");

    await travelRepository.create(passengerId, flightId);
}

export const travelService = { create };