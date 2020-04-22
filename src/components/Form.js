import React from 'react';

export default function Form(props) {
    return(
        <form onSubmit={props.getWeather} className="form">
            <input className="form-control" type="text" name="city" placeholder="city"/>
            <input className="form-control" type="text" name="country" placeholder="country code (e.g. hr)"/>
            <button className="btn btn-success">Get Weather</button>
        </form>
    )
}
