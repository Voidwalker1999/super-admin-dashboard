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
        <div>
            <button onClick={addMasterAdmin}>Add new Master Administrator</button>
            <button onClick={() => removeMasterAdmin(newMasterAdmin.masterAdminId)}>Remove Master Administrator</button>
            <button onClick={changeSettings}>Change Settings and Preferences of Master Administrator</button>
            {showInputs && (
                <>
                    <input name="fullName" value={newMasterAdmin.fullName} onChange={handleChange} placeholder="Full Name" />
                    <input name="email" value={newMasterAdmin.email} onChange={handleChange} placeholder="Email" />
                    <input name="mobileNumber" value={newMasterAdmin.mobileNumber} onChange={handleChange} placeholder="Mobile Number" />
                    <input name="country" value={newMasterAdmin.country} onChange={handleChange} placeholder="Country" />
                    <input name="schoolName" value={newMasterAdmin.schoolName} onChange={handleChange} placeholder="School Name" />
                    <input name="designation" value={newMasterAdmin.designation} onChange={handleChange} placeholder="Designation" />

                    <p>Master Admin Id: {newMasterAdmin.masterAdminId}</p>
                    <p>School Id: {newMasterAdmin.schoolId}</p>

                    <button onClick={() => setNewMasterAdmin({ fullName: '', email: '', mobileNumber: '', country: '', schoolName: '', designation: '', masterAdminId: '', schoolId: '' })}>Clear All</button>
                    <button onClick={addMasterAdmin}>Create</button>
                </>
            )}
            {masterAdmins.map(admin => (
                <div key={admin.masterAdminId}>
                    <p>Name: {admin.fullName}</p>
                    <p>Email: {admin.email}</p>
                    <p>Mobile Number: {admin.mobileNumber}</p>
                    <p>Country: {admin.country}</p>
                    <p>School Name: {admin.schoolName}</p>
                    <p>Designation: {admin.designation}</p>
                    <button onClick={() => removeMasterAdmin(admin.masterAdminId)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Masteradmin
