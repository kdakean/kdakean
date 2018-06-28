package boardController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/model"
	"github.com/kdakean/kdakean/util/messages"
	"github.com/kdakean/kdakean/util/validator"
)

func PostBoardHandler(c *gin.Context) {
	var b model.Board
	c.Bind(&b)

	msg := messages.GetMessages(c)
	if err := validator.Validate(&b, msg); err != nil {
		c.JSON(http.StatusBadRequest, msg)
		return
	}

	board, err := model.CreateBoard(&b)
	if err != nil {
		msg.AddErrorT("user_id", err.Error())
		c.JSON(http.StatusBadRequest, msg)
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"board": board,
	})
}
