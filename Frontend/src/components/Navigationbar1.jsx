import React from 'react'
import './Navigationbar1.css'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
export default function Navigationbar1() {

  return (
    <div className="vertical-nav">
    <div className='profile'>
      <h2>User Name</h2>
      <p>postion</p>
    </div>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/Addusers">Add users</Nav.Link>
      <Nav.Link href="/Availability">Availability</Nav.Link>
      <Nav.Link href="/Shoporders">ShopOrders</Nav.Link>
      <Nav.Link href="/Companyorders">CompanyOrders</Nav.Link>
      <Nav.Link href="/Reports">Reports</Nav.Link>
    </Nav>
      <Button variant="primary" size="lg" className="custom-button">
        <b>Sign out</b>
      </Button>
      <div className="image-at-bottom"></div> {/* This is where the image will be placed */}
    </div>
  )
}
