package functions

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/redis/go-redis/v9"
)

var leaderboardKey = "leaderboard"

type RedisMovie struct {
	Id string `bson:"id" binding:"required"`
	Rating   int `json:"points" binding:"required"`
}

func AddMovieInRedis(movie RedisMovie){
	fmt.Print("reached here")
	member := &redis.Z{
		Score: float64(movie.Rating),
		Member: movie.Id,
	}

	pipe := redisClient.TxPipeline()
	pipe.ZAdd(context.TODO(), leaderboardKey, *member)
	pipe.Exec(context.TODO())

}

func Top10(w http.ResponseWriter, r *http.Request) {
	result, _ :=  redisClient.ZRevRange(context.TODO(), leaderboardKey, 0, 9).Result()
	json.NewEncoder(w).Encode(result)
}
