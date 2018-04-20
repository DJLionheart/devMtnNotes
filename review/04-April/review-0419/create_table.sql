CREATE table users (
    id SERIAL PRIMARY KEY,
    username text,
    email text
);
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title text,
    price real
);

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    prod_id INTEGER,
    quantity INTEGER
);