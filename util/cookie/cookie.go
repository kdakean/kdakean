package cookie

import (
	"fmt"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/securecookie"
	"github.com/kdakean/kdakean/errors"
	"github.com/kdakean/kdakean/model"
)

// TODO: move these to config file
const (
	maxAge     = 604800
	userKey    = "kdakean.user"
	cookieName = "kdakean_session"
)

// TODO: move these to config file
var (
	hashKey  = []byte("v/UaxOceqd5LQTzcwQYLdKrw5SOZdMCQ")
	blockKey = []byte("JgrfvxFjcbd5kpZOsu231QY+z01VY5LH")

	cookieHandler = securecookie.New(hashKey, blockKey)
)

func SetLogin(c *gin.Context, user *model.User) error {
	encoded, err := encode(user.Id)
	if err != nil {
		fmt.Println(err)
		return errors.ErrInternalServer
	}
	c.SetCookie(cookieName, encoded, maxAge, "/", "", false, true)
	return nil
}

func CurrentUser(c *gin.Context) (*model.User, error) {
	cookieVal, err := c.Cookie(cookieName)
	if err != nil {
		return nil, errors.ErrInternalServer
	}
	userId, err := decode(cookieVal)
	if err != nil {
		return nil, err
	}
	userInContext := getUserInContext(c, userId)
	if userInContext.Id > 0 && userInContext.Id == userId {
		return userInContext, nil
	}
	user, err := model.FindUserById(userId)
	if err != nil {
		return nil, err
	}
	setUserInContext(c, user)
	return user, nil
}

func encode(userId uint) (string, error) {
	validUntil := time.Now().Add(time.Duration(maxAge) * time.Second)

	values := map[string]string{
		"u": strconv.FormatUint(uint64(userId), 10),
		"t": strconv.FormatInt(validUntil.Unix(), 10),
	}
	return cookieHandler.Encode(cookieName, values)
}

func decode(cookieVal string) (uint, error) {
	values := make(map[string]string)
	if err := cookieHandler.Decode(cookieName, cookieVal, &values); err != nil {
		fmt.Println(err)
		return 0, errors.ErrInternalServer
	}
	expireIn, err := strconv.ParseInt(values["t"], 10, 0)
	if err != nil {
		fmt.Println(err)
		return 0, errors.ErrInternalServer
	}
	userId, err := strconv.ParseUint(values["u"], 10, 0)
	if err != nil {
		fmt.Println(err)
		return 0, errors.ErrInternalServer
	}
	if time.Now().After(time.Unix(expireIn, 0)) {
		return 0, errors.ErrSessionExpired
	}
	return uint(userId), nil
}

func getUserInContext(c *gin.Context, userId uint) *model.User {
	if val, ok := c.Get(userKey); ok {
		return val.(*model.User)
	}
	return &model.User{}
}

func setUserInContext(c *gin.Context, user *model.User) {
	c.Set(userKey, user)
}
