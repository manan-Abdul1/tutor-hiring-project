import React from 'react'

export default function TeachingDetails({teachersData}) {
  return (
<>
          <section className=" mt-4">
          <h6 className="heading font-semibold mt-4 uppercase">Teaching Portfolio</h6>
                <div className="mt-6">
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Current Teaching Institution</p>
                  <p className="text-left ml-60  text-gray-500">{teachersData.currentTeachInstitute}</p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Recent Teaching Institution</p>
                  <p className="text-left ml-60 pl-1 text-gray-500">{teachersData.alumni} </p>
                </div>
                <hr/>
                
                </div>
                </section>
    </>
  )
}

