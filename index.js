import express, { json, urlencoded } from 'express';

import { insertFakeData } from './helpers/seeders/db-seeders.js';
import { DummyCustomers } from './helpers/dummy/dummy-faker-data.js';
import { truncateTable } from './helpers/table.js';

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
  // await renameColumn('movies.actors', 'sample_column_1', 'newName');
  // const dummyCustomerIns = new DummyCustomers();
  // await insertFakeData(
  //   dummyCustomerIns.TABLE,
  //   dummyCustomerIns.COLUMNS,
  //   dummyCustomerIns.fakeData(),
  // );
  // await truncateTable('movies.customers');
})();

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
});
