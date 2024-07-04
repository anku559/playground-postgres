import express, { json, urlencoded } from 'express';
import pool from './config/connection/db.js';
import { createSchema, dropSchema } from './helpers/schema.js';
import { addTableColumn, dropTableColumn } from './helpers/table.js';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

(async () => {
  dropTableColumn('movies.actors', 'sample_column');
})();

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
});
