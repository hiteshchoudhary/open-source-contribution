package model

type Movies struct {
	// _id to map to Id sincle since mongodb default created _id 
	Id int `bson:"_id,omitempty"`
	Name string 
	Rating int 
	Year int 
	ImgUrl string 
	Category string 
	Watched bool 
}
