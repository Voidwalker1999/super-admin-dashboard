import React, { useState, useEffect } from 'react';
import './App.css';

function Report({ report }) {
    const handleAlert = () => {
        alert(`Alert: ${report}`);
    };

    return (
        <div className="report">
            <h3>{report}</h3>
            <p>Notification: This report requires attention!</p>
            <button onClick={handleAlert}>Alert</button>
        </div>
    )
}

function Reports() {
    const [reports, setReports] = useState([]);

    const fetchReports = async () => {
        setReports([
            'E-commerce platform crash reports',
            'Database crash reports',
            'Other crash reports'
        ]);
    };

    useEffect(() => {
        fetchReports();
    }, []);

    return (
        <div className="reports">
            <h2>Reports</h2>
            {reports.map((report, index) => (
                <Report key={index} report={report} />
            ))}
        </div>
    )
}

function AlertHistory({ alerts }) {
    return (
        <div className="alert-history">
            <h2>Alert History</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert}</li>
                ))}
            </ul>
        </div>
    )
}

function App() {
    const [alerts, setAlerts] = useState([]);

    const handleAlert = (alert) => {
        setAlerts([...alerts, alert]);
    };

    return (
        <div className="App">
            <Reports />
            <AlertHistory alerts={alerts} />
        </div>
    )
}

export default App;