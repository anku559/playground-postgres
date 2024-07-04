import pool from '../config/connection/db.js';

/* -------------------------------------------------------------------------- */
/*                                 Data Types                                 */
/* -------------------------------------------------------------------------- */
/* 
SERIAL
INT
NUMERIC(10, 2)

CHAR(length)
VARCHAR(length)

DATE
  created_at DATE,
  updated_at DATE

TIMESTAMP
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


*/

/* -------------------------------------------------------------------------- */
/*                                 Constraints                                */
/* -------------------------------------------------------------------------- */

/* 
CHECK
  CHECK (gender IN ('M', 'F')),

NOT NULL
*/

/* -------------------------------------------------------------------------- */
/*                              Table Operations                              */
/* -------------------------------------------------------------------------- */

// TODO: To create helper of Create Table, Drop Table
export const createTable = async (tableName, columnName) => {};

export const dropTable = async (tableName) => {};

/* -------------------------------------------------------------------------- */
/*                              Column Operations                             */
/* -------------------------------------------------------------------------- */

/**
 * Returns `true` if table exists else `false`
 */
export const checkTableColumnExists = async (tableSchemaName, columnName) => {
  const checkQuery = `
SELECT EXISTS (
  SELECT 1 
  FROM information_schema.columns 
  WHERE table_schema = $1
  AND table_name = $2
  AND column_name = $3
);`;

  const [schemaName, tableName] = tableSchemaName.split('.');

  const checkResult = await pool.query(checkQuery, [
    schemaName,
    tableName,
    columnName,
  ]);
  return checkResult.rows[0].exists;
};

/**
 * 
 * @param {*} tableName 
 * @param {*} columnDetails 
 * @returns 
 * 
 * @example 
 * addTableColumn('movies.actors', {
    name: 'sample_column_1',
    dataType: 'VARCHAR',
    length: 255,
    precision: null,
    notNull: true,
    default: 'default_value',
  });
 */
export const addTableColumn = async (
  tableName,
  columnDetails = {
    name: 'sample_column',
    dataType: 'VARCHAR',
    length: 255,
    precision: null,
    notNull: true,
    default: 'default_value',
  },
) => {
  try {
    const {
      name,
      dataType,
      length,
      precision,
      notNull,
      default: defaultValue,
    } = columnDetails;

    const exists = await checkTableColumnExists(tableName, columnDetails.name);

    if (exists) {
      console.log(exists);
      console.log(`Column ${name} in table ${tableName} already exists.`);
      return;
    }

    let query = `ALTER TABLE ${tableName} ADD COLUMN ${name} ${dataType}`;

    if (length) {
      query += `(${length})`;
    }

    if (precision) {
      query += `(${precision})`;
    }

    if (notNull) {
      query += ' NOT NULL';
    }

    if (defaultValue !== undefined && defaultValue !== null) {
      query += ` DEFAULT '${defaultValue}'`;
    }

    await pool.query(query);
    console.log(`Column ${name} added to table ${tableName}`);
  } catch (err) {
    console.error('ERROR', err.message);
  }
};

export const dropTableColumn = async (tableName, columnName) => {
  try {
    const exists = await checkTableColumnExists(tableName, columnName);

    if (!exists) {
      console.log(
        `Column ${columnName} in table ${tableName} does not exists.`,
      );
      return;
    }

    const query = `ALTER TABLE ${tableName} DROP COLUMN ${columnName};`;
    await pool.query(query);
    console.log(`Column ${columnName} dropped from table ${tableName}`);
  } catch (err) {
    console.error('ERROR', err.message);
  }
};

export const renameColumn = async (tableName, prevColName, newColName) => {
  try {
    const exists = await checkTableColumnExists(tableName, prevColName);

    if (!exists) {
      console.log(
        `Column ${prevColName} in table ${tableName} does not exists.`,
      );
      return;
    }

    const query = `ALTER TABLE ${tableName} RENAME ${prevColName} TO ${newColName};`;
    await pool.query(query);
    console.log(
      `Column ${prevColName} renamed to ${newColName} in table ${tableName}`,
    );
  } catch (err) {
    console.error('ERROR', err.message);
  }
};

// TODO: To create helper of Change Data Type of Column
export const changeColumnDataType = async () => {};
