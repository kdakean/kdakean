package boardController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller/router"
)

func BoardsListHandler(c *gin.Context) {
	user := router.GetUser(c)
	boards := user.GetBoardsList()

	c.JSON(http.StatusCreated, gin.H{
		"boards": boards,
	})
}
