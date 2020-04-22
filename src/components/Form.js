import React from 'react';

export default function Form(props) {
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.getWeather(
            event.target.elements.city.value,
            event.target.elements.countryCode.value,
        );
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input className="form-control" type="text" name="city" placeholder="city"/>
            <input className="form-control" type="text" name="countryCode" placeholder="country code (e.g. hr)"/>
            <button className="btn btn-success">Get Weather</button>
        </form>
    );
}
