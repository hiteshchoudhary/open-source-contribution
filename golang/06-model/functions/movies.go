package functions

import (
	"encoding/json"
	"net/http"
	"workshop/model"
)

// creating a movies variable with values from our Movies model.
var movies = []model.Movies{
	{Id: 1, Name: "KGF", Rating: 10, Year: 2018, ImgUrl: "somerandomurl", Category: "Action", Watched: true},
	{Id: 2, Name: "KGF2", Rating: 8, Year: 2022, ImgUrl: "somerandomurl1", Category: "Action2", Watched: false},
	{Id: 3, Name: "Avator", Rating: 10, Year: 2012, ImgUrl: "somerandomurl3", Category: "Animation", Watched: true},
	{Id: 4, Name: "Avator2", Rating: 9, Year: 2022, ImgUrl: "somerandomurl4", Category: "Thriller", Watched: false},
}

func ListMovies(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(movies)
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