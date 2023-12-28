import React from 'react'
import Navbarpannel from '../pages/navbar'
import Event from './event_m'
import { useState } from 'react';
import DisplayEvent from './DisplayEvent';

const EventComponent = () => {
  const [showDisplayEvent, setShowDisplayEvent] = useState(false);

  return (
    <div>
      <Navbarpannel />
      {!showDisplayEvent ? (
        <>
          <Event />
          <button onClick={() => setShowDisplayEvent(true)}>Display All Events</button>
        </>
      ) : (
        <DisplayEvent />
      )}
    </div>
  );
};

export default EventComponent;
