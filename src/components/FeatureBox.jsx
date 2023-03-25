import React from 'react'

const FeatureBox = (props) => {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.image} alt="" />
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam et autem exercitationem deserunt similique corporis praesentium beatae numquam. Autem eos, officia laborum unde cumque praesentium quam error esse cupiditate.</p>
        </div>
    </div>
  )
}

export default FeatureBox