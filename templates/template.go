package templates

import (
	"net/http"

	"github.com/CloudyKit/jet"
	"github.com/gin-gonic/gin"
	"github.com/kdakean/kdakean/locale"
)

var view = jet.NewHTMLSet("./templates")

func CommonVariables(c *gin.Context) jet.VarMap {
	variables := make(jet.VarMap)
	variables.Set("T", locale.GetTfunc(c))
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
