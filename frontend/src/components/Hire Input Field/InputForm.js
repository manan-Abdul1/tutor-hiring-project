import { useState } from 'react';

export default function InputForm({ userId, teacherId }) {
  const [location, setLocation] = useState('');
  const [timing, setTiming] = useState('');
  const [topic, setTopic] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your logic or submit the form data here
    // You can access the input values using the state variables (location, timing, topic, payment)
    // For example:
    console.log('Location:', location);
    console.log('Timing:', timing);
    console.log('Topic:', topic);
    console.log('Payment:', payment);

    // Reset the form fields
    setLocation('');
    setTiming('');
    setTopic('');
    setPayment('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2 font-semibold">
          Location:
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm text-center"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="timing" className="block mb-2 font-semibold">
          Timing:
        </label>
        <input
          type="text"
          id="timing"
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
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
