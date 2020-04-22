import React from 'react';

export default function Form(props) {
    const onFormSubmit = (event) => {
        event.preventDefault();
        const city = event.target.elements.city;
        const countryCode = event.target.elements.countryCode;
        props.getWeather(city.value, countryCode.value);
    }

    const onFormReset = () => {
        document.getElementById('city').value = '';
        document.getElementById('countryCode').value = '';
        props.resetForm();
    }

    return (
        <>
            <form onSubmit={onFormSubmit} className="form">
                <input id="city" className="form-control" type="text" name="city" placeholder="city"/>
                <input id="countryCode" className="form-control" type="text" name="countryCode" placeholder="country code (e.g. hr)"/>
                <button className="btn btn-success">Get Weather</button>
            </form>
            <button className="resetBtn btn btn-danger" onClick={onFormReset}>
                <i className="fa fa-refresh refreshIcon" aria-hidden="true"></i>
                Reset
            </button>
        </>
    );
}
