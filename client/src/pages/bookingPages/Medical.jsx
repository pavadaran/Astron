import React, { useState } from 'react';
import { Link, navigate, useNavigate } from 'react-router-dom';

const Medical = () => {

  const [medical, setMedical] = useState({
    name: '',
    allergies: '',
    History: '',
    OxyLevel: '',
    HeartBeat: '',
    Pressure: '',
    BloodGroup: '',
    AdditionalNote: '',
    SurgicalHistory: ''
  })

  const navigate = useNavigate();

  const handleInput = (e) => {
    e.persist();
    setMedical({ ...medical, [e.target.name]: e.target.value });
  }

  if (!medical.AdditionalNote == "" && !medical.allergies == "" && !medical.BloodGroup == "" && !medical.History == "" && !medical.name == "" && !medical.OxyLevel == "" && !medical.Pressure == "" && !medical.SurgicalHistory == "" && !medical.HeartBeat == "") {
    console.log(medical);
  }

  const areAllFieldsFilled = (medical.AdditionalNote !="")&&(medical.allergies !="")&&(medical.BloodGroup !="")&&(medical.History !="")&&(medical.name !="")&&(medical.OxyLevel !="")&&(medical.Pressure !="")&&(medical.SurgicalHistory !="")&&(medical.HeartBeat !="");

  const saveStudent = (e) => {
    e.preventDefault();

    const data = {
      name: medical.name,
      allergies: medical.allergies,
      History: medical.History,
      OxyLevel: medical.OxyLevel,
      HeartBeat: medical.HeartBeat,
      Pressure: medical.Pressure,
      BloodGroup: medical.BloodGroup,
      AdditionalNote: medical.AdditionalNote,
      SurgicalHistory: medical.SurgicalHistory
    }
    navigate("/booking");
    //console.log(data);
  }

  return (
    <div>
      <div className='container mt-5'>
        <div className='row '>
          <div className='col-md-12'>
            <div className='card'>
              <div className='card-header'>
                <h4 >Medical Details
                  <Link to='/home' className="btn btn-danger float-end">Back</Link>
                </h4>
              </ div>
              <div className='card-body'>
                <form onSubmit={saveStudent}>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Emergency Person's Contact Name</label>
                    <input type="text" name="name" value={medical.name} onChange={handleInput} className="form-control" />
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Allergies</label>
                    <input type="text" name="allergies" value={medical.allergies} onChange={handleInput} className="form-control" />
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Surgical History</label>
                    <input type="text" name="History" value={medical.History} onChange={handleInput} className="form-control" />
                  </div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Oxygen Level</label>
                    <select type='text' name='OxyLevel' value={medical.OxyLevel} onChange={handleInput} className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='mb-3 col-md-2 float-start'></div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Heart Beat</label>
                    <select name='HeartBeat' value={medical.HeartBeat} onChange={handleInput} className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Pressure</label>
                    <select name='Pressure' value={medical.Pressure} onChange={handleInput} className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='mb-3 col-md-2 float-start'></div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Blood Group</label>
                    <select name='BloodGroup' value={medical.BloodGroup} onChange={handleInput} className="form-select" aria-label="Default select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Additional Note</label>
                    <input type="text" value={medical.AdditionalNote} onChange={handleInput} name="AdditionalNote" className="form-control" />
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Surgical History</label>
                    <input type="text" value={medical.SurgicalHistory} onChange={handleInput} name="SurgicalHistory" className="form-control" />
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <button type='submit' className='btn btn-primary' disabled={!areAllFieldsFilled} >Save Details</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
