import React from "react";
import Series from '../components/tidbiscomponents';
//import "./home.css";
import Http from "../lib/tidbisapi/";


class Home extends React.Component {
    state = {
        title: "Marvel series API made by students",
        series: [],
    };

    componentDidMount () {
        this.get_data();
    };

    get_data = async () => {
        const response = await Http.instance.get_series()
        console.log(response)
        this.setState({series: response})
    };

    render() {
        return (
            <article className="top">
                <h1 className="title">{this.state.title}</h1>
                <div className="Series">
                <h4 className="name">TIDBIS41M <br></br><br></br> Service oriented web applications</h4>
                    {this.state.Series.map((series) => <Series Series={series} />)}
                    
                </div>
            </article>
        );
    }
}

export default Home;