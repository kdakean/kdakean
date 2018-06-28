package router

import (
	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/model"
	"github.com/kdakean/kdakean/util/cookie"
)

func GetUser(c *gin.Context) *model.User {
	user, _ := cookie.CurrentUser(c)
	return user
}
