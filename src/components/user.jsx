import axios from "axios";
import React,{useEffect,useState} from 'react';
import './user.css';
function User() {
  const [id,setId] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [age,setAge]=useState('');
  const [address,setAddress] = useState('');
  const [contact_number,setContact_number] = useState('');
  const [Social_media,setSocial_media] = useState('');
  const [website,setWebsite] = useState('');
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    Load();
  },[]);
async function Load(){
    const result = await axios.get('http://localhost:8080/api/users');
    setUsers(result.data);
    console.log(result.data);
}async function save(event) {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8080/api/users', {
      firstName: firstName,
      lastName: lastName,
      address: address,
      age: age,
      Social_media:Social_media,
      website:website,
      contact_number:contact_number,
    });
    alert('User Registration Successfully');
    // other code
    setId('');
    setFirstName('');
    setLastName('');
    setAddress('');
    setAge('');
    setSocial_media('');
    setContact_number('');
    setWebsite('');
    Load();
  } catch (err) {
    alert('User Registration Failed');
  }
}  async function editUser(user) {
  setFirstName(user.firstName);
  setLastName(user.lastName);
  setAddress(user.address);
  setAge(user.age);
  setContact_number(user.contact_number);
  setWebsite(user.website);
  setSocial_media(user.Social_media);
  setId(user.id);
}  async function deleteUser(id) {
  await axios.delete('http://localhost:8080/api/users/' + id);
  alert('User deleted Successfully');
  Load();
}  async function update(event) {
  event.preventDefault();
  try {
    await axios.put('http://localhost:8080/api/users/' + id, {
      firstName: firstName,
      lastName: lastName,
      address: address,
      age :age,
      Social_media:Social_media,
      website:website,
      contact_number:contact_number,
    });
    alert('Registration Updated');
    setId('');
    setFirstName('');
    setLastName('');
    setAddress('');
    setAge('');
    setContact_number('');
    setSocial_media('');
    setWebsite('');
    Load();
  } catch (err) {
    alert('User Update Failed');
  }
  
}  return (
  <div id="us">
  <h1 id="content">
    User Registration Form
  </h1>
  <div id="content">
    <form className="mb-5">
      <div className="row">
        {/* Form Fields */}
        <div className="col-md-6 mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="col-12 mb-3">
          <label>Address</label>
          <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Age</label>
          <input type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Contact Number</label>
          <input type="text" className="form-control" value={contact_number} onChange={(e) => setContact_number(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Social Media Account</label>
          <input type="text" className="form-control" value={Social_media} onChange={(e) => setSocial_media(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
          <label>Website</label>
          <input type="text" className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
      </div>
      {/* Buttons */}
      <div className="text-center">
        <button className="btn btn-primary me-2" onClick={save}>Register</button>
        <button className="btn btn-warning" onClick={update}>Update</button>
      </div>
    </form>

    {/* Table */}
    <table className="table table-responsive-md table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Contact Number</th>
          <th>Social Media</th>
          <th>Website</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.address}</td>
            <td>{user.age}</td>
            <td>{user.contact_number}</td>
            <td>{user.Social_media}</td>
            <td>{user.website}</td>
            <td>
              <button className="btn btn-warning me-2" onClick={() => editUser(user)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

);
}export default User;