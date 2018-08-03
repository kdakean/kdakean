package boardController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller/router"
	"github.com/kdakean/kdakean/model"
)

func UpdateBoardHandler(c *gin.Context) {
	var b model.Board
	c.Bind(&b)
	b.Slug = c.Param("slug")
	user := router.GetUser(c)
	board, _ := user.UpdateBoard(&b)

	c.JSON(http.StatusCreated, gin.H{
		"board": board,
	})
}
