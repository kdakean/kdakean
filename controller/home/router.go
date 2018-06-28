package home

import "github.com/kdakean/kdakean/controller/router"

func init() {
	router.Get().GET("/", HomeHandler)
}
