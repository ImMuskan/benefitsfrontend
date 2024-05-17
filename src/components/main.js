import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
function MainPage() {
    return (
        <div className='mainpage'>
            <div className='nav'>
                <nav class="navbar" style={{ fontWeight: 'bold' }}>
                    <a class="navbar-brand " href="">
                        <img src={process.env.PUBLIC_URL + '/ep.png'} alt="Logo" width="50" height="50" style={{ borderRadius: '50%' }} />
                    </a>
                    <a class="navbar-brand" style={{ marginLeft: '-35px' }}>
                        <span class="navbar-text"><Link to="/">BENEFITS</Link></span>
                    </a>
                    <ul className="navbar-nav ms-auto" style={{ fontSize: '20px', float: 'right' }}>
                        <li className="nav-item" id='login' style={{ marginRight: '18px', padding: '8px', width: '100px' }}>
                            <a className="nav-link" href="" style={{ color: ' rgb(244, 210, 163)' }}><Link to="/login">Login</Link></a>
                        </li>
                        <li className="nav-item" id='signup' style={{ marginRight: '18px', padding: '8px', width: '100px' }}>
                            <a className="nav-link" href="" style={{ color: ' rgb(244, 210, 163)' }}><Link to="/register">SignUp</Link></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='cont'>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={process.env.PUBLIC_URL + '/img1.jpg'} alt="Chicago" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='h5'>Level up your mind: Learn through play!</h5>
                            </div>
                        </div>
                        <div className="item ">
                            <img src={process.env.PUBLIC_URL + '/img2.jpg'} alt="Los Angeles" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='h5'>Game-based learning: Where every challenge is a lesson</h5>
                            </div>
                        </div>
                        <div className="item ">
                            <img src={process.env.PUBLIC_URL + '/img3.jpg'} alt="Chicago" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='h5'>Level up your mind: Learn through play!</h5>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <Outlet />
        </div>
    );
}
export default MainPage;
