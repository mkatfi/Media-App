import { Link } from "react-router-dom";
import "./login.scss";


const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Welcome to our community platform where you can connect with people from around the world.</p>
          <span>Don't have an account yet?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>    
            <input type="text" placeholder="Enter your username" />
            <input type="password" placeholder="Enter your password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;