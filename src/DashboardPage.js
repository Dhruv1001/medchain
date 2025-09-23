import React from 'react';
import './DashboardPage.css';

const DashboardPage = ({ onLogout }) => {
  // Dummy data for demonstration purposes
  const medicalHistory = [
    { date: '2023-10-26', event: 'Annual Physical Exam', doctor: 'Dr. Smith' },
    { date: '2023-05-15', event: 'Flu Vaccination', doctor: 'Nurse Jane' },
    { date: '2022-11-01', event: 'Blood Test', doctor: 'Dr. Smith' },
  ];

  const medicalReports = [
    { date: '2023-10-27', type: 'Physical Exam Report', link: '#', status: 'Completed' },
    { date: '2023-05-16', type: 'Vaccination Record', link: '#', status: 'Completed' },
    { date: '2022-11-05', type: 'Blood Work Results', link: '#', status: 'Completed' },
    { date: '2024-01-10', type: 'Upcoming Appointment', link: '#', status: 'Scheduled' },
  ];

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Welcome to Your Medchain Dashboard</h1>
        <button onClick={onLogout} className="btn btn-secondary">Logout</button>
      </header>

      <main className="dashboard-content">
        <section className="medical-history-section">
          <h2>Medical History</h2>
          {medicalHistory.length > 0 ? (
            <ul className="history-list">
              {medicalHistory.map((entry, index) => (
                <li key={index} className="history-item">
                  <strong>{entry.date}:</strong> {entry.event} by {entry.doctor}
                </li>
              ))}
            </ul>
          ) : (
            <p>No medical history available.</p>
          )}
        </section>

        <section className="medical-reports-section">
          <h2>Medical Reports & Documents</h2>
          {medicalReports.length > 0 ? (
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {medicalReports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.date}</td>
                    <td>{report.type}</td>
                    <td><span className={`status-${report.status.toLowerCase().replace(' ', '-')}`}>{report.status}</span></td>
                    <td>
                      {report.status === 'Completed' && <a href={report.link} target="_blank" rel="noopener noreferrer" className="btn-small">View</a>}
                      {report.status === 'Scheduled' && <button className="btn-small btn-disabled" disabled>Manage</button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No medical reports available.</p>
          )}
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} Medchain. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;