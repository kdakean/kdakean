package boardController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller/router"
)

func GetBoardHandler(c *gin.Context) {
	user := router.GetUser(c)
	board := user.GetBoard(c.Param("slug"))
	c.JSON(http.StatusCreated, gin.H{
		"board": board,
	})
}
