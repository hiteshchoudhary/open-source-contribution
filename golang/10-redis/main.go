package main

import (
	"net/http"
	"workshop/router"
)

func main(){
	r := router.Router()
	http.ListenAndServe(":3000", r)


}

