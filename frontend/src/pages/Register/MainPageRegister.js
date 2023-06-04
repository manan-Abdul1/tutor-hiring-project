import React from 'react'
import RegisterTutor from './RegisterTutor'
import Form from './Form'

export default function MainPageRegister({setIsRegistered}) {
  return (
    <>
        <Form setIsRegistered={setIsRegistered}/>
    </>
  )
}
