import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingScreen from './LoadingScreen';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { user, login, loading, error, setError } = useAuth();

  // Redirect if already logged in
  if (user && !loading) {
    const redirectPath = user.role === 'admin' ? '/admin/dashboard' : '/technician/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    setShowLoading(true);
    setProgress(0);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    try {
      const result = await login(username, password);
      
      if (result.success) {
        // Wait for progress to complete
        setTimeout(() => {
          window.location.href = result.redirect;
        }, 100);
      } else {
        clearInterval(progressInterval);
        setShowLoading(false);
        setProgress(0);
      }
    } catch (err) {
      clearInterval(progressInterval);
      setShowLoading(false);
      setProgress(0);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <LoadingScreen show={showLoading} progress={progress} />
      
      <div className="login-page">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <div className="logo-circle">
                <img src="/logo.png" alt="Logo" className="logo-image" />
              </div>
              <h2>Job Order System</h2>
              <p className="text-muted">Please login to continue</p>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                <i className="fas fa-exclamation-circle me-2"></i>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-floating mb-3">
                <div className="password-field-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {password && (
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  )}
                </div>
                <label htmlFor="password">Password</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 btn-login"
                disabled={loading}
              >
                <i className="fas fa-sign-in-alt me-2"></i>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;