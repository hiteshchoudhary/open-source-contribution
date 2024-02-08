package functions

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"workshop/model"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)



func ListMovies(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application/json")

	// set filter criteria for data query from mongodb which is empty here
	// meaning no specific filtering criteria have been set yet.
	filter := bson.D{}

	// quering movies collection with find method 
	cur, _ := MovieColl.Find(context.TODO(), filter)
	var result []primitive.M

	// load the bson document to json in result variable
	_ = cur.All(context.TODO(), &result)

	// finally send the result the w response writer
	json.NewEncoder(w).Encode(result)
}

func GetMovie(w http.ResponseWriter, r *http.Request) {
	// need to decode from hex to integer
	id, _ := primitive.ObjectIDFromHex(chi.URLParam(r, "id"))
	var result primitive.M;

	// filter mongo movies collection with id 
	filter := bson.M{"_id": id}

	// quering movices collection with one that matches with id
	err := MovieColl.FindOne(context.Background(), filter).Decode(&result)

	// if no documents found print debug line
	if err == mongo.ErrNoDocuments {
		fmt.Println("No document found")
	}
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(result)
}

func UpdateMovie(w http.ResponseWriter, r *http.Request){
	id, _ := primitive.ObjectIDFromHex(chi.URLParam(r, "id"))
	var body model.Movies
	_ = json.NewDecoder(r.Body).Decode(&body)
	
	filter := bson.M{"_id": id}

	// set a variable update that we have to change in mongodb
	update := bson.M{"$set": bson.M{"watched": body.Watched}}

	// execute the mongo updateone query to change the document data
	result, _ := MovieColl.UpdateOne(context.Background(), filter, update)

	json.NewEncoder(w).Encode(result)
	w.Write([]byte("Movie is now updated"))
}

func AddMovie(w http.ResponseWriter, r *http.Request){
	// creating an empty instance of movies model.
	var newMovie model.Movies

	// load user untered data in newMovie variable
	_ = json.NewDecoder(r.Body).Decode(&newMovie)

	// to make sure movie name is not empty
	if(newMovie.Name == "") {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// insert the newMovie in mongo db movies collection
	result, _ := MovieColl.InsertOne(context.TODO(), newMovie)

	fmt.Printf("Inserted document with _id: %v\n", result.InsertedID)
}