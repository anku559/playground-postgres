--- Create 'actors' Table in 'movies' Schema
CREATE TABLE
  IF NOT EXISTS movies.actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(150),
    last_name VARCHAR(150) NOT NULL,
    gender CHAR(1),
    date_of_birth DATE,
    created_at DATE,
    updated_at DATE
  );

---
--- Create 'directors' Table in 'movies' Schema
CREATE TABLE
  IF NOT EXISTS movies.directors (
    director_id SERIAL PRIMARY KEY,
    first_name VARCHAR(150),
    last_name VARCHAR(150),
    date_of_birth DATE,
    nationality VARCHAR(20),
    created_at DATE,
    updated_at DATE
  );

---
--- Create 'movies' Table in 'movies' Schema
CREATE TABLE
  IF NOT EXISTS movies.movies (
    movie_id SERIAL PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL,
    movie_length INT,
    movie_language VARCHAR(20),
    age_certificate VARCHAR(10),
    release_date DATE,
    director_id INT REFERENCES movies.directors (director_id),
    created_at DATE,
    updated_at DATE
  );

---
--- Create 'movies_revenues' Table in 'movies' Schema
CREATE TABLE
  IF NOT EXISTS movies.movies_revenues (
    revenue_id SERIAL PRIMARY KEY,
    revenue_domestic NUMERIC(10, 2),
    revenue_international NUMERIC(10, 2),
    movie_id INT REFERENCES movies.movies (movie_id),
    created_at DATE,
    updated_at DATE
  );

---
--- Create 'movies_actors' Table in 'movies' Schema (Junction Table - ManyToMany relation)
CREATE TABLE
  IF NOT EXISTS movies.movies_actors (
    movie_id INT REFERENCES movies.movies (movie_id),
    actor_id INT REFERENCES movies.actors (actor_id),
    PRIMARY KEY (movie_id, actor_id)
  );

---
--- Create 'customers' Table in 'movies' Schema
CREATE TABLE
  IF NOT EXISTS movies.customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(150),
    age INT
  );