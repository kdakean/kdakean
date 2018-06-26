package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/templates"
)

func HomeHandler(c *gin.Context) {
	variables := templates.CommonVariables(c)
	variables.Set("Title", "Hello")

	templates.Render(c, "hello.jet.html", variables)
}
