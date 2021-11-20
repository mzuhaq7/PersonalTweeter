import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {


    return (
        <>
            <div className="sContainer">
                <div className="sign-head">
                    <h3>Sign UP</h3>
                </div>

                <div className="sign-body">
                    <form action='./index'>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputfname">First Name</label>
                                <input name="fName" type="text" className="form-control" id="fn" placeholder="Enter first name" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputlname">Last Name</label>
                                <input name="lName" type="text" className="form-control" id="ln" placeholder="Enter last name" required/>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="inputemail">Email</label>
                                <input name="email" type="email" className="form-control" id="inputemail" placeholder="Enter email" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input name="pass" type="password" className="form-control" id="inputPassword4" placeholder="Password" required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword5">Confirm Password</label>
                                <input name="cpass" type="password" className="form-control" id="inputPassword5" placeholder="Re-enter password" required/>
                            </div>
                            <div className="form-group col-md-12">
                                <label for="date">Date of Birth:</label>
                                <input className="form-control" type="date" id="dob" name="dob" required/>

                            </div>
                            <div className="form-group col-md-12">
                                <label for="gender">Gender:  </label>
                                <span className="lastin">
                                    <input className="lastin" type="radio" id="m" name="gen" value="Male" />
                                    <label for="m">Male</label>
                                </span>
                                <span className="lastin">
                                    <input className="lastin" type="radio" id="f" name="gen" value="Female" />
                                    <label for="f">Female</label>
                                </span>
                                <span className="lastin">
                                    <input type="radio" id="o" name="gen" value="other" />
                                    <label for="o">Other</label>
                                </span>
                            </div>
                        </div>
                        {/* ------------------------- */}
                        <div className="div-signup">
                            {/* <Link to="/index"> */}
                                <button type="submit" className="btn btn-danger btn-signup sgbt1">Sign Up</button>
                            {/* </Link> */}
                        </div>
                        <div className="div-signup">
                            <Link to="/login">
                                <button type="submit" className="btn btn-primary btn-signup sgbt2">Login</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}





export { Signup };