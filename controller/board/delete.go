package boardController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller/router"
)

func DeleteBoardHandler(c *gin.Context) {
	user := router.GetUser(c)
	boardId := user.DeleteBoard(c.Param("slug"))

	c.JSON(http.StatusCreated, gin.H{
		"board_id": boardId,
	})
}
