import axios from "axios";
import React,{useEffect,useState} from 'react';
import './event.css';
function Event() {
  const [id,setId] = useState('');
  const [event_type,setEventType] = useState('');
  const [event_location,setEventLocation] = useState('');
  const [event_date,setEventdate]=useState('');
  const [event_budget,setEventbudget] = useState('');
  const [total_members,setTotalmembers] = useState('');
  const [extra_description,setExtradescription] = useState('');
  const [events,setEvents]=useState([]);
  useEffect(()=>{
    Load();
  },[]);
async function Load(){
    const result = await axios.get('http://localhost:8080/api/events');
    setEvents(result.data);
    console.log(result.data);
}async function save(event) {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8080/api/events', {
        event_type: event_type,
        event_location: event_location,
        event_date: event_date,
        event_budget: event_budget,
        total_members:total_members,
        extra_description:extra_description,
    });
    alert('Event Registration Successfully');
    setId('');
    setEventType('');
    setEventLocation('');
    setEventdate('');
    setEventbudget('');
    setTotalmembers('');
    setExtradescription('');
    Load();
  } catch (err) {
    alert('Event Registration Failed');
  }
}  async function editEvent(event) {
    setEventType(event.event_type);
  setEventLocation(event.event_location)
  setEventdate(event.event_date);
  setEventbudget(event.setEventbudget);
  setTotalmembers(event.total_members);
  setExtradescription(event.extra_description);
  setId(event.id);
}  async function deleteEvent(id) {
  await axios.delete('http://localhost:8080/api/events/' + id);
  alert('Event deleted Successfully');
  Load();
}  async function update(event) {
  event.preventDefault();
  try {
    await axios.put('http://localhost:8080/api/events/' + id, {
        event_type: event_type,
        event_location: event_location,
        event_date: event_date,
        event_budget: event_budget,
        total_members:total_members,
        extra_description:extra_description,
    });
    alert('Registration Updated');
    setId('');
    setEventType('');
    setEventLocation('');
    setEventdate('');
    setEventbudget('');
    setTotalmembers('');
    setExtradescription('');
    Load();
  } catch (err) {
    alert('Event Update Failed');
  }
}   return (
  <div id="ev">
  <div id="content">
  <h1>Event Details</h1><hr/>
  <form onSubmit={id ? update : save}>
    <div>
      <label>Event Type:</label>
      <input type="text" value={event_type} onChange={(e) => setEventType(e.target.value)} />
    </div>
    <div>
      <label>Event Location:</label>
      <input type="text" value={event_location} onChange={(e) => setEventLocation(e.target.value)} />
    </div>
    <div>
      <label>Event Date:</label>
      <input type="date" value={event_date} onChange={(e) => setEventdate(e.target.value)} />
    </div>
    <div>
      <label>Event Budget:</label>
      <input type="number" value={event_budget} onChange={(e) => setEventbudget(e.target.value)} />
    </div>
    <div>
      <label>Total Members:</label>
      <input type="number" value={total_members} onChange={(e) => setTotalmembers(e.target.value)} />
    </div>
    <div>
      <label>Extra Description:</label>
      <textarea value={extra_description} onChange={(e) => setExtradescription(e.target.value)}></textarea>
    </div>
    <button type="submit">{id ? 'Update Event' : 'Add Event'}</button>
  </form>
<hr/>
  {/* Displaying the list of events */}
  <ul>
    {events.map(event => (
      <li key={event.id}>
        {event.event_type} - {event.event_location} - {event.event_date}
        <button onClick={() => editEvent(event)}>Edit</button>
        <button onClick={() => deleteEvent(event.id)}>Delete</button>
      </li>
    ))}
  </ul>
  </div>
</div>
  )
}

export default Event