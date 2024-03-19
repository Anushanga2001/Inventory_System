// OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function DynamicShoporders() {
  const { orderNo } = useParams();

  // Assuming you have a function to fetch order details based on order number
  // Replace this with actual code to fetch order details from your data source
  const getOrderDetails = (orderNo) => {
    // Simulated order details for demonstration
    return {
      orderNo: orderNo,
      name: 'Kaml stores',
      address: 'Hatton road, Yatiyanhtota',
      date: '2024/03/12',
      time: '11.23 A.M.'
    };
  };

  const orderDetails = getOrderDetails(orderNo);

  return (
    <div>
      <center><h2>Order Details</h2></center>
      <table>
        <tbody>
          <tr>
            <th>Order No</th>
            <td>{orderDetails.orderNo}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{orderDetails.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{orderDetails.address}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{orderDetails.date}</td>
          </tr>
          <tr>
            <th>Time</th>
            <td>{orderDetails.time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DynamicShoporders;
