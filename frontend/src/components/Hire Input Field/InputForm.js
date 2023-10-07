import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import LocationSelect from '../LocationSelect/LocationSelect';



const InputForm = ({ userId, teacherId , handleClose}) => {
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [topic, setTopic] = useState('');
  const [payment, setPayment] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      // Display an error message or prevent the form submission
      console.error('Selected date must be in the future.');
      toast.error("Selected date must be in the future.")
      return;
    }

    // Create a request payload with the form data, including the selectedDate
    const requestData = {
      studentId: userId,
      teacherId: teacherId,
      location: location,
      timing: selectedDate, // Use selectedDate here
      topic: topic,
      payment: payment,
    };

    // Send a POST request to your backend API
    axios
      .post('http://localhost:5500/api/hiringRequest', requestData)
      .then((response) => {
        // Handle success, you can show a success message or redirect here
        console.log('Hiring request sent successfully:', response.data);
        handleClose();
      })
      .catch((error) => {
        // Handle errors, display an error message, or log the error
        console.error('Error sending hiring request:', error);
      });

    // Reset the form fields
    setLocation('');
    // setSelectedDate(null); // Reset the date and time
    setTopic('');
    setPayment('');
  };
  const handleLocationSelect = (location) => {
    setLocation(location);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">

      <div className="mb-4">
        <label htmlFor="location" className="block mb-2 font-semibold">
          Location:
        </label>
        <LocationSelect onSelect={handleLocationSelect} width='w-full'/>
      </div>
      <div className="mb-4">
        <label htmlFor="timing" className="block mb-2 font-semibold">
          Timing:
        </label>
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm text-center"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="topic" className="block mb-2 font-semibold">
          Topic:
        </label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm text-center"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="payment" className="block mb-2 font-semibold">
          Payment per Topic:
        </label>
        <input
          type="text"
          id="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm text-center"
        />
      </div>
      <button
        type="submit"
        className="block w-30 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}

export default InputForm
