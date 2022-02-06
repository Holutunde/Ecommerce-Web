import React from 'react'

import './Homepage.css'
const Homepage = () => {
  return (
    <div className="container">
      <div className="upper-nav-row">
        <div className="left-side-row">
          <p className="left-side-row-text">
            Free shipping • Free 30 days return • Express delivery
          </p>
        </div>
        <div className="">
          <ul className="right-side-row">
            <li className="">
              <img cl src="images/flag.jpg" alt="flag" />
            </li>
            <li className="">
              |<a href="login.html">My Accounts</a>
            </li>
            <form action="#">
              <select className="country" name="country">
                <option value="USD">USD</option>
                <option value="JPN">JPN</option>
                <option value="BAN">BAN</option>
              </select>
            </form>
          </ul>
        </div>
      </div>
      <div className="lower-nav-row">
        <div className="left-row">
          <img cl src="images/logo.png" alt="logo" />
        </div>
        <div className="middle-comp">
          <p className="text">HOME</p>
          <p className="text">SHOP</p>
          <p className="text">MEGA MENU</p>
          <p className="text">CONTACT US</p>
        </div>
        <div className="right-row">
          <img cl src="images/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Homepage
