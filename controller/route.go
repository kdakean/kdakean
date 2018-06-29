package controller

import (
	"net/http"

	"github.com/justinas/nosurf"
	_ "github.com/kdakean/kdakean/controller/board"
	_ "github.com/kdakean/kdakean/controller/home"
	_ "github.com/kdakean/kdakean/controller/list"
	"github.com/kdakean/kdakean/controller/router"
	_ "github.com/kdakean/kdakean/controller/user"
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
}

func csrfErrHandler(res http.ResponseWriter, req *http.Request) {
	http.Error(res, "Invalid CSRF tokens", http.StatusBadRequest)
}
