
import React from 'react'

function PortfolioDetails() {
    return (
        <>
            {/*<!-- ======= Top Bar ======= -->*/}
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="icofont-envelope"></i><a href="mailto:contact@example.com">contact@example.com</a>
                        <i className="icofont-phone"></i> +1 5589 55488 55
                    </div>
                    <div className="social-links float-right">
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="#" className="skype"><i className="icofont-skype"></i></a>
                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>
                </div>
            </section>

            {/* <!-- ======= Header ======= -->*/}
            <header id="header">
                <div className="container">

                    <div className="logo float-left">
                        <h1 className="text-light"><a href="index.html"><span>Example</span></a></h1>
                        {/*<!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>-->*/}
                    </div>

                    <nav className="nav-menu float-right d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li className="drop-down"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="drop-down"><a href="#">Drop Down 2</a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li><a href="#">Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </nav>{/*<!-- .nav-menu -->*/}

                </div>
            </header>{/*<!-- End Header -->*/}

            <main id="main">

                {/*<!-- ======= Breadcrumbs Section ======= -->*/}
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Portfolio Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li>Portfolio Details</li>
                            </ol>
                        </div>

                    </div>
                </section>{/*<!-- Breadcrumbs Section -->*/}

                {/*<!-- ======= Portfolio Details Section ======= -->*/}
                <section className="portfolio-details">
                    <div className="container">

                        <div className="portfolio-details-container">

                            <div className="owl-carousel portfolio-details-carousel">
                                <img src="assets/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
                                <img src="assets/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
                                <img src="assets/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
                            </div>

                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong>: Web design</li>
                                    <li><strong>Client</strong>: ASU Company</li>
                                    <li><strong>Project date</strong>: 01 March, 2020</li>
                                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="portfolio-description">
                            <h2>This is an example of portfolio detail</h2>
                            <p>
                                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                            </p>
                        </div>
                    </div>
                </section>{/*<!-- End Portfolio Details Section -->*/}

            </main>{/*<!-- End #main -->*/}

            {/* <!-- ======= Footer ======= -->*/}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>Example</h3>
                                <p>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Example</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        {/*  <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/Example-one-page-bootstrap-template-free/ -->*/}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>{/*<!-- End Footer -->*/}

            <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>


        </>
    )
}

export default PortfolioDetails;