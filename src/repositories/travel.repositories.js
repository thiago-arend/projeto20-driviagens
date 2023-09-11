import { db } from "../configs/database.connection.js";

async function create(passengerId, flightId) {
    await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`,
        [passengerId, flightId]);
}
  
export const travelRepository = { create };