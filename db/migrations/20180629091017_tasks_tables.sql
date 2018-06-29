
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE tasks (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  priority INTEGER DEFAULT 0,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  list_id BIGINT NOT NULL REFERENCES lists(id) ON DELETE CASCADE,
  board_id BIGINT NOT NULL REFERENCES boards(id) ON DELETE CASCADE
);

CREATE INDEX tasks_name_index ON tasks(name);
CREATE INDEX tasks_user_id_index ON tasks(user_id);
CREATE INDEX tasks_list_id_index ON tasks(list_id);
CREATE INDEX tasks_board_id_index ON tasks(board_id);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP INDEX tasks_name_index;
DROP INDEX tasks_user_id_index;
DROP INDEX tasks_list_id_index;
DROP INDEX tasks_board_id_index;
DROP TABLE tasks;
