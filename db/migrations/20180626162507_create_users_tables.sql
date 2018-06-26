
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL
);

CREATE UNIQUE INDEX unique_users_name ON users(name);
CREATE UNIQUE INDEX unique_users_email ON users(email);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP INDEX unique_users_name;
DROP INDEX unique_users_email;
DROP TABLE users;
