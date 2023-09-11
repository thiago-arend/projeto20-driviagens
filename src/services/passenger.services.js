import { passengerRepository } from "../repositories/passenger.repositories.js";

async function create(firstName, lastName) {
    await passengerRepository.create(firstName, lastName);
}

async function getPassengerById(id) {
  const passenger = await passengerRepository.getPassengerById(id);
  return passenger;
}
  
export const passengerService = { create, getPassengerById };