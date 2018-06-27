package validator

import (
	"regexp"
	"strconv"

	"github.com/asaskevich/govalidator"
)

const minlenRegex = `^minlen\((\d+)\)$`
const maxlenRegex = `^maxlen\((\d+)\)$`

type strComparer func(int, int) bool

func strLenValidator(cmp strComparer) govalidator.ParamValidator {
	return func(val string, params ...string) bool {
		if len(params) != 1 {
			return false
		}

		num, err := strconv.Atoi(params[0])
		if err != nil {
			panic(err.Error())
		}

		return cmp(len([]rune(val)), num)
	}
}

func registerStringValidators() {
	govalidator.ParamTagMap["minlen"] = strLenValidator(func(l, min int) bool {
		return l >= min
	})
	govalidator.ParamTagRegexMap["minlen"] = regexp.MustCompile(minlenRegex)

	govalidator.ParamTagMap["maxlen"] = strLenValidator(func(l, max int) bool {
		return l <= max
	})
	govalidator.ParamTagRegexMap["maxlen"] = regexp.MustCompile(maxlenRegex)
}
