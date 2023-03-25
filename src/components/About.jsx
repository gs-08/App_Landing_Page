import React from 'react'

const About = (props) => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt=" "/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas necessitatibus illo doloribus nisi ullam optio quibusdam fugit placeat ipsam porro quo fuga quia quasi sunt corrupti, tenetur laudantium praesentium perspiciatis!
            </p>
            <button>{props.btn}</button>
        </div>
    </div>
  )
}

export default About