package functions

import (
	"net/http"
)

func ListMovies(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("List of all movies"))
}

func GetMovie(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Get movies by id"))
}

func UpdateMovie(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Update movie by id"))
}

func AddMovie(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Add a movie"))
}