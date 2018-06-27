
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
ALTER TABLE users
  ADD COLUMN confirm_token VARCHAR(255),
  ADD COLUMN confirmed BOOLEAN DEFAULT false,
  ADD COLUMN created_at TIMESTAMP NOT NULL,
  ADD COLUMN updated_at TIMESTAMP NOT NULL;

CREATE UNIQUE INDEX unique_users_confirm_token ON users(confirm_token);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP INDEX unique_users_confirm_token;

ALTER TABLE users
  DROP COLUMN confirm_token,
  ALTER COLUMN confirmed DROP DEFAULT,
  DROP COLUMN confirmed,
  DROP COLUMN created_at,
  DROP COLUMN updated_at;
