import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Sign Up/AuthForm.css';

const SignupPage = ({ onAuthSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/signup', {  // fixed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setMessage('Signup successful! Please login.');
      console.log('Signup successful:', data);

      // Instead of sending user directly to dashboard, redirect them to login
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Your Medchain Account</h2>
        <div className="form-group">
          {error && <p className="auth-error">{error}</p>}
          {message && <p className="auth-success">{message}</p>}
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
// import '../Sign Up/AuthForm.css';

// const SignupPage = ({ onAuthSuccess }) => { // Received onAuthSuccess prop
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => { // Made async to simulate API call
//     e.preventDefault();
//     setError('');
//     setMessage('');

//     try {
//       const response = await fetch('http://localhost:5000/api/Signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }), // Send name, email, password
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Something went wrong');
//       }

//       setMessage('Signup successful! Please login.');
//       console.log('Signup successful:', data);
//       onAuthSuccess(); // Call the prop function to update login status in App.js
//       navigate('/dashboard'); // Redirect to dashboard
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Create Your Medchain Account</h2>
//         <div className="form-group">
//           {error && <p className="auth-error">{error}</p>}
//           {message && <p className="auth-success">{message}</p>}
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Sign Up</button>
//         <p className="auth-switch">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;