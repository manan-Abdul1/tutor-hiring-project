import React from 'react'

export default function InstructionalZone({teachersData}) {
  return (
    <>
          <section className="">
                <h6 className="heading font-semibold mt-4 mb-4 uppercase">Instructional Zone</h6>
                <div className="flex flex-col my-2">
                <p className="text-left my-3 text-gray-500">
                <i class="fa-solid mx-2 fa-location-dot fa-beat text-success"></i>
                  {teachersData.city}</p>
                <hr/>
                

                </div>
                </section>
    </>
  )
}
