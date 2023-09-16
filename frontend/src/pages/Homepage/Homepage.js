import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeSection from '../HomeSection/HomeSection';
import HomeTutorSection from '../HomeTutorSection/HomeTutorSection';
import './Homepage.css';
import Faq from '../Faq/Faq';
import SearchBelowCards from '../../components/Search Below Cards/SearchBelowCards';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Homepage() {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.6
  });

  const { ref: tutorRef, inView: tutorInView } = useInView({
    threshold: 0.6
  }); 

  const sectionVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut'
      }
    },
    hidden: {
      opacity: 0,
      y: 50
    }
  };

  const tutorVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeInOut'
      }
    },
    hidden: {
      opacity: 0,
      y: 50
    }
  };
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    // User is not registered, redirect to login page
    navigate("/login");
    return null;
  }


  return (
    <>
      <div ref={sectionRef}>
        <motion.div
          className='fade-in'
          variants={sectionVariant}
          initial='hidden'
          animate={sectionInView ? 'visible' : 'hidden'}
        >
          <HomeSection />
        </motion.div>
        
      </div>
      <div><SearchBelowCards/></div>
      
      <div className='bg-gray-100 p-1 my-5 rounded-lg shadow-2xl' ref={tutorRef}>
        <motion.div
          className='fade-in'
          variants={tutorVariant}
          initial='hidden'
          animate={tutorInView ? 'visible' : 'hidden'}
        >
          <HomeTutorSection />
        </motion.div>
      </div> 
      <div className='py-20 rounded-lg shadow-2xl' >
          <Faq />
      </div>
    </>
  );
}
