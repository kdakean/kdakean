package userController

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/locale"
	"github.com/kdakean/kdakean/model"
	"github.com/kdakean/kdakean/templates"
	"github.com/kdakean/kdakean/util/messages"
	"github.com/kdakean/kdakean/util/validator"
)

func GetSignUpHandler(c *gin.Context) {
	T := locale.GetTfunc(c)
	vars := templates.CommonVariables(c)
	vars.Set("Title", T("sign_up"))

	f := &model.RegisterForm{}
	if val, ok := c.Get("form"); ok {
		f = val.(*model.RegisterForm)
	}
	vars.Set("Form", f)

	templates.Render(c, "user/sign_up.jet.html", vars)
}

func PostSignUpHandler(c *gin.Context) {
	var f model.RegisterForm
	c.Bind(&f)

	msg := messages.GetMessages(c)
	err := validator.Validate(&f, msg)
	if err != nil {
		c.Set("form", &f)
		GetSignUpHandler(c)
		return
	}

	user, err := model.CreateUser(&f)
	if err != nil {
		GetSignUpHandler(c)
		return
	}

	fmt.Println(user)

	c.Redirect(http.StatusMovedPermanently, "/")
}
