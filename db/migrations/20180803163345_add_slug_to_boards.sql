
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
ALTER TABLE boards
  ADD COLUMN slug VARCHAR(255) NOT NULL;

CREATE UNIQUE INDEX unique_boards_slug ON boards(slug);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP INDEX unique_boards_slug;

ALTER TABLE boards
  DROP COLUMN slug;
