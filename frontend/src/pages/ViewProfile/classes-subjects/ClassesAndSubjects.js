import React from 'react'

export default function ClassesAndSubjects({ teachersData }) {
  console.log(teachersData.subjects, 'subjects')
  return (
    <>
      <section className="">
        <h6 className="heading font-semibold mt-4 uppercase">Classes and Subjects</h6>
        <div className="mt-6">
          <div className="flex my-2">
            <p className="font-semibold text-lg">Subjects </p>
            <div className="flex flex-col ml-60">

              {teachersData?.subjects?.map(subject => (
                <p className="text-left my-1 text-gray-500" key={subject}>
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  {subject}
                </p>
              ))}

              {/* <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Accounting</p>
                  <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Economics</p>
                  <p className="text-left my-1 text-gray-500">
                  <i className="fa mx-2 fa-check-circle text-success" title="Featured &amp; Verified Tutor"></i>
                  Business Study</p> */}

              <div className="flex">
                <p className="my-2 ">
                  <small>
                    <span className="alert alert-info p-1 m-0">
                      Fee starts from{" "}
                      <u className="font-bold">18000</u>
                      <small> /Per Month <bold>(For all subjects)</bold></small>
                    </span>{" "}
                  </small>
                </p> <p className="my-2 mx-2">
                  <small>
                    <span className="alert alert-info p-1 m-0">
                      Fee starts from{" "}
                      <u className="font-bold">18000</u>
                      <small> /Per Month <span className='text-black-500'>(Per Subject)</span></small>
                    </span>{" "}
                  </small>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  )
}
