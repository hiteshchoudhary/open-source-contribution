package main

import (
	"net/http"
)

func main() {
	// Register a function "helloworld" to handle requests ("/helloworld") URL path only.
	http.HandleFunc("/helloworld", helloworld)
	// similarly will route for /welcome url path only
	http.HandleFunc("/welcome", welcome)
	http.ListenAndServe(":3000",nil)
}

func helloworld(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Hello worlds"))
}
func welcome(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Weolcome to go lang"))
}