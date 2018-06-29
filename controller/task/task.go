package taskController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/model"
	"github.com/kdakean/kdakean/util/messages"
	"github.com/kdakean/kdakean/util/validator"
)

func TaskCreateHandler(c *gin.Context) {
	var t model.Task
	c.Bind(&t)

	msg := messages.GetMessages(c)
	if err := validator.Validate(&t, msg); err != nil {
		c.JSON(http.StatusBadRequest, msg)
		return
	}

	task, err := model.CreateTask(&t)
	if err != nil {
		// msg.AddErrorT("user_id", err.Error())
		c.JSON(http.StatusBadRequest, msg)
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"task": task,
	})
}
