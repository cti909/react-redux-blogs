import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section className="py-2">
        <Container className="text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">
              <h5 className="text-uppercase fw-bold mb-4">Company name</h5>
              <p>
                The company provides the products. The products are reputable,
                quality.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h5 className="text-uppercase fw-bold mb-4">Products</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="#" className="text-reset">
                    Nike
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-reset">
                    Kinh Do
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-reset">
                    Fin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-reset">
                    Oreo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">
              <h5 className="text-uppercase fw-bold mb-4">Useful links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="#" className="text-reset">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-reset">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-reset">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-reset">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">
              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <p>
                <i className="fas fa-home me-3"></i>Hoa Khanh, Da Nang
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>dt@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i>01 234 567 89
              </p>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
}

export default Footer;
