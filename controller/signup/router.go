package signup

import "github.com/kdakean/kdakean/controller/router"

func init() {
	router.Get().GET("/sign_up", GetSignUpHandler)
	router.Get().POST("/sign_up", PostSignUpHandler)
}
