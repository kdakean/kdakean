package templates

import (
	"encoding/json"
	"io/ioutil"
)

const manifestPath = "./public/assets/manifest.json"

func assets(name string) string {
	var obj map[string]*json.RawMessage
	buf, err := ioutil.ReadFile(manifestPath)
	if err != nil {
		panic(err)
	}
	if err := json.Unmarshal(buf, &obj); err != nil {
		panic(err)
	}
	var url string
	if err := json.Unmarshal(*obj[name], &url); err != nil {
		panic(err)
	}
	return url
}
