package listController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/model"
	"github.com/kdakean/kdakean/util/messages"
	"github.com/kdakean/kdakean/util/validator"
)

func ListCreateHandler(c *gin.Context) {
	var l model.List
	c.Bind(&l)

	msg := messages.GetMessages(c)
	if err := validator.Validate(&l, msg); err != nil {
		c.JSON(http.StatusBadRequest, msg)
		return
	}

	list, err := model.CreateList(&l)
	if err != nil {
		// msg.AddErrorT("user_id", err.Error())
		c.JSON(http.StatusBadRequest, msg)
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"list": list,
	})
}
