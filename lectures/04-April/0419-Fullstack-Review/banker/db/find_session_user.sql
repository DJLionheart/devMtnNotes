SELECT * FROM users
WHERE id = $1;

-- id... NOT the auth id... We used that earlier to see if we already registered a user from Google.