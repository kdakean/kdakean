package router

import (
	"sync"

	"github.com/gin-gonic/gin"
)

var (
	once sync.Once
	r    *gin.Engine
)

func Get() *gin.Engine {
	once.Do(func() {
		r = gin.Default()
	})
	return r
}
