package functions

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/redis/go-redis/v9"
)

var redisClient *redis.Client

func init() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}
	uri := os.Getenv("REDIS_URI")
	if uri == "" {
		log.Fatal("You must set your 'REDIS_URI' environment variable.")
	}
	opt, err := redis.ParseURL(uri)
	if err != nil {
		panic(err)
	}
	redisClient = redis.NewClient(opt)
	if err := redisClient.Ping(context.TODO()).Err(); err != nil {
		log.Fatal("Error connecting to redis")
 	}
	fmt.Println("Connected to Redis!")
}