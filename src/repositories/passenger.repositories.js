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

async function getPassengersAndTravels(name) {
    let queryStart = `SELECT CONCAT(p."firstName", ' ', p."lastName") as passenger, 
        COUNT(t.id) as "travels" FROM travels t JOIN passengers p ON p.id=t."passengerId" `;
    let queryMiddle = ` `;
    let queryEnd = ` GROUP BY p.id ORDER BY "travels" DESC;`;
    const values = [];

    console.log(name);

    if (name) {
        values.push(`%${name}%`);
        queryMiddle += ` WHERE p."firstName" ILIKE $1 OR p."lastName" ILIKE $1 `;
    }

    const result = await db.query(( queryStart + queryMiddle + queryEnd ), values);
    console.log(result);
    return result.rows;
}
  
export const passengerRepository = { create, getPassengerById, getPassengersAndTravels };