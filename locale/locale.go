package locale

import (
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/nicksnyder/go-i18n/i18n"
)

func init() {
	files, err := filepath.Glob("locale/*.yaml")
	if err != nil {
		panic(err.Error())
	}

	for _, file := range files {
		i18n.MustLoadTranslationFile(file)
	}
}

func GetTfunc(c *gin.Context) i18n.TranslateFunc {
	return i18n.MustTfunc(c.Query("lang"), "en")
}
