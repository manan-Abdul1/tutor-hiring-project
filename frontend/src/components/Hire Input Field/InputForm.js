import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import LocationSelect from '../LocationSelect/LocationSelect';
import MapLocationIq from './MapLocationIq';


const InputForm = ({ userId, teacherId, handleClose }) => {
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [topic, setTopic] = useState('');
  const [payment, setPayment] = useState('');
  const [physicalLocation, setPhysicalLocation] = useState(); 
  const [message, setMessage] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(location===''){
      toast.error("Please Enter how you want to learn");
      return;
    }
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      toast.error('Selected date must be in the future.');
      return;
    }

    const requestData = {
      studentId: userId,
      teacherId: teacherId,
      location: location,
      timing: selectedDate,
      topic: topic,
      preferredLocation:physicalLocation,
      payment: payment,
      message: message, 
    };

    axios
      .post('http://localhost:5500/api/hiringRequest', requestData)
      .then((response) => {
        console.log(response,"request-send")
        if(response.ok){
          toast.success(response.data.message)
          handleClose();
        }
      })
      .catch((error) => {
        console.error('Error sending hiring request:', error);
      });

    setLocation('');
    setTopic('');
    setPayment('');
    setPhysicalLocation('');
    setMessage('');
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2 font-semibold">
          Location:
        </label>
        <LocationSelect onSelect={handleLocationSelect} width="w-full" />
      </div>
      {(location === 'both' || location === 'physical') && (
        <>
          {/* <div className="mb-4">
            <label htmlFor="physicalLocation" className="block mb-2 font-semibold">
              Physical Location Preference:
            </label>
            <input
              type="text"
              id="physicalLocation"
              value={physicalLocation}
              required
              onChange={(e) => setPhysicalLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm "
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="map" className="block mb-2 font-semibold">
              Select Physical Location on Map:
            </label>
            {/* <MapWithSearchLeaflet setPhysicalLocation={setPhysicalLocation}/> */}
            <MapLocationIq setPhysicalLocation={setPhysicalLocation}/>
          </div>
        </>
      )}
      <div className="mb-4">
        <label htmlFor="timing" className="block mb-2 font-semibold">
          Timing:
        </label>
        <DatePicker
          required
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="topic" className="block mb-2 font-semibold">
          Topic:
        </label>
        <input
          required
          type="text"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="payment" className="block mb-2 font-semibold">
          Payment per Topic:
        </label>
        <input
          required
          type="text"
          id="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm "
        />
      </div>
      <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Explanation/Message:
            </label>
            <textarea
              placeholder='Any Explanation about topic or other anything you want to add?'
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              rows={2}
            ></textarea>
          </div>
      <button
        type="submit"
        className="block w-30 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
