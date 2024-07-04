import pool from '../../config/connection/db.js';

export async function insertFakeData(table, columns = [], fakeData = []) {
  const values = [];
  const queryParts = fakeData.map((data, index) => {
    const valuePlaceholders = data
      .map((_, j) => `$${index * data.length + j + 1}`)
      .join(', ');
    values.push(...data);
    return `(${valuePlaceholders})`;
  });

  const query = `INSERT INTO 
${table} (
  ${columns.join(',')}
)
VALUES ${queryParts.join(', ')}`;
  await pool.query(query, values);
  console.log(`${table}: ${fakeData.length} dummy record inserted`);
  await pool.end();
}
