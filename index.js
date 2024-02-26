console.log("LMAO")
// const { default: Axios } = require('axios');
const axios = require('axios').default;
require('dotenv').config();
let url = process.env.URL_API;
console.log(url);
class ApiService{
    constructor(){}
    
    async getDataFromApi() { 
        try {
            let response = await axios.get(`${url}/api/data`);
             return response.data;
         } catch (error) {
             console.log(error);
         }
    };
  
    // Add a new item to the database
    addItemToDb = async function (){
        try {
            let response = await axios.post(`${url}/api/data`, {
                name: "Test",
                description: "Test"
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
