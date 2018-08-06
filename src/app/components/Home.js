import React from "react";

export  class Home extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            age : props.age,
            status : 0,
            homelink : props.initialLink
        };

        setTimeout(() =>{
            this.setState({
                status : 1
            })
        }, 3000);
        console.log("Constructor");
    }

    componentWillMount()
    {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update", nextProps, nextState);
        if(nextState.status === 1)
        {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }


    onMakeOlder()
    {
        this.setState({
            age : this.state.age + 3
        });
    }
    changeLink()
    {
        this.props.changelink(this.state.homelink);
    }

    handleChangeLink(event)
    {
        this.setState({
            homelink : event.target.value
        });
    }



    render()
    {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name} , Your age is {this.state.age}</p>
                <p>Status {this.state.status}</p>
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homelink} onChange={(event) => this.handleChangeLink(event)}/>
                <button className="btn btn-primary" onClick={this.changeLink.bind(this)}>Change Link</button>
            </div>
        );
    }
}


