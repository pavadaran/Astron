import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { database } from '../../firebase';
import { ref, getDatabase, set } from "firebase/database"
import {firebase} from '../../firebase'
require('firebase/auth')

const Medical = () => {

  // const ref = collection(firestore, "medicalData");

  const [medical, setMedical] = useState({
    name: '',
    allergies: '',
    History: '',
    OxyLevel: '',
    HeartBeat: '',
    Pressure: '',
    Pressure2: '',
    BloodGroup: '',
    AdditionalNote: '',
    SurgicalHistory: ''
  })

  const handleInput = (e) => {
    e.persist();
    setMedical({ ...medical, [e.target.name]: e.target.value });
  }

  if (!medical.AdditionalNote == "" && !medical.allergies == "" && !medical.BloodGroup == "" && !medical.History == "" && !medical.name == "" && !medical.OxyLevel == "" && !medical.Pressure == "" && !medical.SurgicalHistory == "" && !medical.HeartBeat == "") {
    console.log(medical);
  }

  const areAllFieldsFilled = (medical.AdditionalNote != "") && (medical.allergies != "") && (medical.BloodGroup != "") && (medical.History != "") && (medical.name != "") && (medical.OxyLevel != "") && (medical.Pressure != "") && (medical.SurgicalHistory != "") && (medical.HeartBeat != "");

  const saveStudent = (e) => {
    e.preventDefault();

    const db = getDatabase();
    set(ref(db, 'medical/2'), {
      name: medical.name,
      allergies: medical.allergies,
      History: medical.History,
      OxyLevel: medical.OxyLevel,
      HeartBeat: medical.HeartBeat,
      Pressure: medical.Pressure,
      Pressure2: medical.Pressure2,
      BloodGroup: medical.BloodGroup,
      AdditionalNote: medical.AdditionalNote,
      SurgicalHistory: medical.SurgicalHistory
    });
    console.log("Success");
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
                    <input type="text" name="name" value={medical.name} onChange={handleInput} className="form-control" required />
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Allergies</label>
                    <input type="text" name="allergies" value={medical.allergies} onChange={handleInput} className="form-control" required />
                  </div>
                  <div className='mb-3 col-md-12 float-start'>
                    <label className='float-start'>Surgical History</label>
                    <input type="text" name="History" value={medical.History} onChange={handleInput} className="form-control" required />
                  </div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Oxygen Level</label>
                    <input type="text" name="OxyLevel" value={medical.OxyLevel} onChange={handleInput} className="form-control" required />
                  </div>
                  <div className='mb-3 col-md-2 float-start'></div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Heart Beat</label>
                    <input type="text" name="HeartBeat" value={medical.HeartBeat} onChange={handleInput} className="form-control" required />
                  </div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Pressure</label>
                    <br />
                    <input type="number" pattern="[0-9]*" name="Pressure" value={medical.Pressure} onChange={handleInput} className="smaller-input" required />
                    <div>/</div>
                    <input type="number" pattern="[0-9]*" name="Pressure2" value={medical.Pressure2} onChange={handleInput} className="smaller-input" required />
                  </div>
                  <div className='mb-3 col-md-2 float-start'></div>
                  <div className='mb-3 col-md-5 float-start'>
                    <label className='float-start'>Blood Group</label>
                    <select name='BloodGroup' value={medical.BloodGroup} onChange={handleInput} className="form-select" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
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
