import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // Reusing the same CSS

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        try {
            const user = { email, password };
            const response = await axios.post("http://localhost:8000/login", user);
            console.log('Login response:', response.data);

            if (response.data.success) {
                setEmail('');
                setPassword('');
                setError(null);
                alert('Login successful!');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="signup-page">
           
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <h1>Log in to Your Account</h1>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn-submit">
                        Log In
                    </button>

                    <p className="login-link">
                        Don’t have an account? <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
