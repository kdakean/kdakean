package model

import (
	"time"

	"crypto/md5"
	"crypto/rand"
	"encoding/base64"
	"github.com/kdakean/kdakean/db"
	"github.com/kdakean/kdakean/errors"
)

type Board struct {
	Id          uint      `json:"id"`
	Name        string    `json:"name" valid:"required,maxlen(150)"`
	Description string    `json:"description" valid:"maxlen(500)"`
	Slug        string    `json:"slug" valid:"maxlen(50)"`
	UserId      uint      `json:"user_id" db:"user_id" valid:"required"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" db:"updated_at"`
}

type BoardJSON struct {
	Id          uint      `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Slug        string    `json:"slug"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" db:"updated_at"`
	UserId      uint      `json:"-" db:"user_id"`
	Owner       User      `db:"owner"`
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
		Slug:        slug,
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

// User board
func (user User) UpdateBoard(b *Board) (*BoardJSON, error) {
	sql := `UPDATE boards
			SET name = $3, description = $4
			WHERE user_id = $1 AND slug = $2;`

	db.DBX.Exec(sql, user.Id, b.Slug, b.Name, b.Description)

	board := user.GetBoard(b.Slug)
	return board, nil
}

func (user User) GetBoardsList() *[]BoardJSON {
	boards := []BoardJSON{}
	sql := `SELECT
      boards.*,
			users.id "owner.id",
			users.name "owner.name",
			users.email "owner.email",
			users.fullname "owner.fullname",
			users.created_at "owner.created_at",
			users.updated_at "owner.updated_at"
    FROM
      boards JOIN users ON boards.user_id = users.id
    WHERE boards.user_id = $1;`
	db.DBX.Select(&boards, sql, user.Id)
	return &boards
}

func (user User) GetBoard(slug string) *BoardJSON {
	board := BoardJSON{}

	sql := `SELECT
      boards.*,
			users.id "owner.id",
			users.name "owner.name",
			users.email "owner.email",
			users.fullname "owner.fullname",
			users.created_at "owner.created_at",
			users.updated_at "owner.updated_at"
    FROM
      boards JOIN users ON boards.user_id = users.id
    WHERE boards.user_id = $1 AND boards.slug = $2
    LIMIT 1;`

	db.DBX.Get(&board, sql, user.Id, slug)

	return &board
}
