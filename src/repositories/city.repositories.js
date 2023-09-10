import { db } from "../configs/database.connection.js";

export async function create(name) {
    await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
}

export async function getCityByName(name) {
    const result = await db.query(`SELECT * FROM cities WHERE name=$1`, [name]);
    return result?.rows[0];
}
  
export const cityRepository = { create, getCityByName };