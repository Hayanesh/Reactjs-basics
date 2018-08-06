import React, {Component} from "react";
import { render } from "react-dom";
import { Header} from "./components/Header.";
import { Home } from "./components/Home";

class App extends Component{
    constructor() {
        super();
        this.state = {
          homeLink : "Home",
          homeMounted: true
        };
    }

    onChangeHomeMounted(){
        this.setState({
            homeMounted : !this.state.homeMounted
        });
    }

    onGreet() {
        alert("Hello!");
    }

    onChangeLink(newName)
    {
        this.setState({
            homeLink: newName
        });
    }
    render() {
        let homeCmp = "";
        if(this.state.homeMounted){
            homeCmp = (<Home
                    name={"Max"}
                    age={27}
                    greet={this.onGreet}
                    changelink = {this.onChangeLink.bind(this)}
                    initialLink = {this.state.homeLink}/>);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount</button>
                    </div>
                </div>
            </div>
        );
    }
}
render(<App/>,window.document.getElementById("app"));
