import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>

                <Head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                    <title>Mamba Bootstrap Template - Index</title>
                    <meta content="" name="descriptison" />
                    <meta content="" name="keywords" />

                    {/* <!-- Favicons -->*/}
                    <link href="assets/img/favicon.png" rel="icon" />
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                    {/* <!-- Google Fonts -->*/}
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i,900" rel="stylesheet" />

                    {/*<!-- Vendor CSS Files -->*/}
                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
                    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
                    <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
                    <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />

                    {/* <!-- Template Main CSS File -->*/}
                    <link href="assets/css/style.css" rel="stylesheet" />

                    {/* <!-- =======================================================
                                      * Template Name: Mamba - v2.4.0
                                      * Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
                                      * Author: BootstrapMade.com
                                      * License: https://bootstrapmade.com/license/
  ======================================================== -->*/}
                </Head>

                <body>

                    <Main />
                    <NextScript />

                    {/* <!-- Vendor JS Files -->*/}
                    <script src="assets/vendor/jquery/jquery.min.js"></script>
                    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
                    <script src="assets/vendor/php-email-form/validate.js"></script>
                    <script src="assets/vendor/jquery-sticky/jquery.sticky.js"></script>
                    <script src="assets/vendor/venobox/venobox.min.js"></script>
                    <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
                    <script src="assets/vendor/counterup/counterup.min.js"></script>
                    <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
                    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                    <script src="assets/vendor/aos/aos.js"></script>

                    {/*<!-- Template Main JS File -->*/}
                    <script src="assets/js/main.js"></script> 

                    

                </body>
            </Html>
        );
    }
}

export default MyDocument;