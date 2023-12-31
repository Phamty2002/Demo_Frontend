import React, { useState } from 'react';
import './Signup.css'

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState(''); // Add phone state
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  
  async function handleSignUp(event) {
    event.preventDefault();
  
    try {
      const response = await fetch('http://ec2-44-193-223-237.compute-1.amazonaws.com:3001/api/signup/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email, phone_number }), // Include phone_number in the request body
      });
  
      if (response.ok) {
        const successData = await response.json();
        setSuccessMessage(successData.message); // Set the success message
        setIsModalOpen(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        console.error('Sign Up failed');
      }
    } catch (error) {
      setError('An error occurred');
      console.error('An error occurred', error);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.href = '/sign-in';
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>} {/* Display success message */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Add a phone_number input field */}
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            required
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
        <p className="login-link">
          Already have an account? <a href="/sign-in">Log In</a>
        </p>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Sign Up Successful</h2>
            <p>Your sign-up was successful. You can now log in.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
