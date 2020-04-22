import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [ time, setTime ] = useState(new Date());

    useEffect(() => {
        const tickTock = () => setTime(new Date());
        const timerId = setInterval(tickTock, 1000);

        return () => clearInterval(timerId);
    }, [time]);

    return (
        <>
            <div className="time">
                <i className="fa fa-clock-o clockIcon" aria-hidden="true"></i>
                <p>{time.toLocaleTimeString()}</p>
            </div>
            <span className="verticalLine">|</span>
            <div className="date">
                <i className="fa fa-calendar calendarIcon" aria-hidden="true"></i>
                <p>{time.toLocaleDateString()}</p>
            </div>
        </>
    );
}
