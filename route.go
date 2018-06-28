package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/justinas/nosurf"
	"github.com/kdakean/kdakean/controller"
)

func initRoutes() *nosurf.CSRFHandler {
	r := gin.Default()

	r.GET("/", controller.HomeHandler)
	r.GET("/sign_up", controller.GetSignUpHandler)
	r.POST("/sign_up", controller.PostSignUpHandler)

	csrf := nosurf.New(r)
	csrf.ExemptRegexp("/api(?:/.+)*")
	csrf.SetFailureHandler(http.HandlerFunc(csrfErrHandler))
	csrf.SetBaseCookie(http.Cookie{
		Path:   "/",
		MaxAge: nosurf.MaxAge,
	})

	return csrf
}

func csrfErrHandler(res http.ResponseWriter, req *http.Request) {
	http.Error(res, "Invalid CSRF tokens", http.StatusBadRequest)
}
