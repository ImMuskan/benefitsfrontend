import { useState } from "react";
import Users from "./users";
import { Link } from "react-router-dom";
import Benefits from "./benefits";
import AdminBen from "./adminben";
import Benform from "./benform";
import './module.css'
function Admindashboard() {
    const [users, setusers] = useState(null);
    const [show1, setshow1] = useState(null);
    const [benefits, setbenefits] = useState(null);
    const [show2, setshow2] = useState(null);
    const [show3, setshow3] = useState(null);
    const addbenefit = async () => {
        if (show1) {
            setshow1(!show1);
        }
        if (show2) {
            setshow2(!show2);
        }
        setshow3(!show3);
    }
    const showUers = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/admin/users', {
                method: 'GET'
            });
            const d = await response.json();
            console.log(d)
            setusers(d);
        } catch (error) {
            console.log(error);
        }
        if (show2) {
            setshow2(!show2);
        }
        if (show3) {
            setshow3(!show3);
        }
        setshow1(!show1);

    }
    const showbenefits = async () => {
        try {
            const response = await fetch('https://benefits-ldpd.onrender.com/api/v1/user/getbenefits', {
                method: 'GET'
            });
            const d = await response.json();
            setbenefits(d);
        } catch (error) {
            console.log(error);
        }
        if (show1) {
            setshow1(!show1);
        }
        if (show3) {
            setshow3(!show3);
        }
        setshow2(!show2);
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
            <div style={{ marginTop: '150px' }}>
                <button onClick={showUers} style={{ padding: '10px', fontSize: '25px', margin: '10px' }}>Show all users</button>
                <button onClick={showbenefits} style={{ padding: '10px', fontSize: '25px', margin: '10px' }}>Show benefits</button>
                <button onClick={addbenefit} style={{ padding: '10px', fontSize: '25px', margin: '10px' }}>Add benefits</button>
                {
                    show1 &&
                    <div>
                        <Users data={users} />
                    </div>
                }
                {
                    show2 &&
                    <div>
                        <AdminBen data={benefits} />
                    </div>
                }
                {
                    show3 &&
                    <div>
                        <Benform/>
                    </div>
                }
            </div>
        </div >
    )
}
export default Admindashboard;