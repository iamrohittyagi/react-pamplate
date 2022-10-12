import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='logo-div'>
        <img src='logo192.png' className='head-img'/>
        <h1 className='head-head'>ReactFacts</h1>
        </div>
        <ul className='head-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header