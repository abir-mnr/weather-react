import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat: ''};
    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => console.log(err.message)
        );
        return (
            <div>latitude: {this.state.lat}</div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));