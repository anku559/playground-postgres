--- All data from movies.actors schema
SELECT
  *
FROM
  movies.actors;

---
--- All data from movies.directors schema
SELECT
  *
FROM
  movies.directors;

---
--- All data from movies.movies schema
SELECT
  *
FROM
  movies.movies;

---
--- Using AS (Alias)
SELECT
  first_name AS "First Name",
  last_name AS "Last Name",
  CONCAT (first_name, ' ', last_name) as "Full Name"
FROM
  movies.actors;