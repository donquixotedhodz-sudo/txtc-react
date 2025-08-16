import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const TechnicianDashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src="/logo.png" alt="Logo" width="30" height="30" className="me-2" />
            Job Order System - Technician
          </span>
          <div className="navbar-nav ms-auto">
            <span className="navbar-text me-3">
              Welcome, {user?.username}
            </span>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4><i className="fas fa-tools me-2"></i>Technician Dashboard</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card bg-info text-white">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h4>My Orders</h4>
                            <h2>0</h2>
                          </div>
                          <div className="align-self-center">
                            <i className="fas fa-clipboard-list fa-2x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-warning text-white">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h4>In Progress</h4>
                            <h2>0</h2>
                          </div>
                          <div className="align-self-center">
                            <i className="fas fa-cog fa-2x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card bg-success text-white">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h4>Completed</h4>
                            <h2>0</h2>
                          </div>
                          <div className="align-self-center">
                            <i className="fas fa-check-circle fa-2x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="card">
                    <div className="card-header">
                      <h5><i className="fas fa-list me-2"></i>Recent Job Orders</h5>
                    </div>
                    <div className="card-body">
                      <div className="text-center text-muted py-4">
                        <i className="fas fa-inbox fa-3x mb-3"></i>
                        <p>No job orders assigned yet.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-muted">
                    <i className="fas fa-info-circle me-2"></i>
                    This is the React version of the Job Order System technician dashboard. 
                    The original PHP functionality can be integrated here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDashboard;