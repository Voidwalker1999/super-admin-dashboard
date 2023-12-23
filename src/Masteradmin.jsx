import React, { useState } from 'react';

function Masteradmin() {
    const [masterAdmins, setMasterAdmins] = useState([]);
    const [newMasterAdmin, setNewMasterAdmin] = useState({ fullName: '', email: '', mobileNumber: '', country: '', schoolName: '', designation: '', masterAdminId: '', schoolId: '' });
    const [showInputs, setShowInputs] = useState(false);

    const addMasterAdmin = () => {
        // Generate Master Admin Id and School Id
        const masterAdminId = generateMasterAdminId();
        const schoolId = generateSchoolId();

        // Update newMasterAdmin state with generated Ids
        setNewMasterAdmin(prevState => ({
            ...prevState,
            masterAdminId,
            schoolId
        }));

        // Add newMasterAdmin to masterAdmins array
        setMasterAdmins(prevState => [...prevState, newMasterAdmin]);

        console.log('New Master Admin:', newMasterAdmin);
        setShowInputs(true);
    }

    const removeMasterAdmin = (masterAdminId) => {
        // Remove Master Administrator logic here
        const updatedMasterAdmins = masterAdmins.filter(admin => admin.masterAdminId !== masterAdminId);
        setMasterAdmins(updatedMasterAdmins);
    }

    const changeSettings = () => {
        // Change Settings and Preferences logic here
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMasterAdmin(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const generateMasterAdminId = () => {
        // Generate Master Admin Id logic here
        const randomId = Math.floor(Math.random() * 1000);
        return `MA${randomId}`;
    }

    const generateSchoolId = () => {
        // Generate School Id logic here
        const randomId = Math.floor(Math.random() * 1000);
        return `SCH${randomId}`;
    }

    return (
        <div className='admin-container'>
            <div className="add-section">
                <button id="add-master-admin-btn" onClick={addMasterAdmin}>Add new Master Administrator</button>
            </div>
            {showInputs && (
                <>
                    <br></br>
                    <hr />
                    <br></br>
                    <p id="master-admin-id">Master Admin Id: {newMasterAdmin.masterAdminId}</p>
                    <p id="school-id">School Id: {newMasterAdmin.schoolId}</p>
                    
                    <label htmlFor="full-name-input">Full Name:</label>
                    <input id="full-name-input" name="fullName" value={newMasterAdmin.fullName} onChange={handleChange} placeholder="Full Name" className="input-field" />

                    <label htmlFor="email-input">Email:</label>
                    <input id="email-input" name="email" value={newMasterAdmin.email} onChange={handleChange} placeholder="Email" className="input-field" />

                    <label htmlFor="mobile-number-input">Mobile Number:</label>
                    <input id="mobile-number-input" name="mobileNumber" value={newMasterAdmin.mobileNumber} onChange={handleChange} placeholder="Mobile Number" className="input-field" />

                    <label htmlFor="country-input">Country:</label>
                    <input id="country-input" name="country" value={newMasterAdmin.country} onChange={handleChange} placeholder="Country" className="input-field" />

                    <label htmlFor="school-name-input">School Name:</label>
                    <input id="school-name-input" name="schoolName" value={newMasterAdmin.schoolName} onChange={handleChange} placeholder="School Name" className="input-field" />

                    <label htmlFor="designation-input">Designation:</label>
                    <input id="designation-input" name="designation" value={newMasterAdmin.designation} onChange={handleChange} placeholder="Designation" className="input-field" />

                    <button id="clear-all-btn" onClick={() => setNewMasterAdmin({ fullName: '', email: '', mobileNumber: '', country: '', schoolName: '', designation: '', masterAdminId: '', schoolId: '' })}>Clear All</button>
                    <button id="create-btn" onClick={addMasterAdmin}>Create</button>
                    <br></br>
                    <hr />
                    <br></br>
                </>
            )}
            {masterAdmins.map(admin => (
                <div key={admin.masterAdminId} className="master-admin">
                    <p>Master Admin Id: {admin.masterAdminId}</p>
                    <p>School Id: {admin.schoolId}</p>
                    <p>Name: {admin.fullName}</p>
                    <p>Email: {admin.email}</p>
                    <p>Mobile Number: {admin.mobileNumber}</p>
                    <p>Country: {admin.country}</p>
                    <p>School Name: {admin.schoolName}</p>
                    <p>Designation: {admin.designation}</p>
                    <button className="remove-btn" onClick={() => removeMasterAdmin(admin.masterAdminId)}>Remove</button>
                </div>
            ))}
            <br></br>
            <div className="remove-section">
                <button id="remove-master-admin-btn" onClick={() => removeMasterAdmin(newMasterAdmin.masterAdminId)}>Remove Master Administrator</button>
            </div>
            <br></br>
            <div className="settings-section">
                <button id="change-settings-btn" onClick={changeSettings}>Change Settings and Preferences of Master Administrator</button>
            </div>
        </div>
    )
}

export default Masteradmin;
