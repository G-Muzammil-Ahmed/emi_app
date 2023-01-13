import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function HomeIcons() {
    const photo = 'https://foundationcreditunion.com/wp-content/uploads/2021/07/loan-money-bag-next-to-gold.jpg'

  return (
    <div id='iconMain'>
    <div className='leftB'>
      <div>
      <FontAwesomeIcon icon="fa-regular fa-money-check-dollar" />
      <h3> Check your Eligibility</h3>
      <p> Click here to know the Maximum amount you can Withdraw</p>
      </div>

      <div>
        <h3>Check your EMI</h3>
        <p>Click here to configure your EMI tunure and intrest rate</p>
      </div>

    </div>
   
    <img id='myImg' src={photo} alt='background'/>

    <div className='rightB'>
      <div>
      <i className="fa fa-search w3-xxxlarge"></i>

      <h3> Check your Eligibility</h3>
      <p> Click here to know the Maximum amount you can Withdraw</p>
      </div>

      <div>
        <h3>Check your EMI</h3>
        <p>Click here to configure your EMI tunure and intrest rate</p>
      </div>

    </div>
    
    </div>
  )
}

export default HomeIcons
