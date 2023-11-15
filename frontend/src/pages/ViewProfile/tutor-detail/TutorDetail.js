import React from 'react'

export default function TutorDetail({teachersData}) {
  return (
<>
          <section className="">
          <h6 className="heading font-semibold mt-4 uppercase">Tutor Details</h6>
                <div className="mt-6">
                <div className="flex my-2">
                  <p className="font-semibold text-lg">About Tutor </p>
                  <p className="text-left ml-60 pl-2 text-gray-500">{teachersData.bio}</p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Contact No: </p>
                  <p className="text-left ml-60 pl-1 text-gray-500">{teachersData.phone} </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Address # </p>
                  <p className="text-left ml-64 pl-1 text-gray-500">{teachersData.address} </p>
                </div>
                <hr/>
                
                </div>
                </section>
    </>
  )
}

