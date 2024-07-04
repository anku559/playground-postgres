import pool from '../config/connection/db.js';

/* -------------------------------------------------------------------------- */
/*                            Schemas and Namespace                           */
/* -------------------------------------------------------------------------- */

/**
 * Checks if schema exists else creates a Schema
 */
export const createSchema = async (schemaName = 'public') => {
  const ifSchemaExists = await checkSchemaExists(schemaName);

  if (!ifSchemaExists) {
    await pool.query(`CREATE SCHEMA ${schemaName};`);
    console.log(`Schema ${schemaName} created successfully.`);
  }
};

/**
 * Returns `true` if schema exists else `false`
 */
export const checkSchemaExists = async (schemaName = 'public') => {
  const qry = await pool.query(
    `SELECT schema_name FROM information_schema.schemata WHERE schema_name = $1;`,
    [schemaName],
  );
  if (qry.rows.length === 0) {
    console.log(`Schema ${schemaName} does not exist.`);
    return false;
  } else {
    console.log(`Schema ${schemaName} already exists.`);
    return true;
  }
};

/**
 * Checks if schema exists and drops the Schema
 * CAUTION: DROPS all the data inside the schema
 */
export const dropSchema = async (schemaName = 'NA') => {
  const ifSchemaExists = await checkSchemaExists(schemaName);

  if (ifSchemaExists) {
    await pool.query(`DROP SCHEMA ${schemaName} CASCADE;`);
    console.log(`Schema ${schemaName} dropped successfully.`);
  }
};
