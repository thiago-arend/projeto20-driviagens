import { db } from "../configs/database.connection.js";

export async function create(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date]);
}

//export async function get(name) {
//    const result = await db.query(`SELECT * FROM cities WHERE name=$1`, [name]);
//    return result?.rows[0];
//}
  
export const flightRepository = { create };