import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !mail || !password) {
            setError('All fields are required.');
            return;
        }

        try {
            const newUser = { name, email: mail, password };
            const response = await axios.post("http://localhost:8000/signup", newUser);
            console.log('User created:', response.data);
            setName('');
            setEmail('');
            setPassword('');
            setError(null);
            alert('Account created successfully!');
        } catch (error) {
            console.error('Error creating user:', error);
            setError('There was an error creating the account. Please try again later.');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-image">
            </div>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <h1>Create account</h1>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={mail}
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
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
