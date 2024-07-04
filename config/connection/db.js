import pgPkg from 'pg';
const { Pool } = pgPkg;

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 60 * 1000 * 2, // Close idle connections after 2 mins
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection cannot be established
});

pool
  .connect()
  .then(() => {
    console.log('DB Connected');
  })
  .catch(() => {
    console.log('Error connecting DB');
  });

export default pool;
