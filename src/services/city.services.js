import { cityRepository } from "../repositories/city.repositories.js";
import { errors } from "../errors/errors.js";

export async function create(name) {
    const city = await get(name);
    if (city) throw errors.conflict("Cidade");

    await cityRepository.create(name);
}

export async function get(name) {
    const city = await cityRepository.get(name);
    return city;
}

export async function getById(id) {
    const city = await cityRepository.getById(id);
    return city;
}

export const cityService = { create, getById };