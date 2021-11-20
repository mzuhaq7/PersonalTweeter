import Navbar from "./Header";


const Aboutus = () => {
    return (
        <>
            <body data-new-gr-c-s-check-loaded="14.1038.0" data-gr-ext-installed="">
                <Navbar/>
                <main role="main">

                    {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
                    <div className="jumbotron abimg">
                        <div className="container">
                            <h1 className="display-3 abh">About Us</h1>
                            <p>Twitter is what's happening and what people  are talking about right now.</p>
                            <p><a id="abbtn" className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                        </div>
                    </div>

                    <div className="container">
                        {/* <!-- Example row of columns --> */}
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Our Goal</h2>
                                <p>Our goal is to automate the tweeting process on twitter and provide you a better and enchanced experience whilst keeping you updated on trends</p>
                                {/* <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p> */}
                            </div>
                            <div className="col-md-4">
                                <h2>Our Vision</h2>
                                <p>Our vision is to minimze your efforts and time in thinking and writing a tweet on top trends whilst allowing you to be a part of those trends.</p>
                                {/* <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p> */}
                            </div>
                            <div className="col-md-4">
                                <h2>Our Team</h2>
                                <p>Our team consists of highly competent individuals excelling in machine learning and web development and customizing your experience to the best.</p>
                                {/* <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p> */}
                            </div>
                        </div>

                        <hr />

                    </div>

                </main>

                <footer className="container">
                    {/* <p>© Personal Tweet-er2017-2018</p> */}
                </footer>

                {/* <!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
<script src="../../assets/js/vendor/popper.min.js"></script>
<script src="../../dist/js/bootstrap.min.js"></script> */}


            </body>
        </>
    );
}

export {Aboutus};