import React from "react";

class Form extends React.Component{

    render(){
        return(
            <form onSubmit = {this.props.loadWeather}>
                <input className="form-control" type="text" name="city" placeholder="city"/>
                <input className="form-control" type="text" name="country" placeholder="country code (e.g: hr)"/>
                <button className="btn btn-success">Get Weather</button>
            </form>
        )
    }
}

export default Form;