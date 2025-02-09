package model

// struct is a composite data type that groups together variables (fields) under a single name
// type keyword is used to define custom types, including struct types.
type Movies struct {
	Id int 
	Name string 
	Rating int 
	Year int 
	ImgUrl string 
	Category string 
	Watched bool
}
