package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/joho/godotenv"
	"github.com/kdakean/kdakean/db"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
	}

	if err := db.InitDB(); err != nil {
		log.Fatal(err)
	}

	s := &http.Server{
		Addr:         ":8080",
		Handler:      initRoutes(),
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
	}

	fmt.Println("Listening on ", "8080")
	if err := s.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
