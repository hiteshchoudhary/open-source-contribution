package functions

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"workshop/model"

	"github.com/go-chi/chi/v5"
)


var movies = []model.Movies{
	{Id: 0, Name: "KGF", Rating: 10, Year: 2018, ImgUrl: "somerandomurl", Category: "Action", Watched: false},
	{Id: 3, Name: "KGF2", Rating: 8, Year: 2022, ImgUrl: "somerandomurl1", Category: "Action2", Watched: false},
	{Id: 5, Name: "Avator", Rating: 10, Year: 2012, ImgUrl: "somerandomurl3", Category: "Animation", Watched: false},
	{Id: 99, Name: "Avator2", Rating: 9, Year: 2022, ImgUrl: "somerandomurl4", Category: "Thriller", Watched: false},
}

func ListMovies(w http.ResponseWriter, r *http.Request){
	// set header in w writer object to specify response is a json.
	w.Header().Set("Content-Type","application/json")
	// encode the movies data into json format and then write to http w writer object.
	json.NewEncoder(w).Encode(movies)
}

func GetMovie(w http.ResponseWriter, r *http.Request) {
	// when user its the url eg: localhost:3000/movies/3
	// then extract the id from the url and store in id variable
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	
	// variable to store index of movie id that user has passed
	var resultId int;
	
	// loop through the array to find movie index of movie.Id  matches with id from url
	for index , movie	:= range movies {
		if movie.Id == id {
			// moivie.Id= 3 and localhost:3000/movies/3 matcher return the index which here is 1
			resultId = index
			break
		}
	}
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(movies[resultId])
}

func UpdateMovie(w http.ResponseWriter, r *http.Request){
	id, _ := strconv.Atoi(chi.URLParam(r, "id"))
	// declaring a variable body of type Movies that we have created in model.go file.
	var body model.Movies
	
	// Load the body that user has passed to body variable.
	_ = json.NewDecoder(r.Body).Decode(&body)
	
	// loop through the array of movies to find the matching movie id.
	for index, movie := range movies {
		if movie.Id == id {
			// only update the watched in movie variable
			movie.Watched = body.Watched

			// update the movie value in the same index.
			movies[index] = movie
			break
		}
	}
	w.Write([]byte("Movie is now watched"))
}

func AddMovie(w http.ResponseWriter, r *http.Request){
	// declaring a variable newMovie of type Movies with default values.
	var newMovie model.Movies

	// load the user entered body in newMovie variable
	_ = json.NewDecoder(r.Body).Decode(&newMovie)

	// check if the given movie is with id ==0 or the name is empty
	if(newMovie.Id == 0 || newMovie.Name == "") {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// check if any existing movie is not with same id
	for _, movie := range movies {
		if newMovie.Id == movie.Id {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
	}
	// finally add the newMovie in the movies variable
	movies = append(movies, newMovie)
	fmt.Print(newMovie)
}