import { NavLink } from "react-router-dom";

function NavBar (){
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">BadBank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/createaccount" aria-current="page">Create Account</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-link" to="/deposit">Deposit</NavLink>
                        <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
                        <NavLink className="nav-link" to="/balance">Balance</NavLink>
                        <NavLink className="nav-link" to="/alldata">All Data</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>);
}

export default NavBar;