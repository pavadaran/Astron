import React, { useState } from 'react';

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

  const handleInput = (e) => {
    e.persist();
    setMedical({ ...medical, [e.target.name]: e.target.value });
  }

  console.log(medical);

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
                  <input type="text" name="name" value={medical.name} onChange={handleInput} className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Allergies</label>
                  <input type="text" name="allergies" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Surgical History</label>
                  <input type="text" name="History" className="form-control" />
                </div>
                <div className='mb-3 col-md-5 float-start'>
                  <label className='float-start'>Oxygen Level</label>
                  <select name='OxyLevel' className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='mb-3 col-md-2 float-start'></div>
                <div className='mb-3 col-md-5 float-start'>
                  <label className='float-start'>Heart Beat</label>
                  <select name='HeartBeat' className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='mb-3 col-md-5 float-start'>
                  <label className='float-start'>Pressure</label>
                  <select name='Pressure' className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='mb-3 col-md-2 float-start'></div>
                <div className='mb-3 col-md-5 float-start'>
                  <label className='float-start'>Blood Group</label>
                  <select name='BloodGroup' className="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Additional Note</label>
                  <input type="text" name="AdditionalNote" className="form-control" />
                </div>
                <div className='mb-3 col-md-12 float-start'>
                  <label className='float-start'>Surgical History</label>
                  <input type="text" name="SurgicalHistory" className="form-control" />
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
