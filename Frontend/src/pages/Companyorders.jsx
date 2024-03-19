import React from 'react'

export default function Companyorders() {
    const orders = [
        { orderNo: '001', date: '2024/03/12', time: '11.23 A.M.' },
        { orderNo: '002', date: '2024/03/12', time: '11.23 A.M.' }
      ];
    
      const handleRowClick = (orderNo) => {
        // Navigate to the specific order page using React Router or similar method
        console.log("Navigating to order:", orderNo);
      };
    
      return (
        <div>
        <search>Search</search>
        <table>
          <thead>
            <tr>
              <th>Order No</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} onClick={() => handleRowClick(order.orderNo)}>
                <td>{order.orderNo}</td>
                <td>{order.date}</td>
                <td>{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
}
