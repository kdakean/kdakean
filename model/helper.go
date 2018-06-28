package model

import "strings"

func isReferencesError(err error) bool {
	return strings.Contains(err.Error(), "foreign key constraint")
}
