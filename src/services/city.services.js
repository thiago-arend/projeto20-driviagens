import { cityRepository } from "../repositories/city.repositories.js";
import { errors } from "../errors/errors.js";

async function create(name) {
    const city = await get(name);
    if (city) throw errors.conflict("City");

    await cityRepository.create(name);
}

async function get(name) {
    const city = await cityRepository.get(name);
    return city;
}

async function getById(id) {
    const city = await cityRepository.getById(id);
    return city;
}

export const cityService = { create, getById };