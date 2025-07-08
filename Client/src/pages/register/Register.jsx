import "./register.scss"; 
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Welcome to our community platform where you can connect with people
            from around the world.
          </p>
          <span>Don't have an account yet?</span>
           <Link to="/login">
            <button>Login</button>
           </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
           
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
