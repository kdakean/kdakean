package model

import (
	"time"

	"github.com/kdakean/kdakean/db"
	"github.com/kdakean/kdakean/errors"
	"crypto/md5"
	"encoding/base64"
	"crypto/rand"
)

type Board struct {
	Id          uint      `json:"id"`
	Name        string    `json:"name" valid:"required,maxlen(150)"`
	Description string    `json:"desc" valid:"maxlen(500)"`
	Slug        string    `json:"slug" valid:"maxlen(50)"`
	UserId      uint      `json:"user_id" db:"user_id" valid:"required"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" db:"updated_at"`
}

func generateSlug() string {
	buf := make([]byte, 16)
	rand.Read(buf)
	sum := md5.Sum(buf)
	str := base64.URLEncoding.EncodeToString(sum[:])

	return str[:16]
}

func CreateBoard(b *Board) (*Board, error) {
	createdAt := time.Now().UTC()
	slug := generateSlug()
	columns := []string{
		"name", "slug", "description", "user_id",
		"created_at", "updated_at",
	}
	values := []interface{}{
		b.Name, slug, b.Description, b.UserId,
		createdAt, createdAt,
	}
	sql, args, err := db.SQ.Insert("boards").Columns(columns...).
		Values(values...).Suffix("RETURNING id").ToSql()
	if err != nil {
		return nil, errors.ErrInternalServer
	}
	board := Board{
		Name:        b.Name,
		Slug:				 slug,
		Description: b.Description,
		UserId:      b.UserId,
		CreatedAt:   createdAt,
		UpdatedAt:   createdAt,
	}
	if err := db.DBX.QueryRowx(sql, args...).Scan(&board.Id); err != nil {
		if isReferencesError(err) {
			return nil, err
		} else {
			return nil, errors.ErrInternalServer
		}
	}
	return &board, nil
}

