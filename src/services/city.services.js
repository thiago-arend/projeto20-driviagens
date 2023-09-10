import { cityRepository } from "../repositories/city.repositories.js";
import { errors } from "../errors/errors.js";

export async function create(name) {
    const city = await getCityByName(name);
    if (city) throw errors.conflict("Cidade");

    await cityRepository.create(name);
}

export async function getCity(name) {
    const city = await cityRepository.getCity(name);
    return city;
}

export const cityService = { create };