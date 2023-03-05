import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Partners">Partners</Link>
                    </li>
                    <li>
                        <Link to="/Timeline">Timeline</Link>
                    </li>
                    <li>
                        <Link to="/Shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/TermsAndConditions">TermsAndConditions</Link>
                    </li>
                    <li>
                        <Link to="/PrivacyPolicy">PrivacyPolicy</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <footer>Footer</footer>
        </>
    )
};

export default Layout;
