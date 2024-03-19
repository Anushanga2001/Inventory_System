import React from 'react'
import './Availability.css'

export default function Availability() {
  return (
    <div>
      <search>Search</search>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cream cracker</td>
            <td>180</td>
            <td>390</td>
          </tr>
          <tr>
            <td>Cream cracker - small</td>
            <td>100</td>
            <td>200</td>
          </tr>
          </tbody>
      </table>
    </div>
  )
}
