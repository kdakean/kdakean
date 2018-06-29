
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE lists (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  position SMALLINT DEFAULT 0,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  board_id BIGINT NOT NULL REFERENCES boards(id) ON DELETE CASCADE
);
CREATE INDEX lists_name_index ON lists(name);;

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP INDEX lists_name_index;
DROP TABLE lists;
