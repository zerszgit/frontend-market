import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    login: '',
    password: ''
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://178.173.21.196:7099/account/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setRegistrationStatus('Success');
        console.log('Registration successful');
      } else {
        setRegistrationStatus('Failed');
        console.error('Registration failed:', await response.json());
      }
    } catch (error) {
      setRegistrationStatus('Failed');
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Login:</label>
          <input type="text" name="login" value={formData.login} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {registrationStatus && (
        <p>{registrationStatus === 'Success' ? 'Registration successful!' : 'Registration failed.'}</p>
      )}
    </div>
  );
}

export default RegistrationForm;
