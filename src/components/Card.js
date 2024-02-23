import React, { useState } from 'react'

const Card = ({tour, removeTour}) => {

    const [readmore, setReadmore] = useState(false);
    const description =  readmore ? `${tour.info}...` : `${tour.info.substr(0,200)}...` 

  return (
    <div className='card'>

      <img src={tour.image} className='image' />

      <div className='tour-info'>
        <div className='tour-details'>
          <h4 className='tour-price'>₹ {tour.price}</h4>
          <h4 className='tour-name'>{tour.name}</h4>
        </div>

        <div className='description'>
        {description}
          <span className='read-more' onClick={() => setReadmore(!readmore)}>
              {readmore ? 'Show Less' : 'Read More'}
          </span>
        </div>
        
      </div>

    <button className='btn-red' onClick={() => removeTour(tour.id)}>
        Not Interested
    </button>

    </div>
  )
}

export default Card
