import pg from 'pg';
import Sequelize from 'sequelize';

// point to production or local host
export const db = process.env.DATABASE_URL + '?ssl=true' || 'postgres://localhost:5432/thumbscheck';
// create a new db connection and connect to it
const client = new pg.Client(db);
client.connect();

// Connect sequelize

export const sequelize = new Sequelize('thumbscheck', 'postgres', null, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});


