import React from 'react';


const Signup = () => {
    return (
        <>
            <div className="sContainer">
                <div className="sign-head">
                    <h3>Sign UP</h3>
                </div>

                <div className="sign-body">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputfname">First Name</label>
                                <input type="text" className="form-control" id="fn" placeholder="Enter first name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputlname">Last Name</label>
                                <input type="text" className="form-control" id="ln" placeholder="Enter last name" />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="inputemail">Email</label>
                                <input type="email" className="form-control" id="inputemail" placeholder="Enter email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword5">Confirm Password</label>
                                <input type="password" className="form-control" id="inputPassword5" placeholder="Re-enter password" />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="date">Date of Birth:</label>
                                <input className="form-control" type="date" id="dob" name="dob" />

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
                            <button type="submit" className="btn btn-danger btn-signup sgbt1">Sign Up</button>
                        </div>
                        <div className="div-signup">
                            <button type="submit" className="btn btn-primary btn-signup sgbt2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export { Signup };