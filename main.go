package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
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
