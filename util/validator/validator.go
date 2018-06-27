package validator

import (
	"fmt"

	"github.com/asaskevich/govalidator"
	"github.com/kdakean/kdakean/util/messages"
)

func init() {
	registerDBValidators()
	registerStringValidators()
}

func Validate(s interface{}, msg *messages.Messages) error {
	_, errs := govalidator.ValidateStruct(s)
	if errs == nil {
		return nil
	}

	if verrs, ok := errs.(govalidator.Errors); ok {
		for _, err := range verrs {
			if verr, ok := err.(govalidator.Error); ok {
				addTranslateMessage(msg, verr)
			} else {
				msg.Error(err)
			}
		}
	} else {
		msg.Error(errs)
	}

	return errs
}

func addTranslateMessage(msg *messages.Messages, err govalidator.Error) {
	key := fmt.Sprintf("errors_field_%s", err.Validator)
	msg.AddErrorT(err.Name, key)
}
