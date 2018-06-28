package userController

import (
	"github.com/kdakean/kdakean/controller/middleware"
	"github.com/kdakean/kdakean/controller/router"
)

func init() {
	r := router.Get()

	g := r.Group("/")
	g.Use(middleware.NoAuthMiddleware)
	{
		g.GET("sign_in", GetSignInHandler)
		g.POST("sign_in", PostSignInHandler)

		g.GET("sign_up", GetSignUpHandler)
		g.POST("sign_up", PostSignUpHandler)
	}
}
