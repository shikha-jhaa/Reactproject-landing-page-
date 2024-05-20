import React from 'react'
import AboutBackground from "../asserts/about-background.png"
import AboutBackgroundImage from "../asserts/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt='' />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of Balance Diet
            </h1>
            <p className='primary-text'>
                lorem ipsum dolor sit amet consectetur, non tincidunt magna non et
                elit. dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <p className='primary-text'>
                non tincidunt magna non et elit. dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className='about-buttons-container'>
                <button className="secondary-button" >Learn More</button>
                <button className='watch-video-button'>{""}<BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>

      
    </div>
  
}

export default About
