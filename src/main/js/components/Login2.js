import React from "react";

export default function Login2() {
    return(
        <div className="container">
                        <form className="form-signin" method="post" action="/login">
                            <h2 className="form-signin-heading">My own sign in with React NUMBER 2</h2>
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
                        </form>
        </div>
    )
}
