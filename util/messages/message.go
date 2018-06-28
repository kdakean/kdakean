package messages

import (
	"errors"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/locale"
	"github.com/nicksnyder/go-i18n/i18n"
)

type Messages struct {
	Errors map[string][]string `json:"errors"`
	c      *gin.Context        `json:"-"`
	T      i18n.TranslateFunc  `json:"-"`
}

const messageKey = "kdakean.messages"

func GetMessages(c *gin.Context) *Messages {
	T := locale.GetTfunc(c)

	if val, ok := c.Get(messageKey); ok {
		msg := val.(*Messages)
		msg.c = c
		msg.T = T
		return msg
	}

	msg := &Messages{make(map[string][]string), c, T}
	c.Set(messageKey, msg)
	return msg
}

func (msg *Messages) AddError(name, message string) error {
	if msg.Errors == nil {
		msg.Errors = make(map[string][]string)
	}
	msg.Errors[name] = append(msg.Errors[name], message)
	msg.setMessageInContext()
	return errors.New(message)
}

func (msg *Messages) AddErrorT(name, key string) error {
	return msg.AddError(name, msg.T(key))
}

func (msg *Messages) Error(err error) error {
	return msg.AddError("errors", err.Error())
}

func (msg *Messages) ErrorT(err error) error {
	return msg.AddErrorT("errors", err.Error())
}

func (msg *Messages) GetAllErrors() map[string][]string {
	msg = GetMessages(msg.c)
	return msg.Errors
}

func (msg *Messages) setMessageInContext() {
	msg.c.Set(messageKey, msg)
}
