import express, { json, urlencoded } from 'express';
import pool from './config/connection/db.js';
import { createSchema, dropSchema } from './helpers/schema.js';
import { addTableColumn, renameColumn } from './helpers/table.js';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

(async () => {
  // addTableColumn('movies.actors', {
  //   name: 'sample_column_1',
  //   dataType: 'VARCHAR',
  //   length: 255,
  //   precision: null,
  //   notNull: true,
  //   default: 'default_value',
  // });

  await renameColumn('movies.actors', 'sample_column_1', 'newName');
})();

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
});
