import React from "react";
import Http from "../../lib/tidbisapi/SeriesApi";
//import { Link } from "react-router-dom"
//Add a stylesheet later
/*
Developed by: Manuel Barraza and Luis Villa
Group: TIDBIS41M
Details: React component for mashup application
Version: 1.0
*/

/*const fetchSeries= async() => {
    const Series= await Http.instance.get_series();
console.log(Series)
 }*/


 
 //   componentDidMount = () =>{
 //   this.getData(URL)
 //   }
   

//se manda a llamar a series home
const Series = () =>{
    //const { series } = props
    const getData = async(api_url) =>{
        const response = await Http.instance.get_series()
     //   this.setState({series: response.data})
//        console.log(response)
        }
        getData();
    return (
        <React.Fragment>
               <div>
                   <h1>Hola mundo</h1>
               </div>
        </React.Fragment>
    );
}

export default Series;