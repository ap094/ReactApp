import React, { Component } from 'react';


class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
    
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state; 
    
        return (
            <form className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} className="form-control"/>
                <label>Job:</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange} className="form-control"/>
                 <input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} className="btn btn-primary"/>
            </form>
        );
    }
}

export default Form;