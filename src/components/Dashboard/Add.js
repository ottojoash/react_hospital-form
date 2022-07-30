import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [NIN, setNIN] = useState('');
  const [nameofCitizen, setnameofCitizen] = useState('');
  const [phoneContact, setphoneContact] = useState('');
  const [typeofVaccine, settypeofVaccine] = useState('');
  const [dateofVaccination, setdateofVaccination] = useState('');
  const [dateofBirth, setdateofBirth] = useState('');
  const [Gender, setGender] = useState('');
  const [District, setDistrict] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!NIN || !nameofCitizen || !phoneContact || !typeofVaccine|| !dateofVaccination|| !dateofBirth|| !Gender || !District) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      NIN,
      nameofCitizen,
      phoneContact,
      typeofVaccine,
      dateofVaccination,
      dateofBirth,
      Gender,
      District,
    };

    employees.push(newEmployee);
    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${NIN} ${nameofCitizen}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="NIN">NIN</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={NIN}
          onChange={e => setNIN(e.target.value)}
        />
        <label htmlFor="nameofCitizen">Name of Citizen</label>
        <input
          id="nameofCitizen"
          type="text"
          name="nameofCitizen"
          value={nameofCitizen}
          onChange={e => setnameofCitizen(e.target.value)}
        />
        <label htmlFor="phoneContact">Phone contact</label>
        <input
          id="phoneContact"
          type="number"
          name="phoneContact"
          value={phoneContact}
          onChange={e => setphoneContact(e.target.value)}
        />
        <label htmlFor="salary">type of vaccine</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={typeofVaccine}
          onChange={e => settypeofVaccine(e.target.value)}
        />
        <label htmlFor="dateofVaccination">Date of Vaccination</label>
        <input
          id="dateofVaccination"
          type="date"
          name="dateofVaccination"
          value={dateofVaccination}
          onChange={e => setdateofVaccination(e.target.value)}
        />
        <label htmlFor="dateofBirth">Date of Birth</label>
        <input
          id="dateofBirth"
          type="date"
          name="dateofBirth"
          value={dateofBirth}
          onChange={e => setdateofBirth(e.target.value)}
        />
        <label htmlFor="Gender">Gender</label>
        <input
          id="Gender"
          type="text"
          name="Gender"
          value={Gender}
          onChange={e => setGender(e.target.value)}
        />
        <label htmlFor="District">District</label>
        <input
          id="District"
          type="text"
          name="District"
          value={District}
          onChange={e => setDistrict(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
