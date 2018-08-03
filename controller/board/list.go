package boardController

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func BoardsListHandler(c *gin.Context) {

  // boards := user.GetBoards()

  c.JSON(http.StatusCreated, gin.H{
    "boards": "boards",
  })
}
