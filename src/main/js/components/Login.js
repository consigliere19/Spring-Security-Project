import React from "react";
import {useHistory} from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const goToLogin2 = () => {
        history.push("login");
    }
    return(
        <div className="container">
                        <form className="form-signin" method="post" action="/login">
                            <h2 className="form-signin-heading">My own sign in with React</h2>
                            <p>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input type="text" id="username" name="username" className="form-control" placeholder="Username" required="" autoFocus="" />
                            </p>
                            <p>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input type="password" id="password" name="password" className="form-control" placeholder="Password" required="" />
                            </p>
                            <p>
                                Remember me?
                                <input type="checkbox" id="remember-me" name="remember-me" className="form-control" placeholder="Password" />
                            </p>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                            <button onClick={()=>goToLogin2()}>CLICK</button>
                        </form>
        </div>
    )
}
