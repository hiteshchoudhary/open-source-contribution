package router

import (
	"workshop/functions"

	"github.com/go-chi/chi/v5"
)

func Router() *chi.Mux {
	router := chi.NewRouter()
	
	// Create a route for the "/movies" path and route it to the moviesRouter.
	// This allows requests to "/movies" and its sub-paths to be handled by the moviesRouter.
	router.Route("/movies", moviesRouter)
	return router
}

func moviesRouter(router chi.Router){
	// eg: localhost:3000/movies/
	router.Get("/",functions.ListMovies)
	// eg: localhost:3000/movies/3
	router.Get("/{id}",functions.GetMovie)
	// eg: localhost:3000/movies/3 with post method
	router.Post("/{id}", functions.UpdateMovie)
	// eg: localhost:3000/movies/add with post method
	router.Post("/add", functions.AddMovie)
}