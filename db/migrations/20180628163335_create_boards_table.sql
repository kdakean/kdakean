
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE boards (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP TABLE boards;
