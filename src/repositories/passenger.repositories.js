import { db } from "../configs/database.connection.js";

async function create(firstName, lastName) {
    await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`,
        [firstName, lastName]);
}

async function getPassengerById(id) {
    const passenger = await db.query(`SELECT * FROM passengers WHERE id=$1`,
        [id]);
    return passenger?.rows[0];
}
  
export const passengerRepository = { create, getPassengerById };