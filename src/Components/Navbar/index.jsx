import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../../Context/auth.context";
 
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { 
    isLoggedIn,
    user,                  
    logOutUser             
  } = useContext(AuthContext);
 
  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
    <nav>
      <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      </div>
      {isLoggedIn && (
        <div>
          <Link to="/projects">
            <button>Projects</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </div>
      )}
 
      {!isLoggedIn && (
        <div>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </div>
      )}
    </nav>
  );
}
 
export default Navbar;