package boardController

import (
	"github.com/kdakean/kdakean/controller/middleware"
	"github.com/kdakean/kdakean/controller/router"
)

func init() {
	r := router.Get()

	g := r.Group("/api", middleware.APIAuthMiddleware)
	{
		g.POST("/boards", PostBoardHandler)
    g.GET("/boards", BoardsListHandler)
    g.GET("/boards/:slug", GetBoardHandler)
    g.PUT("/boards/:slug", UpdateBoardHandler)
    g.DELETE("/boards/:slug", DeleteBoardHandler)
	}
}
