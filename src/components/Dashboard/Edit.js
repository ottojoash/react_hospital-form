import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [NIN, setNIN] = useState(selectedEmployee.NIN);
  const [nameofCitizen, setnameofCitizen] = useState(selectedEmployee.nameofCitizen);
  const [phoneContact, setphoneContact] = useState(selectedEmployee.phoneContact);
  const [typeofVaccine, settypeofVaccine] = useState(selectedEmployee.typeofVaccine);
  const [dateofVaccination, setdateofVaccination] = useState(selectedEmployee.dateofVaccination);
  const [dateofBirth, setdateofBirth] = useState(selectedEmployee.dateofBirth);
  const [Gender, setGender] = useState('');
  const [District, setDistrict] = useState('');

  const handleUpdate = e => {
    e.preventDefault();

    if (!NIN || !nameofCitizen || !phoneContact || !typeofVaccine || !dateofVaccination || !dateofBirth || !District) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
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

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.NIN} ${employee.nameofCitizen}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="NIN">NIN</label>
        <input
          id="NIN"
          type="text"
          name="NIN"
          value={NIN}
          onChange={e => setNIN(e.target.value)}
        />
        <label htmlFor="nameofCitizen">nameofCitizen</label>
        <input
          id="nameofCitizen"
          type="text"
          name="nameofCitizen"
          value={nameofCitizen}
          onChange={e => setnameofCitizen(e.target.value)}
        />
        <label htmlFor="phoneContact">phoneContact</label>
        <input
          id="phoneContact"
          type="number"
          name="phoneContact"
          value={phoneContact}
          onChange={e => setphoneContact(e.target.value)}
        />
        <label htmlFor="typeofVaccine">typeofVaccine</label>
        <input
          id="typeofVaccine"
          type="text"
          name="typeofVaccine"
          value={typeofVaccine}
          onChange={e => settypeofVaccine(e.target.value)}
        />
        <label htmlFor="dateofvaccination">dateofVaccination</label>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
