package model

import (
	"time"

	"github.com/kdakean/kdakean/db"
	"github.com/kdakean/kdakean/errors"
)

type List struct {
	Id        uint      `json:"id"`
	Name      string    `json:"name" valid:"required,maxlen(150)"`
	Position  int       `json:"position" valid:"-"`
	BoardId   uint      `json:"board_id" db:"board_id" valid:"required"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
	UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
}

func CreateList(l *List) (*List, error) {
	createdAt := time.Now().UTC()
	columns := []string{
		"name", "position", "board_id",
		"created_at", "updated_at",
	}
	values := []interface{}{
		l.Name, l.Position, l.BoardId,
		createdAt, createdAt,
	}
	sql, args, err := db.SQ.Insert("lists").Columns(columns...).
		Values(values...).Suffix("RETURNING id").ToSql()
	if err != nil {
		return nil, errors.ErrInternalServer
	}
	list := List{
		Name:      l.Name,
		Position:  l.Position,
		BoardId:   l.BoardId,
		CreatedAt: createdAt,
		UpdatedAt: createdAt,
	}
	if err := db.DBX.QueryRowx(sql, args...).Scan(&list.Id); err != nil {
		if isReferencesError(err) {
			return nil, err
		} else {
			return nil, errors.ErrInternalServer
		}
	}
	return &list, nil
}
