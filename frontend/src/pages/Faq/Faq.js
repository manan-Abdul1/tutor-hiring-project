import React, { useState } from 'react'
import './Faq.css'
const Faq = () => {
    const [answersVisible, setAnswersVisible] = useState({});
    const [answersVisibletutor, setAnswersVisibletutor] = useState({});
    const [answersVisibleonline, setAnswersVisibleonline] = useState({});

    const toggleAnswer = (questionId) => {
        setAnswersVisible((prevState) => {
          return {
            ...prevState,
            [questionId]: !prevState[questionId],
          };
        });
      };

      const toggleAnswertutor = (questionId) => {
        setAnswersVisibletutor((prevState) => {
          return {
            ...prevState,
            [questionId]: !prevState[questionId],
          };
        });
      };

      const toggleAnsweronline = (questionId) => {
        setAnswersVisibleonline((prevState) => {
          return {
            ...prevState,
            [questionId]: !prevState[questionId],
          };
        });
      };
  return (
    <div className='container'>
      {/* <div class="relative h-64 flex items-center justify-center">
  <img  src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="faq" className="w-full h-full opacity-75"/>
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-5xl font-bold text-white">FAQ's</h1>
  </div>
</div> */}
<h2 className="mx-2 font-bold md:my-5 md:text-center md:text-3xl mb-3 banner-heading">
          FREQUENTLY <span className="text-green-500 border-b-4 border-green-500"> ASKED</span> QUESTIONS
        </h2>
<div class="flex flex-wrap -mx-4 justify-center items-center">
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 transform translate-y-2">
    <div class="bg-white rounded-lg shadow-lg p-6 mt-10 card">
  <h2 class="text-lg font-medium mb-2">For Students <br/></h2>
  <p class="text-gray-600"><ul className='cardsul'>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswer(1)}>
          How can i find best qualified tutors in my area ?
          </a>
          <p className={`answer ${answersVisible[1] ? '' : 'hidden'}`}>
          You can find best qualified tutors in your area by specifying your Location , Class and Subjects.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswer(2)}>
          What is the procedure after submitting my request ?
          </a>
          <p className={`answer ${answersVisible[2] ? '' : 'hidden'}`}>
          Our coordinator will contact you within 30 minutes , You can discuss with him in details.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswer(3)}>
          What is trial class..?
          </a>
          <p className={`answer ${answersVisible[3] ? '' : 'hidden'}`}>
          The Tutors provide 2 days free trial for students.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswer(4)}>
          What is the fee procedure...?
          </a>
          <p className={`answer ${answersVisible[4] ? '' : 'hidden'}`}>
          TheTutors take fee in advance after 2 days free trail.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswer(5)}>
          Course Tutors...?
          </a>
          <p className={`answer ${answersVisible[5] ? '' : 'hidden'}`}>
          TheTutors provide all type of Courses. Ielts , Toefl , CSS , Mcat , Ecat , Entry test Preparation , etc
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswer(6)}>
          Trust and Security ....?
          </a>
          <p className={`answer ${answersVisible[6] ? '' : 'hidden'}`}>
          Our tutors are verified , enthusiastic and well mannered. We ensure you that if you had any complain regarding tutor , We will take strict action against that tutor.
          </p>
        </li>
      </ul></p>
