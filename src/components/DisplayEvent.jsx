import axios from "axios";
import React,{useEffect,useState} from 'react';
import './DisplayStyle.css';

function DisplayEvent() {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
      Load();
    },[]);
  async function Load(){
      const result = await axios.get('http://localhost:8080/api/events');
      setEvents(result.data);
      console.log(result.data);
  } 
    async function deleteEvent(id) {
    await axios.delete('http://localhost:8080/api/events/' + id);
    alert('Event deleted Successfully');
    Load();
  }  
  return (
    
    <ul className="event-list">
      {events.map(event => (
        <li key={event.id} className="event-item">
          <span className="event-info">
            {event.event_type} at {event.event_location} on {(event.event_date)}
          </span>
          <div className="event-actions">
        
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
            
          </div>
        </li>
      ))}
    </ul>
  );
}
  
  export default DisplayEvent