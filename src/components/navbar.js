import { NavLink } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context";


function NavBar (){

    const {users, currentUser, setCurrentUser} = useContext(UserContext);

    function handleUserChange(props) {
        let counter = currentUser;

        if(props) {
            counter = currentUser + 1;
            cycling();
            setCurrentUser(counter);
        } else {
            counter = currentUser - 1;
            cycling();
            setCurrentUser(counter);
        }  

        function cycling() {
           switch (counter) {
            case 0:
                counter = users.users.length-1;
                break;
            case users.users.length:
                counter = 1;
                break;
            default:            
                break;
            }
        }
    };
    
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow rounded d-block fixed-top mt-2 py-0 mx-auto" style={{width: "98%"}}>
            <div className="container-fluid">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-bank2" viewBox="0 0 16 16">
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
                </svg>
                <a className="navbar-brand ms-2" href="/">BadBank</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto py-1">
                        <NavLink className="navCreatAccount nav-link ms-2 ps-2 rounded" to="/createaccount" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="buttom" title="Enter your user data to create your profile">Create Account</NavLink>
                        {/* <NavLink className="nav-link" to="/login">Login</NavLink> */}                                       

                        {users.users.length > 1 ? 
                            (<>
                                <NavLink className="navDeposit nav-link ms-2 ps-2 rounded" to="/deposit" data-bs-toggle="tooltip" data-bs-placement="buttom" title="Add a desire amount to your balance">Deposit</NavLink>
                                <NavLink className="navWithdraw nav-link ms-2 ps-2 rounded" to="/withdraw" data-bs-placement="buttom" title="Retire a desire amount from your balance">Withdraw</NavLink>
                                <NavLink className="navAllData nav-link ms-2 ps-2 rounded" to="/alldata" data-bs-placement="buttom" title="This is a record of all registered users">All Data</NavLink>
                                
                                <div className="container" style={{width: "200px"}}>
                                    <div className="row align-items-center"> 
                                        <button className="col-3 btn btn-dark" onClick={()=>handleUserChange(false)}>
                                            <i className="bi bi-chevron-left text-white"></i>
                                        </button>
                                        <div className="col text-muted text-center text-truncate">
                                            {currentUser === 0 ? "username" : users.users[currentUser].name}
                                        </div>
                                        <button className="col-3 btn btn-dark" onClick={()=>handleUserChange(true)}>
                                            <i className="bi bi-chevron-right text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            
                            </>)
                            : (<></>)
                        }

     
                    </div>
                </div>


            </div>
        </nav>
        
        </>);
}

export default NavBar;