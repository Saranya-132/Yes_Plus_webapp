import React from 'react';
import Event from './Events/event';
import Eventform from './Events/eventform';
import Social2 from './Events/social2';

var username = localStorage.getItem('email');

const Events = () =>{
    return(
        <div>
             <Event />
             <Social2 />
        </div>
    );
};

export default Events;