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

---
-- Inserting the data containing the '
INSERT INTO
  movies.customers (first_name, last_name, email, age)
VALUES
  ('Alex''s', 'Doe', 'alex@mail.com', 21);

---
-- Inserting the data containing with RETURNING clause
INSERT INTO
  movies.customers (first_name, last_name, email, age)
VALUES
  ('Alex''s', 'Doe', 'alex@mail.com', 21),
  ('Bryan''s', 'Doe', 'alex@mail.com', 21) RETURNING *;

INSERT INTO
  movies.customers (first_name, last_name, email, age)
VALUES
  ('Alex''s', 'Doe', 'alex@mail.com', 21),
  ('Bryan''s', 'Doe', 'alex@mail.com', 21) RETURNING customer_id,
  email,
  CONCAT (first_name, ' ', last_name) AS full_name;