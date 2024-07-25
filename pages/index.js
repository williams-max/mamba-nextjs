import Head from 'next/head'
import Image from 'next/image'
import react, { useEffect } from 'react';
//import styles from '../styles/Home.module.css'


const Index = () => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      {/* <!-- ======= Top Bar ======= -->*/}
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
            {/*<!-- Uncomment below if you prefer to use an image logo -->*/}
            {/*<!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>-->*/}
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

      {/* <!-- ======= Hero Section ======= -->*/}
      <section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">

              {/*<!-- Slide 1 -->*/}
              <div className="carousel-item active" style={{ backgroundImage: "url('assets/img/slide/slide-1.jpg')" }}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Example</span></h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 2 -->*/}
              <div className="carousel-item" style={{ backgroundImage: "url('assets/img/slide/slide-2.jpg')" }}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 3 -->*/}
              {<div className="carousel-item" style={{ backgroundImage: "url('assets/img/slide/slide-3.jpg')" }}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                    <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>}

            </div>

            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>

          </div>
        </div>
      </section>{/*<!-- End Hero -->*/}

      <main id="main">
        {/*<!-- ======= About Us Section ======= -->*/}
        <section id="about" className="about">
          <div className="container">

            <div className="row no-gutters">
              <div className="col-lg-6 video-box">
                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                <div className="section-title">
                  <h2>About Us</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                </div>

                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><i className="bx bx-fingerprint"></i></div>
                  <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>

                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><i className="bx bx-gift"></i></div>
                  <h4 className="title"><a href="">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>

              </div>
            </div>

          </div>
        </section>{/*<!-- End About Us Section -->*/}

        {/*<!-- ======= About Lists Section ======= -->*/}

        <section className="about-lists">

          <div className="container">

            <div className="row no-gutters">

              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
              </div>

              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="100">
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
              </div>

              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="200">
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
              </div>

              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="300">
                <span>04</span>
                <h4>Repellendus molestiae</h4>
                <p>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
              </div>

              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="400">
                <span>05</span>
                <h4>Sapiente Magnam</h4>
                <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
              </div>

              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay="500">
                <span>06</span>
                <h4>Facilis Impedit</h4>
                <p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
              </div>

            </div>

          </div>
        </section>{/*<!-- End About Lists Section -->*/}


        {/*<!-- ======= Counts Section ======= -->*/}
        <section className="counts section-bg">
          <div className="container">

            <div className="row">

              <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
                <div className="count-box">
                  <i className="icofont-simple-smile" style={{ color: '#20b38e' }}></i>
                  <span data-toggle="counter-up">232</span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="count-box">
                  <i className="icofont-document-folder" style={{ color: '#c042ff' }}></i>
                  <span data-toggle="counter-up">521</span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="count-box">
                  <i className="icofont-live-support" style={{ color: '#46d1ff' }}></i>
                  <span data-toggle="counter-up">1,463</span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="600">
                <div className="count-box">
                  <i className="icofont-users-alt-5" style={{ color: '#ffb459' }}></i>
                  <span data-toggle="counter-up">15</span>
                  <p>Hard Workers</p>
                </div>
              </div>

            </div>

          </div>
        </section>{/*<!-- End Counts Section -->*/}

        {/*<!-- ======= Services Section ======= -->*/}
        <section id="services" className="services">
          <div className="container">

            <div className="section-title">
              <h2>Services</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon"><i className="icofont-computer"></i></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                <h4 className="title"><a href="">Dolor Sitema</a></h4>
                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="icofont-earth"></i></div>
                <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="icofont-image"></i></div>
                <h4 className="title"><a href="">Magni Dolores</a></h4>
                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="icofont-settings"></i></div>
                <h4 className="title"><a href="">Nemo Enim</a></h4>
                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                <div className="icon"><i className="icofont-tasks-alt"></i></div>
                <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>

          </div>
        </section>{/*<!-- End Services Section -->*/}

        {/*<!-- ======= Our Portfolio Section ======= -->*/}
        
        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="section-title">
              <h2>Our Portfolio</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-eye"></i></a>
                      <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>{/*<!-- End Our Portfolio Section -->*/}

        {/*<!-- ======= Our Team Section ======= -->*/}
        <section id="team" className="team">
          <div className="container">

            <div className="section-title">
              <h2>Our Team</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
            </div>

            <div className="row">

              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="member">
                  <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>{/*<!-- End Our Team Section -->*/}


        {/*<!-- ======= Frequently Asked Questions Section ======= -->*/}
        <section id="faq" className="faq section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="row  d-flex align-items-stretch">

              <div className="col-lg-6 faq-item" data-aos="fade-up">
                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>

              <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="100">
                <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                </p>
              </div>

              <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="200">
                <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
                </p>
              </div>

              <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="300">
                <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                </p>
              </div>

              <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="400">
                <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>

              <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay="500">
                <h4>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</h4>
                <p>
                  Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                </p>
              </div>

            </div>

          </div>
        </section>{/*<!-- End Frequently Asked Questions Section -->*/}


        {/*<!-- ======= Contact Us Section ======= -->*/}
        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2>Contact Us</h2>
            </div>

            <div className="row">

              <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="info-box">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>

              <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="info-box ">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>

              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-row">
                    <div className="col-lg-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate"></div>
                    </div>
                    <div className="col-lg-6 form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>

            </div>

          </div>
        </section>{/*<!-- End Contact Us Section -->*/}


      </main>{/*<!-- End #main -->*/}

      {/*<!-- ======= Footer ======= -->*/}
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
            {/* <!-- All the links in the footer should remain intact. -->
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

export default Index;