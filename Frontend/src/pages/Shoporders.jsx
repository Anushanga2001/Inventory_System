// OrdersTable.js
import React from 'react';
import { Link } from 'react-router-dom';

function ShopOrders() {
  const orders = [
    { orderNo: '001', name: 'Kaml stores', address: 'Hatton road, Yatiyanhtota', date: '2024/03/12', time: '11.23 A.M.' },
    { orderNo: '002', name: 'Kaml stores', address: 'Hamanda, Yatiyanhtota', date: '2024/03/12', time: '11.23 A.M.' }
  ];

  return (
    <div>
    <search>Search</search>
    <table>
      <thead>
        <tr>
          <th>Order No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td><Link to={`/DynamicShoporders/${order.orderNo}`}>{order.orderNo}</Link></td>
            <td>{order.name}</td>
            <td>{order.address}</td>
            <td>{order.date}</td>
            <td>{order.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default ShopOrders;
