import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputForm from "../../components/Hire Input Field/InputForm";
import Rating from "../../components/Rating/Rating";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HomeTutorSectionCard({
  id,
  name,
  image,
  qualification,
  experience,
  classes,
  subjects,
  rating,
  age,
  verified,
  gender,
}) {
  const [show, setShow] = useState(false);
  const MAX_LENGTH = 12;
  const userId = useSelector((state) => state.auth.userData._id);
  const navigate = useNavigate();

  const shortenText = (text) => {
    if (text?.length <= MAX_LENGTH) {
      return text;
    }
    return text?.slice(0, MAX_LENGTH) + "...";
  };
  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  const handleViewProfile = () => {
    navigate(`/viewprofile/${id}`);
  };
  return (
    <>
      <div className="relative mb-4 overflow-hidden mx-2 py-[20px] bg-white rounded-md shadow-md hover:-translate-y-2 transition duration-300 ease-in-out hover:shadow-2xl cursor-pointer">
        <div className="rounded-full overflow-hidden w-40 h-40 mx-auto">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt={name}
            loading="lazy"
          />
        </div>
        <div className="relative">
          {verified && (
            <div className="absolute -top-2 -right-0 p-2 bg-green-500 rounded-bl-md">
              {verified ? "Verified" : "Not verified"}
            </div>
          )}
        </div>
        <div className="px-4 py-2 bg-white">
          <h6 className="text-xl font-bold text-center">{name}</h6>
          <div className="flex justify-between">
            <Rating value={rating} />
            <span className=" font-bold">
              {age}yr, {gender}
            </span>
          </div>
          <div className="mt-3">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className="text-left pr-4">Qualif:</th>
                  <td className="text-right text-gray-600 ">
                    {shortenText(qualification)}
                  </td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Experience:</th>
                  <td className="text-right text-gray-600 ">{experience}</td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Classes:</th>
                  <td className="text-right text-gray-600 ">
                    {shortenText(classes)}
                  </td>
                </tr>
                <tr>
                  <th className="text-left pr-4">Subjects:</th>
                  <td className="text-right text-gray-600 ">
                    {shortenText(subjects)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleViewProfile}
              className="rounded-md bg-blue-600 px-[0.60rem] py-2 text-white mr-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              View profile
            </button>
            <button
              className="px-3 py-1 text-white bg-green-500 rounded-md hover:bg-green-600"
              data-toggle="modal"
              data-target="#send-request-popup"
              data-tutor="NDQw"
              data-tutorname={name}
              onClick={handleShow}
            >
              Hire Now
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="btn btn-primary" closeButton>
          <Modal.Title>Hire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForm userId={userId} teacherId={id} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
