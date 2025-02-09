package functions

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)




func ListMovies(w http.ResponseWriter, _ *http.Request){
	w.Header().Set("Content-Type","application/json")
	filter := bson.D{}
	cur, _ := MovieColl.Find(context.TODO(), filter)
	var result []primitive.M
	_ = cur.All(context.TODO(), &result)
	json.NewEncoder(w).Encode(result)
}

func GetMovie(w http.ResponseWriter, r *http.Request) {
	id, _ := primitive.ObjectIDFromHex(chi.URLParam(r, "id"))
	var result primitive.M;
	filter := bson.M{"_id": id}
	err := MovieColl.FindOne(context.Background(), filter).Decode(&result)
	if err == mongo.ErrNoDocuments {
		fmt.Println("No document found")
	}
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(result)
}

func UpdateMovie(w http.ResponseWriter, r *http.Request){
	id, _ := primitive.ObjectIDFromHex(chi.URLParam(r, "id"))
	var body map[string]interface{}
	_ = json.NewDecoder(r.Body).Decode(&body)
	
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"watched": body["watched"]}}
	result, _ := MovieColl.UpdateOne(context.Background(), filter, update)
	json.NewEncoder(w).Encode(result)
	w.Write([]byte("Movie is now updated"))
}

func AddMovie(w http.ResponseWriter, r *http.Request){
	var newMovie map[string]interface{}
	_ = json.NewDecoder(r.Body).Decode(&newMovie)
	if(newMovie["Name"] == "") {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	result, _ := MovieColl.InsertOne(context.TODO(), newMovie)

	fmt.Printf("Inserted document with _id: %v\n", result.InsertedID)
}