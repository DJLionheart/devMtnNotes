DROP TABLE IF EXISTS projects;

-- this will drop the table every
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL,
    project_name VARCHAR
);

CREATE TABLE IF NOT EXISTS tech (
    id SERIAL,
    tech_name VARCHAR
);

INSERT INTO tech (tech_name)
VALUES ('React'),
('Node');



-- Everytime you start your server, it will run the seed file.
--You have to check if the table already exists or not, otherwise you'll get an error.

--This is like if you're adding info to a portfolio database.

--Semicolon IS necessary for multiple things to run in the same file.

