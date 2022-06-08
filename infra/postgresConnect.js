require('dotenv').config();
const pgp = require('pg-promise')();
const db = pgp({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

// const db = pgp({
//     host: 'db.uokwpajgnykakcdtegxb.supabase.co',
//     port: '5432',
//     user: 'postgres',
//     password: 'testeBicicletario',
//     database: 'postgres'
// });



module.exports = db;