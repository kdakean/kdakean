package controller

import (
	"github.com/justinas/nosurf"
	_ "github.com/kdakean/kdakean/controller/board"
	"github.com/kdakean/kdakean/controller/home"
	_ "github.com/kdakean/kdakean/controller/list"
	"github.com/kdakean/kdakean/controller/router"
	_ "github.com/kdakean/kdakean/controller/user"
	"net/http"
)

var CSRFHandler *nosurf.CSRFHandler

func init() {
	CSRFHandler = nosurf.New(router.Get())
	CSRFHandler.ExemptRegexp("/api(?:/.+)*")
	CSRFHandler.SetFailureHandler(http.HandlerFunc(csrfErrHandler))
	CSRFHandler.SetBaseCookie(http.Cookie{
		Path:   "/",
		MaxAge: nosurf.MaxAge,
	})

	router.Get().NoRoute(home.HomeHandler)
}

func csrfErrHandler(res http.ResponseWriter, req *http.Request) {
	http.Error(res, "Invalid CSRF tokens", http.StatusBadRequest)
}
