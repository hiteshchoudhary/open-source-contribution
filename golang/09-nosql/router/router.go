package router

import (
	"workshop/functions"

	"github.com/go-chi/chi/v5"
)

func Router() *chi.Mux {
	router := chi.NewRouter()

	router.Route("/movies", moviesRouter)
	return router
}

func moviesRouter(router chi.Router){
	router.Get("/",functions.ListMovies)
	router.Get("/{id}",functions.GetMovie)
	router.Post("/{id}", functions.UpdateMovie)
	router.Post("/add", functions.AddMovie)
}