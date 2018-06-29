package model

import (
	"time"

	"github.com/kdakean/kdakean/db"
	"github.com/kdakean/kdakean/errors"
)

type Task struct {
	Id          uint      `json:"id"`
	Name        string    `json:"name" valid:"required,maxlen(150)"`
	Description string    `json:"desc" valid:"maxlen(1000)"`
	Priority    int       `json:"priority" valid:"-"`
	UserId      uint      `json:"user_id" db:"user_id" valid:"required"`
	ListId      uint      `json:"list_id" db:"list_id" valid:"required"`
	BoardId     uint      `json:"board_id" db:"board_id" valid:"required"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" db:"updated_at"`
}

func CreateTask(t *Task) (*Task, error) {
	createdAt := time.Now().UTC()
	columns := []string{
		"name", "desc", "priority", "user_id", "list_id", "board_id",
		"created_at", "updated_at",
	}
	values := []interface{}{
		t.Name, t.Description, t.Priority, t.BoardId, t.ListId, t.UserId,
		createdAt, createdAt,
	}
	sql, args, err := db.SQ.Insert("tasks").Columns(columns...).
		Values(values...).Suffix("RETURNING id").ToSql()
	if err != nil {
		return nil, errors.ErrInternalServer
	}
	task := Task{
		Name:        t.Name,
		Description: t.Description,
		Priority:    t.Priority,
		UserId:      t.UserId,
		ListId:      t.ListId,
		BoardId:     t.BoardId,
		CreatedAt:   createdAt,
		UpdatedAt:   createdAt,
	}
	if err := db.DBX.QueryRowx(sql, args...).Scan(&task.Id); err != nil {
		if isReferencesError(err) {
			return nil, err
		} else {
			return nil, errors.ErrInternalServer
		}
	}
	return &task, nil
}
