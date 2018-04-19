INSERT INTO users
(display_name, img, auth_id)
VALUES
($1, $2, $3)
RETURNING *;

-- Insert this user into the database, and then return the user
-- Instead of having to do another find user call, returning *; will return it back right away!
-- This can also be used for deleting from tables.