import React from 'react'
import Card from "./Card"

const Tours = ({tours, removeTour}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plan With Abhra</h2>
        </div>
        <div className='cards'>
          {
              tours.map((tour) => {
                  return <Card tour={tour} removeTour={removeTour} key={tour.id} />
              })
          }
        </div>
    </div>
  )
}

export default Tours
