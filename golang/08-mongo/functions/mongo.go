package functions

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/x/mongo/driver/connstring"
)

// global collection name that will be created in mongodb
const MovieCollName = "movies"

// colletion handler on movies collection
var MovieColl *mongo.Collection

func init() {
	// Read the .env file and load them as environment variables.
	if err := godotenv.Load(); err != nil {
		// if .env file is not found print this msg.
		log.Println("No .env file found")
	}

	// read the MONGODB_URI from the environment variable
	uri := os.Getenv("MONGODB_URI")

	// if still the uri is empty print fatal msg since we cannot proceed further
	if uri == "" {
		log.Fatal("You must set your 'MONGODB_URI' environment variable. See\n\t https://www.mongodb.com/docs/drivers/go/current/usage-examples/#environment-variable")
	}

	// creating a var cluent options that contains all the 
	// details that required to onnect to mongodb.
	clientOptions := options.Client().ApplyURI(uri)

	// connect to mongodb by passing clientoptions
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		panic(err)
	}

	// make a ping to mongodb uri to check if we are able to connect to mongodb
	err = client.Ping(context.Background(), nil)
	if err != nil {
		panic(err)
	}

	// If all able code worked means we are able to connect to mongodb.
	fmt.Println("Connected to MongoDB!")

	// lets use parseandvalidate to get the db name from connection string
	cs, err := connstring.ParseAndValidate(uri)
	if err != nil {
		panic(err)
	}

	// get the db name from connection string that we have passed from uri
	dbName := cs.Database

	// Create a collection handler with the given collection name 
	MovieColl = client.Database(dbName).Collection(MovieCollName)

}