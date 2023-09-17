import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputForm from '../Hire Input Field/InputForm';
import { useNavigate } from 'react-router-dom';

export default function TutorCard({ id, name, image, qualification, experience, classes, subjects, rating, age, verified, gender }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const MAX_LENGTH = 20;

  const shortenText = (text) => {
    if (text?.length <= MAX_LENGTH) {
      return text;
    }
    return text?.slice(0, MAX_LENGTH) + '...';
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleViewProfile = () => {
    navigate(`/viewprofile/${id}`);
  }
  return (
    <>
      <div className="relative mb-4 inline-block px-[10px] py-[24px] bg-white overflow-hidden rounded-md shadow-md hover:-translate-y-2 transition duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <img className="object-cover absolute rounded-full top-1 left-20 w-50 " src={image} alt={name} loading="lazy" />
        <div className="relative pt-32">
          {verified && <div className="absolute -top-7 -right-3 p-2 bg-green-500 rounded-bl-md">{verified ? 'Verified' : 'Not verified'}</div>}
        </div>
        <div className="px-4 py-2 bg-white">
          <h6 className="text-xl font-bold text-center">{name}</h6>
          <div className="flex justify-between">
            <div>
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa fa-star${rating >= i + 1 ? '' : '-o'}`}
                  style={{ color: rating >= i + 1 ? '#ffc107' : '' }}
                ></i>
              ))}
            </div>
            <span className="font-bold">{age}yr, {gender}</span>
          </div>
          <div className="mt-3">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="text-left pr-4">Qualif:</th>
                  <td className="text-right text-gray-600">{shortenText(qualification)}</td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Experience:</th>
                  <td className="text-right text-gray-600">{experience}</td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Classes:</th>
                  <td className="text-right text-gray-600">{shortenText(classes)}</td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Subjects:</th>
                  <td className="text-right text-gray-600">{shortenText(subjects)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handleViewProfile} className="rounded-md bg-blue-600 px-[0.60rem] py-2 text-white mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
              View profile
            </button>
            <button
              className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={handleShow}
            >
              Hire Now
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className='btn btn-primary' closeButton>
          <Modal.Title>Hire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-primary text-blue-500" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary text-blue-500">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
