const { Pool } = require('vercel/postgres');

const pool = new Pool({
    user: 'postgres', // Replace with your database username
    host: 'localhost', // Replace with your database host
    database: 'POSTGRES_DATABASE', // Replace with your database name
    password: 'POSTGRES_PASSWORD', // Replace with your database password
    port: 5432, // Replace with your database port (default)
});

module.exports = pool;