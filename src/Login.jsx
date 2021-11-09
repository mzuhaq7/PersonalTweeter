import React from "react";

const Login = () => {
    return (
        <>
            <div className="loginBodyContainer">
                
                <div className="logContainer">

                    {/* For Heading */}
                    <div className="logHead">
                      <h3>Login</h3>
                    </div>

                    {/* For body,  */}
                    <div className="logBody">
                        <form action="/">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>

                            {/* Button for login */}
                            <button type="submit" className="btn btn-default">Login</button>
                            {/* Button for signup */}
                            <a href="/">
                                <button type="button" className="btn btn-danger">Signup</button>
                            </a>
                            <button type="button" className="btn btn-primary">Twitter</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Login };