SELECT * 
FROM users
WHERE auth_id = $1

-- $1 - a massive parameter that lets us insert data into our statements.