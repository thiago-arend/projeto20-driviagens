import { db } from "../configs/database.connection.js";

async function create(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date]);
}

async function getFlightById(id) {
    const flight = await db.query(`SELECT * FROM flights WHERE id=$1`, [id]);
    return flight?.rows[0];
}
  
export const flightRepository = { create, getFlightById };