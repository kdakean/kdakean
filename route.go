package main

import (
	"html/template"

	gintemplate "github.com/foolin/gin-template"
	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/controller"
)

func initRoutes() *gin.Engine {
	r := gin.Default()
	r.HTMLRender = gintemplate.New(templateConfig())

	r.GET("/", controller.HomeHandler)

	return r
}

func templateConfig() gintemplate.TemplateConfig {
	return gintemplate.TemplateConfig{
		Root:         "templates",
		Extension:    ".html",
		Master:       "layouts/app",
		Partials:     []string{},
		Funcs:        template.FuncMap{},
		DisableCache: true,
	}
}
