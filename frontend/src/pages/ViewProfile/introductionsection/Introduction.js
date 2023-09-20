import React from 'react'

export default function Introduction({teachersData}) {
  return (
    <>
          <section className="">
                <h6 className="heading font-semibold mt-4 uppercase">Introduction</h6>
                <div className="mt-6">
                <div className="flex my-2">
                  <p className="font-semibold text-lg">About Tutor </p>
                  <p className="text-left ml-60 pl-2 text-gray-500">{teachersData.age}yrs, {teachersData.gender} </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Qualification </p>
                  <p className="text-left ml-60 text-gray-500">{teachersData.education} </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Experience </p>
                  <p className="text-left ml-64 text-gray-500">{teachersData.experience} </p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">English Skills </p>
                  <p className="text-left ml-60 text-gray-500">Medium</p>
                </div>
                <hr/>
                <div className="flex my-2">
                  <p className="font-semibold text-lg">Alumni </p>
                  <p className="text-left ml-72 text-gray-500">{teachersData.alumni}</p>
                </div>
                <hr/>
                </div>
                </section>
    </>
  )
}
