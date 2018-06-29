package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller/router"
)

func APIAuthMiddleware(c *gin.Context) {
	if user := router.GetUser(c); user == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"status": "unauthorized", "errors": []string{"You need to signed to continue"}})
		c.Abort()
		return
	}
}
