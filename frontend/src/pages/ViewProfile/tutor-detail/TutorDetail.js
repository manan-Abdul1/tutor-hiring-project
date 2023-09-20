import React from 'react'

export default function TutorDetail({teachersData}) {
  return (
<>

          <div className="">
            <h6 className="heading font-semibold mt-4 mb-4 uppercase">Tutor Details</h6>
            <p className='text-gray-500'>{teachersData.bio}</p>
            
          </div>
    </>
  )
}

