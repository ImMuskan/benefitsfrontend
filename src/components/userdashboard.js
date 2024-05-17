import { Link } from 'react-router-dom';
import './login.css';
import { useState, useEffect } from 'react';
import Benefits from './benefits';
import RegBenefits from './regbenefits';
function Userdashboard() {
    const [data, setdata] = useState(null);
    const [data2, setdata2] = useState(null);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [showMain, setShowMain] = useState(false);
    const [regben, setregben] = useState(null);
    const showbenefits = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/getbenefits', {
                method: 'GET'
            });
            const d = await response.json();
            setdata(d);
        } catch (error) {
            console.log(error);
        }
        if (showMain) {
            setShowMain(!showMain);
        }
        if (show2) {
            setShow2(!show2);
        }
        if (show3) {
            setShow3(!show3);
        }
        setShow1(!show1);
    }
    const showregbenefits = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/getbenefits', {
                method: 'GET'
            });
            const d = await response.json();
            const userid = localStorage.getItem('userid2');
            console.log(userid)
            try {
                const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/getUser', {
                    method: 'GET',
                    headers: {
                        'userid': userid
                    },
                });
                var u = await response.json();
                console.log(u);
            } catch (error) {
                console.log(error);
            }
            const regbenefits = d.filter(benefit => u.added_benefits.includes(benefit._id));
            setregben(regbenefits);
            console.log(regbenefits)

        } catch (error) {
            console.log(error);
        }
        if (showMain) {
            setShowMain(!showMain);
        }
        if (show1) {
            setShow1(!show1);
        }
        if (show3) {
            setShow3(!show3);
        }
        setShow2(!show2);
    }
    return (
        <div>
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
                            <a className="nav-link" href="#" style={{ color: ' rgb(244, 210, 163)' }}><Link to="/">Logout</Link></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={{ display: 'flex', padding: '5px', marginTop: '5%' }}>
                <div style={{ width: '450px', margin: '10px' }}>
                    <img style={{ width: '100%', height: '400px' }} src={process.env.PUBLIC_URL + '/ben1.jpg'}></img>
                    <h3 style={{ textAlign: 'center', padding: '10px', color: 'white', backgroundColor: 'black' }} onClick={showbenefits}>Show Benefits</h3>
                </div>
                <div style={{ width: '450px', margin: '10px' }}>
                    <img style={{ width: '100%', height: '400px' }} src={process.env.PUBLIC_URL + '/ben2.jpeg'}></img>
                    <h3 style={{ textAlign: 'center', padding: '10px', color: 'white', backgroundColor: 'black' }} onClick={showregbenefits}>Show registered Benefits</h3>
                </div>
                <div style={{ width: '450px', margin: '10px' }}>
                    <img style={{ width: '100%', height: '400px' }} src={process.env.PUBLIC_URL + '/ben3.png'}></img>
                    <h3 style={{ textAlign: 'center', padding: '10px', color: 'white', backgroundColor: 'black' }}>Register for new Benefit</h3>
                </div>
            </div>
            <div style={{ margin: '3%' }}>
                {show1 &&
                    <div className='modules' id='modules'>
                        <h1 style={{ backgroundColor: 'rgb(2, 2, 52)', padding: '10px', color: 'white' }}>Benefits</h1>
                        <Benefits data={data} />
                    </div>
                }
                {
                    show2 &&
                    <div className='modules' id='modules'>
                        <h1 style={{ backgroundColor: 'rgb(2, 2, 52)', padding: '10px', color: 'white' }}>Registered Benefits</h1>
                        <RegBenefits data={regben} />
                    </div>
                }
            </div>
        </div>
    )
}
export default Userdashboard;