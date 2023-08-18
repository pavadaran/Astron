import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Medical = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can add your form submission logic here
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='row '>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>
                <h4 >Medical Details
                  {/* <Link to='/' className="btn btn-danger float-end">Back</Link> */}
                </h4>
              </ div>
              <div className='card-body'>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Emergency Person's Contact Name</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Allergies</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Surgical History</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Oxygen Level</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Heart Beat</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Pressure</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Blood Group</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Additional Note</label>
                  <input type="text" name="course" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Surgical History</label>
                  <input type="text" name="course" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
