
import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h2>Signup your profile</h2>
                <form className="signup-form">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter your name"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter your password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" placeholder="Confirm your password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="signup-button">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;