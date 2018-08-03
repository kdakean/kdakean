package boardController

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DeleteBoardHandler(c *gin.Context) {

	// boards := user.GetBoards()

	c.JSON(http.StatusCreated, gin.H{
		"board": "board",
	})
}
