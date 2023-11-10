import React, { useState } from 'react'
import Rating from '../../../components/Rating/Rating'
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import InputForm from '../../../components/Hire Input Field/InputForm';

export default function ImageHeader({teachersData}) {
    console.log(teachersData,'teachersData')
  const [show, setShow] = useState(false);
  const userId = useSelector(state=>state.auth.userData._id);
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };
    
  return (
    <>
         <div className="row">
        <div className="col-md-1"></div>
        <div className="col-xs-12 col-md-10 col-lg-10">
        <div className="row">
        <div className="col-md-2 rounded-full overflow-hidden w-40 h-40 p-2">
            <img
                src={teachersData.profileImageUrl}
                className="object-cover rounded-full w-full h-full"
                alt={`${teachersData.name}'s Avatar`}
            />
            </div>
            <div className="col-md-7">
            <h4 className="black text-left text-2xl mb-2 font-bold">
                <i
                className="fa fa-check-circle text-success"
                title="Featured &amp; Verified Tutor"
                ></i>{" "}
                {teachersData.name}
            </h4>
            <div className="row">
                <div className="col-lg-8 col-sm-12 col-12 text-left ">
                <Rating value={teachersData.rating}/>
                <p className="text-center-sm">
                    <small>
                    <span className="alert alert-info p-1 m-0">
                        Fee starts from{" "}
                        <u className="font-bold">{teachersData.allSubjectFee}</u>
                        <small> /Per Month</small>
                    </span>{" "}
                    </small>
                </p>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <button
                type="submit"
                className="bg-green-500 text-white rounded-full hover:bg-blue-500 mb-2  px-4 py-2 mt-4 f"
                onClick={handleShow}
            
            >
                Hire <u>{teachersData.name?.split(' ')[0]}</u>
            </button>
            </div>
        </div>
        </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className='btn btn-primary' closeButton>
          <Modal.Title>Hire Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputForm userId={userId} teacherId={teachersData._id} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}
