package templates

import (
	"net/http"

	"github.com/CloudyKit/jet"
	"github.com/gin-gonic/gin"
	"github.com/justinas/nosurf"
	"github.com/kdakean/kdakean/locale"
	"github.com/kdakean/kdakean/util/messages"
)

var view = jet.NewHTMLSet("./templates")

func CommonVariables(c *gin.Context) jet.VarMap {
	variables := make(jet.VarMap)
	msg := messages.GetMessages(c)

	variables.Set("T", locale.GetTfunc(c))
	variables.Set("Errors", msg.GetAllErrors())
	variables.Set("Token", nosurf.Token(c.Request))
	variables.Set("assets", assets)

	return variables
}

func Render(c *gin.Context, templateName string, vars jet.VarMap) {
	t, err := view.GetTemplate(templateName)
	if err != nil {
		c.AbortWithError(http.StatusInternalServerError, err)
		return
	}

	if err := t.Execute(c.Writer, vars, nil); err != nil {
		c.AbortWithError(http.StatusInternalServerError, err)
		return
	}
}
