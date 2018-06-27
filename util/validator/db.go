package validator

import (
	"regexp"

	"github.com/asaskevich/govalidator"
	"github.com/kdakean/kdakean/db"
)

const uniqueRegex = `^unique\((.*)\|(.*)\)$`

func uniqueValidator(val string, params ...string) bool {
	if len(params) != 2 {
		return false
	}

	table := params[0]
	colume := params[1]

	cond := make(map[string]interface{})
	cond[colume] = val
	sql, args, err := db.SQ.Select("COUNT(*)").From(table).Where(cond).ToSql()
	if err != nil {
		panic(err.Error())
	}

	var count int
	if err := db.DBX.QueryRow(sql, args...).Scan(&count); err != nil {
		panic(err.Error())
	}

	return count == 0
}

func registerDBValidators() {
	govalidator.ParamTagMap["unique"] = uniqueValidator
	govalidator.ParamTagRegexMap["unique"] = regexp.MustCompile(uniqueRegex)
}
