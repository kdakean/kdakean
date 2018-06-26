package main

import (
	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller"
)

func initRoutes() *gin.Engine {
	r := gin.Default()

	r.GET("/", controller.HomeHandler)

	return r
}
