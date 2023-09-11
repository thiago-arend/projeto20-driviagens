import { db } from "../configs/database.connection.js";

async function create(name) {
    await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);
}

async function get(name) {
    const result = await db.query(`SELECT * FROM cities WHERE name=$1`, [name]);
    return result?.rows[0];
}

async function getById(id) {
    const result = await db.query(`SELECT * FROM cities WHERE id=$1`, [id]);
    return result?.rows[0];
}
  
export const cityRepository = { create, get, getById };