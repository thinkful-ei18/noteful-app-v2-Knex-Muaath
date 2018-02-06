SELECT CURRENT_DATE;
DROP TABLE IF EXISTS notes;

CREATE TABLE notes(
    id serial PRIMARY KEY,
    title text NOT NULL,
    content text,
    created timestamp DEFAULT current_timestamp

);