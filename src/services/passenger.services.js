import { errors } from "../errors/errors.js";
import { passengerRepository } from "../repositories/passenger.repositories.js";

async function create(firstName, lastName) {
    await passengerRepository.create(firstName, lastName);
}

async function getPassengerById(id) {
  const passenger = await passengerRepository.getPassengerById(id);
  return passenger;
}

async function getPassengersAndTravels(name) {
  const results = await passengerRepository.getPassengersAndTravels(name);

  if (results.length > 10) throw errors.tooManyResults();
  return results;
}
  
export const passengerService = { create, getPassengerById, getPassengersAndTravels };