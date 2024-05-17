import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const inputs = document.querySelectorAll(".input");

        function addClass() {
            let parent = this.parentNode.parentNode;
            parent.classList.add("focus");
        }

        function removeClass() {
            let parent = this.parentNode.parentNode;
            if (this.value === "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", addClass);
            input.addEventListener("blur", removeClass);

            return () => {
                input.removeEventListener("focus", addClass);
                input.removeEventListener("blur", removeClass);
            };
        });
    }, []);
    const handleUserLogin = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            localStorage.setItem('userAuthToken2', data.token);
            localStorage.setItem('userid2', data.user._id);
            localStorage.setItem('userdata2',data.user);
            if (response.ok) {
                const authResponse = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/auth-user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-user-auth-token': data.token,
                    },
                });
                if (authResponse.ok) {

                    console.log('Authentication successful.');

                    console.log(data.token)
                    navigate("/userdashboard");
                } else {
                    console.error('Authentication failed:', authResponse.statusText);
                }
                console.log('Login successful:', data);
            } else {
                console.error('Login failed:', data);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    const handleAdminLogin = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                navigate("/admindashboard");
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    return (
        <div >
            <img className="wave" src={process.env.PUBLIC_URL + '/wave2.png'} alt="Wave" />
            <div className='nav'>
                <nav class="navbar" style={{ fontWeight: 'bold' }}>
                    <a class="navbar-brand " href="#">
                        <img src={process.env.PUBLIC_URL + '/ep.png'} alt="Logo" width="50" height="50" style={{ borderRadius: '50%' }} />
                    </a>
                    <a class="navbar-brand" style={{ marginLeft: '-35px' }}>
                        <span class="navbar-text"><Link to="/">BENEFITS</Link></span>
                    </a>
                    <ul className="navbar-nav ms-auto" style={{ fontSize: '20px', float: 'right' }}>
                        <li className="nav-item" id='login' style={{ marginRight: '18px', padding: '8px', width: '100px' }}>
                            <a className="nav-link" href="#" style={{ color: ' rgb(244, 210, 163)' }}><Link to="/login">Login</Link></a>
                        </li>
                        <li className="nav-item" id='signup' style={{ marginRight: '18px', padding: '8px', width: '100px' }}>
                            <a className="nav-link" href="#" style={{ color: ' rgb(244, 210, 163)' }}><Link to="/register">SignUp</Link></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="contai">
                <div className="img"></div>
                <div className="login-content">
                    <form action="index.html">
                        <img src={process.env.PUBLIC_URL + '/avatar.svg'} alt="Avatar" />
                        <h2 className="title">LOGIN</h2>
                        <div className="input-div one">
                            <div className="i">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <a href="#" className='a'>Forgot Password?</a>
                        <input type="button" className="btn" value="Login as User" onClick={handleUserLogin} />
                        <input type="button" className="btn" value="Login as Admin" onClick={handleAdminLogin} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
