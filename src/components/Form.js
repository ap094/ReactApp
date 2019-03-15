import React from "react";

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input class="form-control" type="text" name="city" placeholder="City..."/>
                    <input class="form-control" type="text" name="country" placeholder="Country..."/>
                    <button class="btn btn-info">Get Weather</button>
                </form>
           
        )
    }
}

export default Form;