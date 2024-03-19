import React from 'react'
import './Addusers.css';
import Button from 'react-bootstrap/Button';

export default function Addusers() {
  return (
    <div className="Addusers">
      <search>Search</search>
      <table id="myTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>TelNo</th>
          </tr>
        </thead>
        <tbody>
          {/* give me some example data */}
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>Manager</td>
            <td>01/01/1990</td>
            <td>Male</td>
            <td>1234567890</td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>Manager</td>
            <td>01/01/1990</td>
            <td>Male</td>
            <td>1234567890</td>
          </tr>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>Manager</td>
            <td>01/01/1990</td>
            <td>Male</td>
            <td>1234567890</td>
          </tr>
        </tbody>
      </table>
      <div className='add-user'>
        <Button variant="success">Add users</Button>{' '}
        <Button variant="danger">Remove users</Button>{' '}
      </div>
    </div>
  )
}
