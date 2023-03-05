import { Outlet, Link } from "react-router-dom";
import $ from 'jquery'
import logo from '../images/General/TWOL Logo.jpg'
import './Layout.css'

const Layout = () => {
    const logoalt = "This Way Of Life Logo";

    function toggle(){
        $('#navHeaderCollapse').toggleClass("collapse");
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className={"navbar-brand"}to="/">
    <img src={logo} className="logoNavStyle" alt={logoalt}>
    </img>
  </Link>

  <button onClick={toggle} className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navHeaderCollapse">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" onClick={toggle}>
      <li className={"nav-link active"}>
                        <Link className={"nav-link"}to="/">Home</Link>
                    </li>
                    <li className={"nav-link"}>
                        <Link to="/Partners" className={"nav-link"}>Partners</Link>
                    </li>
                    <li className={"nav-link"}>
                        <Link to="/Timeline" className={"nav-link"}>Timeline</Link>
                    </li>
                    <li className={"nav-link"}>
                        <Link to="/Shop" className={"nav-link"}>Shop</Link>
                    </li>
                    <li className={"nav-link"}>
                        <Link to="/Contact" className={"nav-link"}>Contact</Link>
                    </li>
    </ul>
  </div>
</nav>
            <div id="renderBox">
                <Outlet/>
            </div>
            <footer className="section-blur">
                <hr/>
                <p>©2023 This Way Of Life</p>
                <Link to="/TermsAndConditions" className={"nav-link"}>Terms And Conditions</Link>
                <Link to="/PrivacyPolicy" className={"nav-link"}>Privacy Policy</Link>
            </footer>
        </>
    )
};

export default Layout;
