import React from 'react'
import ProjectOne from '../assets/img/project-1.jpg'
import ImageSlider from './ImageSlider'
import ValidationForm from './ValidationForm'

function Project1() {
  return (
    <div className='project1'>
        <div className='project1-banner'>
            <div className='project1-upperRight'>
                <img className='project1-img' src={ProjectOne} alt='property1'/>
            </div>
            <div className='project1-upperLeft'>
                <h2>Royal Estate</h2>
                <p>Lonavala</p>
                <div className='aj-project-status'>
                    <ul className='aj-status-wrapper'>
                        <li className='aj-status'>
                            <strong>Current status</strong>
                            <p>Pre-Launch</p>
                        </li>
                        <li>
                        <strong>Configurations Available:</strong>
                            <p>4 Bed Homes</p>
                        </li>
                        <li>
                        <strong>MahaRERA Approved</strong>
                            <p>P421000531544</p>
                        </li>
                    </ul>
                </div>
                {/* <h3>Configurations Available</h3>
                <h3>MahaRERA Approved</h3> */}
            </div>
        </div>
        <div className='project1-footer'>
            <div className='aj-container'>
                <div className='aj-row'>
                    <div className='col-lg-7 col-md-6 col-sm-12'>
                        <div className='aj-lifestyle-img'>
                    <img className='img' src='https://www.legacylifespaces.com/wp-content/uploads/2023/10/DALL·E-2023-10-30-13.45.12-Photo-of-a-rooftop-terrace-of-an-upscale-Indian-apartment-with-a-view-of-the-bustling-city-below.-The-terrace-features-comfortable-seating-traditiona.png' alt='lifeStyle' />

                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-sm-12'>
                        <div className='aj-lifestyle-content'>
                            <h2 className='aj-lifestyle-title'>Serenity Meets Urban Connectivity</h2>
                            <div className='aj-lifestyle-text'>
                                <strong>Experience a lifestyle of pure bliss and indulgence at Ananta, where luxury meets serenity. Unleash your senses amidst breathtaking amenities that redefine opulence.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='property-details'>
            <h2 className=''>Amenities</h2>
            <div className='slick-img'><ImageSlider /></div>
        </div>
        <div>
        <ValidationForm/>
        </div>
    </div>
  )
}

export default Project1