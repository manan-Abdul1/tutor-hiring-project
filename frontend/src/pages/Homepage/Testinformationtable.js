export default function TestInformationTable() {
    return (
        <div className="mx-auto container">

<h4 className="text-black text-center mb-5 uppercase font-bold text-3xl">
             Private  <span className="text-green-500 underline">Tutor</span> Hiring System 
            </h4>
            
      <table className="border">
        <thead>
          <tr>
            <th className="bg-green-500 text-white text-justify px-2">Test Suite Id</th>
            <th className="bg-green-500 text-white px-4">Test Case Id</th>
            <th className="bg-green-500 text-white px-4">Test Case Summary</th>
            <th className="bg-green-500 text-white px-4">Related Requirement</th>
            <th className="bg-green-500 text-white px-4">Prerequisites</th>
            <th className="bg-green-500 text-white px-4">Test Data</th>
            <th className="bg-green-500 text-white px-4">Expected Result</th>
            <th className="bg-green-500 text-white px-4">Actual Result</th>
            <th className="bg-green-500 text-white px-4">Status</th>
            <th className="bg-green-500 text-white px-4">Test Environment</th>
            <th className="bg-green-500 text-white px-4">Date and Time Information</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td>TS-001</td>
            <td>TC-001</td>
            <td>Registering a new student account</td>
            <td>User registration system</td>
            <td>None</td>
            <td>New student's information</td>
            <td>A new student account is created with the entered information</td>
            <td>pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-001</td>
            <td>TC-002</td>
            <td>Logging in as a student</td>
            <td> User login system</td>
            <td>An existing student account Test</td>
            <td> Student's username and password </td>
            <td>Student is logged in to their account </td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-002</td>
            <td>TC-003</td>
            <td>Creating a tutor profile </td>
            <td> Tutor profile creation</td>
            <td>Logged in as a tutor</td>
            <td>Tutor's education, experience, qualifications, availability, and teaching subjects/topics </td>
            <td>Tutor profile is created with the entered information </td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-002</td>
            <td>TC-004</td>
            <td>Searching for a tutor by education </td>
            <td>Search and filter functionality for students</td>
            <td>Logged in as a student</td>
            <td>Education field</td>
            <td> List of tutors with matching education is displayed</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-002</td>
            <td>TC-005</td>
            <td>Filtering tutor search results by experience </td>
            <td>Search and filter functionality for students</td>
            <td>Logged in as a student</td>
            <td>Experience Field</td>
            <td>List of tutors with matching experience level is displayed</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-003</td>
            <td>TC-006</td>
            <td>Scheduling an online tutoring session </td>
            <td>Scheduling and management of online tutoring sessions</td>
            <td>Logged in as a student</td>
            <td>Tutor and student availability, session topic</td>
            <td> Session is scheduled for the chosen time and topic</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-003</td>
            <td>TC-007</td>
            <td>Scheduling an physical tutoring session </td>
            <td> REQ-006, REQ-007</td>
            <td>Logged in as a student</td>
            <td>Tutor and student availability, session topic</td>
            <td>Session is scheduled for the chosen time, topic, and locationic</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TS-004</td>
            <td>TC-008</td>
            <td>Verify that a tutor can accept a tutoring request from a student.</td>
            <td>A tutor and a student account must be created, and a tutoring request must be sent by the student to the tutor.</td>
            <td>Tutor account login credentials, student account login credentials, tutoring request details</td>
            <td>The tutor should be able to view the tutoring request and accept it.</td>
            <td>The tutor is able to view the tutoring request and accepts it</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TU-002</td>
            <td>TC-009</td>
            <td>Verify that a tutor can reject a tutoring request from a student.</td>
            <td> REQ-006, REQ-007</td>
            <td>A tutor and a student account must be created, and a tutoring request must be sent by the student to the tutor.</td>
            <td>Tutor account login credentials, student account login credentials, tutoring request details</td>
            <td>The tutor should be able to view the tutoring request and reject it.</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
          </tr>
          <tr className="border">
            <td>TU-003</td>
            <td>TC-010</td>
            <td>Verify that a student can rate and provide a written review for a tutor.</td>
            <td>REQ-008</td>
            <td>Verify that a student can rate and provide a written review for a tutor.</td>
            <td>Tutor account login credentials, tutor profile page</td>
            <td>The tutor should be able to view their ratings and reviews on their profile page.</td>
            <td>The tutor is able to view their ratings and reviews on their profile page.</td>
            <td>Pass</td>
            <td>Development</td>
            <td>2023-06-05 10:30 AM</td>`
            </tr>
        </tbody>
      </table>


        </div>



    );
  }
  