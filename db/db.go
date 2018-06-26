package db

import (
	"database/sql"

	"bitbucket.org/liamstask/goose/lib/goose"
	sq "github.com/Masterminds/squirrel"
	"github.com/jmoiron/sqlx"
)

var (
	DB  *sql.DB
	DBX *sqlx.DB
	SQ  sq.StatementBuilderType
)

func InitDB() error {
	conf, err := goose.NewDBConf("db", "development", "")
	if err != nil {
		return err
	}

	db, err := goose.OpenDBFromDBConf(conf)
	if err != nil {
		return err
	}

	DB = db
	DBX = sqlx.NewDb(db, conf.Driver.Name)
	SQ = sq.StatementBuilder.PlaceholderFormat(sq.Dollar)

	return DBX.Ping()
}
