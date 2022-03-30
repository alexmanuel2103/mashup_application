import React from "react";
import Series from '../components/tidbiscomponents';
//import "./home.css";
import Http from "../lib/tidbisapi/";

    class Home extends React.Component{
        state={
            Series:[]
        }
        
        render(){
            return(
                <React.Fragment>
                     <body>
                         <div className="title">
                         <h1>Custom made Marvel series API</h1>
                         <h2>Teammates: Derek Alvarado, Manuel Barraza, Luis Hernández, Salvador Perez, Luis Villa</h2>
                         <h3>Group: TIDBIS41M</h3>
                         </div>
                            <div className="character_boxes">
                            {this.state.Series.map((series) => 
                                {return  <Series series = {series}/>
                                })}
                            </div>
                     </body>
                </React.Fragment> 
            )
        }

export default Home;