package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	// here we are creating chi router instance
	router := chi.NewRouter()
	// Adding a request logging middleware to the router.
	router.Use(middleware.Logger)
	// registering a function helloworld for the route path "/"
	router.Get("/", helloWorld)
	

	http.ListenAndServe(":3000", router)
}
func helloWorld(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("hello world"))
}