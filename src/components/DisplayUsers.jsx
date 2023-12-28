import axios from "axios";
import React,{useEffect,useState} from 'react';
import './DisplayStyle.css';

function DisplayUsers() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    Load();
  },[]);
async function Load(){
    const result = await axios.get('http://localhost:8080/api/users');
    setUsers(result.data);
    console.log(result.data);
}
   
    async function deleteUser(id) {
    await axios.delete('http://localhost:8080/api/users/' + id);
    alert('User deleted Successfully');
    Load();
  }  
  return (
    
    <table id="tbl">
        <thead className="thead-dark">
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
            <tr className="table-row" >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.address}</td>
              <td>{user.age}</td>
              <td>{user.contact_number}</td>
              <td>{user.Social_media}</td>
              <td>{user.website}</td>
              <td className="table-actions">
              <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
  
  export default DisplayUsers