package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/joho/godotenv"
	"github.com/kdakean/kdakean/controller"
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
		ReadTimeout:  30 * time.Second,
		WriteTimeout: 30 * time.Second,
		Handler:      controller.CSRFHandler,
	}

	fmt.Println("Listening on ", "8080")
	if err := s.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
