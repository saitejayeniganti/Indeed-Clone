import React from 'react';
import {Link} from 'react-router-dom';
import "./employerNavBar.css"

function Navbar(){


    function logOut(){
        localStorage.clear();
        window.open('../UserSign','_self');
    }

    return(
        <div className="Nav" style={{position:"fixed",top:0,width:"100%",zIndex:"100"}}>

            <div className="leftside">

                <div className="links">
                <Link to={"/EmployerLanding"} className="a" style={{color:"white", fontSize:"20px"}}>indeed</Link>
                <Link to={"/PostJob"} className="a">Post a Job</Link>
                <Link to={"/"} className="a">Find Applicants</Link>

                <Link to={"/"} className="a">Reviews</Link>
                 <button>Open</button>
            </div>
            </div>
            <div className="rightside">
                <div className="links">
                <Link to={"/LogOut"} className="a">Log Out</Link>

            </div>
            </div>

        </div>
    );
}
export default Navbar;
