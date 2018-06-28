package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller/router"
	"github.com/kdakean/kdakean/errors"
	"github.com/kdakean/kdakean/util/messages"
)

func NoAuthMiddleware(c *gin.Context) {
	if user := router.GetUser(c); user != nil {
		msg := messages.GetMessages(c)
		msg.ErrorT(errors.ErrAlreadyAuthenticated)
		c.Redirect(http.StatusMovedPermanently, "/")
		return
	}
}
