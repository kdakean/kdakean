package errors

import gerrors "errors"

var (
	ErrInternalServer       = gerrors.New("errors_internal_server")
	ErrInvalidCredential    = gerrors.New("errors_invalid_credential")
	ErrSessionExpired       = gerrors.New("errors_session_expired")
	ErrRecordNotFound       = gerrors.New("errors_record_not_found")
	ErrAlreadyAuthenticated = gerrors.New("errors_already_authenticated")
	ErrUnauthenticated      = gerrors.New("errors_unauthenticated")
)
