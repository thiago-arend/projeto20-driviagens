import { passengerRepository } from "../repositories/passenger.repositories.js";

export async function create(firstName, lastName) {
    await passengerRepository.create(firstName, lastName);
  }
  
export const passengerService = { create };