</div>
  </div>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 ">
  <div class="bg-white rounded-lg shadow-lg p-6 mt-10 mb-10 card">
  <h2 class="text-lg font-medium mb-2">For Tutors <br/></h2>
  <p class="text-gray-600"><ul className='cardsul'>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(1)}>
          How can i register myself as a home tutor ?
          </a>
          <p className={`answer ${answersVisibletutor[1] ? '' : 'hidden'}`}>
          You can register yourself at thetutors.pk/register-as-tutor | Fill the form add Classes and Subjects you can teach | Add your fee per month and fee per subject | Add your preferred Areas where you can teach | Click to finish button | Note : Make your good profile so that clients like to approach you.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(2)}>
          How can i get online tutorial jobs ?
          </a>
          <p className={`answer ${answersVisibletutor[2] ? '' : 'hidden'}`}>
          TheTutors providing online tutorial jobs. Online tutors can also register themself at thetutors.pk/register-as-tutor | Fill the registration form | If you want to teach online you can checked online tutor check box.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(3)}>
          How can i get verification tag with my profile ?
          </a>
          <p className={`answer ${answersVisibletutor[3] ? '' : 'hidden'}`}>
          You can get verification tag on your profile box by sending your NIC (National Identity Card) front and back pic on 0305-5595385 (do Whatsapp)
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(4)}>
          What is Introduction video..?
          </a>
          <p className={`answer ${answersVisibletutor[4] ? '' : 'hidden'}`}>
          When students visit on your profile and if there will be your short introduction video on your profile. Your profile will look more attractive. You can share the method of your teaching , your experience and if you have any recorded lecture then you can also use that as a short introduction video. | Send your short intro video on 0305-5595385 ( WhatsApp your video )
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(5)}>
          How long does it take to get a job at thetutors.pk ?
          </a>
          <p className={`answer ${answersVisibletutor[5] ? '' : 'hidden'}`}>
          It depends on your profile , Classes or Subjects which you can teach , Your Monthly fee will be in Range . Usually Tutors who had created their good profile get jobs from Thetutors within month or 2 month.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(6)}>
          How my profile will be shown in the search results ?
          </a>
          <p className={`answer ${answersVisibletutor[6] ? '' : 'hidden'}`}>
          Select more Classes and Subjects which you can teach | Fee must be suitable | Select your preferred areas where you can teach | Complete verification process after registration.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(7)}>
          how can i get listed in featured Tutors ?
          </a>
          <p className={`answer ${answersVisibletutor[7] ? '' : 'hidden'}`}>
          You have to create your good profile. Actually There are some points which you have to complete. 1. You have to send your Nic front and back pic for verification. 2. You have to upload your profile image. 3. Make your short intro video and send on 03055595385.Your profile will be more attractive then others after uploading short intro video. These are the steps which you have to follow for complete your profile.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnswertutor(8)}>
          What is the fee procedure...??
          </a>
          <p className={`answer ${answersVisibletutor[8] ? '' : 'hidden'}`}>
          We charge 50% from first month fee and 500 registration charging at the time of assignment.
          </p>
        </li>
      </ul></p>
</div>

  </div>
 
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
  <div class="bg-white rounded-lg shadow-lg p-6 mt-10 mb-10 card">
  <h2 class="text-lg font-medium mb-2">For Online Tutors <br/></h2>
  <p class="text-gray-600"><ul className='cardsul'>
        <li>
          <a href="#" className="question" onClick={() => toggleAnsweronline(1)}>
          How can i find best qualified tutors in my area ?
</a>
          <p className={`answer ${answersVisibleonline[1] ? '' : 'hidden'}`}>
          You can find best qualified tutors in your area by specifying your Location , Class and Subjects.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnsweronline(2)}>
          What is the procedure after submitting my request ?
          </a>
          <p className={`answer ${answersVisibleonline[2] ? '' : 'hidden'}`}>
          Our coordinator will contact you within 30 minutes , You can discuss with him in details.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnsweronline(3)}>
          What is trial class..?
          </a>
          <p className={`answer ${answersVisibleonline[3] ? '' : 'hidden'}`}>
          TheTutors provide 2 days free trial for students.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnsweronline(4)}>
          What is the fee procedure...?
          </a>
          <p className={`answer ${answersVisibleonline[4] ? '' : 'hidden'}`}>
          TheTutors take fee in advance after 2 days free trail.
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnsweronline(5)}>
          Course Tutors...?
          </a>
          <p className={`answer ${answersVisibleonline[5] ? '' : 'hidden'}`}>
          TheTutors provide all type of Courses. Ielts , Toefl , CSS , Mcat , Ecat , Entry test Preparation , etc
          </p>
        </li>
        <li>
          <a href="#" className="question" onClick={() => toggleAnsweronline(6)}>
          Trust and Security ....?
          </a>
          <p className={`answer ${answersVisibleonline[6] ? '' : 'hidden'}`}>
          Our tutors are verified , enthusiastic and well mannered. We ensure you that if you had any complain regarding tutor , We will take strict action against that tutor.
          </p>
        </li>
        
      </ul></p>
</div>

  </div>


</div>

      </div>
  )
}

export default Faq
