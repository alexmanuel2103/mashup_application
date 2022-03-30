const URL = "https://mashup-series-api.herokuapp.com/series/"

/*
Developed by: Manuel Barraza, Luis Villa and Derek Alvarado
Description: Connection to the API
Version: 1.0
*/

class Http{
    static instance = new Http()

    get_series = async () =>{
        try {
            const request = await fetch(`${URL}`);
            const response = await request.json();
            return response.results
            
        } catch (err){
            throw Error(err);
        }
    }
}

export default Http;