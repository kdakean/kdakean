package userController

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/locale"
	"github.com/kdakean/kdakean/model"
	"github.com/kdakean/kdakean/templates"
	"github.com/kdakean/kdakean/util/cookie"
	"github.com/kdakean/kdakean/util/messages"
)

func GetSignInHandler(c *gin.Context) {
	T := locale.GetTfunc(c)
	vars := templates.CommonVariables(c)
	vars.Set("Title", T("sign_in"))

	f := &model.LoginForm{}
	if val, ok := c.Get("loginForm"); ok {
		f = val.(*model.LoginForm)
	}
	vars.Set("Form", f)

	templates.Render(c, "user/sign_in.jet.html", vars)
}

func PostSignInHandler(c *gin.Context) {
	var f model.LoginForm
	c.Bind(&f)

	msg := messages.GetMessages(c)
	user, err := model.FindUserByLoginForm(&f)
	if err != nil {
		msg.ErrorT(err)
		c.Set("loginForm", &f)
		GetSignInHandler(c)
		return
	}
	if err := cookie.SetLogin(c, user); err != nil {
		msg.ErrorT(err)
		GetSignInHandler(c)
		return
	}
	c.Redirect(http.StatusMovedPermanently, "/")
}
