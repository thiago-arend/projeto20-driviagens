import { db } from "../configs/database.connection.js";

async function create(origin, destination, date) {
    await db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
}

async function getFlightById(id) {
    const flight = await db.query(`SELECT * FROM flights WHERE id=$1;`, [id]);
    return flight?.rows[0];
}

async function getAll(origin, destination, smallerDate, biggerDate) {
    let queryStart = `SELECT f.id, "originCity".name as origin, "destinationCity".name as destination, TO_CHAR(f."date", 'DD-MM-YYYY') as "date"
        FROM flights f
            JOIN cities "originCity" ON f.origin="originCity".id
            JOIN cities "destinationCity" ON f.destination="destinationCity".id
            WHERE 1=1 `;
    let queryMiddle = ``;
    let queryEnd = `ORDER BY f."date";`;
    const values = [];

    if (origin) {
        values.push(origin);
        queryMiddle += ` AND "originCity".name=$${values.length} `;
    }
    if (destination) {
        values.push(destination);
        queryMiddle += ` AND "destinationCity".name=$${values.length} `;
    }
    if (smallerDate && biggerDate) {
        values.push(smallerDate);
        values.push(biggerDate);
        queryMiddle += ` AND ("date" BETWEEN $${values.length - 1} AND $${values.length}) `;
    }

    const flights = await db.query(( queryStart + queryMiddle + queryEnd ), values);
    return flights.rows;
}

export const flightRepository = { create, getFlightById, getAll };