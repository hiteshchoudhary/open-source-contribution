package main

import (
	// core package for building http servers and clients
	"net/http"
)

func main() {
	// Register a function "helloWorld" to handle requests at the root ("/") URL path.
	http.HandleFunc("/", helloWorld)
	// Start an HTTP server on port 3000, passing "nil" as the handler to use the default router.
	http.ListenAndServe(":3000",nil)
}


func helloWorld(w http.ResponseWriter, r *http.Request){
	// Write function writes the data to the connection as part of an HTTP reply.
	w.Write([]byte("Hello world"))
}