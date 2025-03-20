import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, Nav, Navbar } from 'react-bootstrap';
import {
  FaHeart,
  FaComments,
  FaCoins,
  FaArrowLeft,
  FaSync,
  FaUsers,
  FaPhoneAlt,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const MitraWebsite = () => {
  return (
    <div className="mitra-website">
      {/* Navigation */}
      <Navbar bg="white" expand="lg" className="py-2 border-bottom">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/api/placeholder/40/40" alt="Mitra Logo" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#about" className="mx-2">About</Nav.Link>
              <Nav.Link href="#support" className="mx-2">Support</Nav.Link>
              <Nav.Link href="#others" className="mx-2">Others</Nav.Link>
              <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
            </Nav>
            <Button variant="danger" className="rounded-pill px-4">Donate</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fw-bold mb-2">Mitra</h1>
            <p className="text-muted mb-4">Free crowdfunding for India</p>
            <h4 className="mb-4">Raise funds online for medical emergencies and social causes</h4>
            <Button variant="danger" className="rounded-pill px-4 py-2">Donate</Button>
          </Col>
          <Col md={6} className="text-center">
            <img src="/api/placeholder/250/250" alt="Hands with heart" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* No Fees Banner */}
      <Container className="mb-5">
        <Row>
          <Col>
            <div className="bg-light p-3 rounded d-flex align-items-center">
              <div className="me-3">
                <img src="/api/placeholder/50/50" alt="Megaphone" className="img-fluid" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-0">Crowdfunding charges No fees</h5>
              </div>
              <div>
                <h2 className="text-danger mb-0">0%</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Fundraising Section */}
      <div className="bg-light py-5">
        <Container>
          <h4 className="text-center mb-4">Thousands are fundraising online on Mitra</h4>
          <div className="text-center mb-4">
            <span className="mx-1 text-danger">●</span>
            <span className="mx-1 text-danger">●</span>
            <span className="mx-1 text-danger">●</span>
          </div>

          {/* Category Tabs */}
          <Row className="justify-content-center mb-4">
            <Col xs={3} md={2} className="text-center">
              <div className="bg-danger text-white p-3 rounded">
                <img src="/api/placeholder/30/30" alt="Medical" className="img-fluid mb-2" />
                <p className="small mb-0">Medical</p>
              </div>
            </Col>
            <Col xs={3} md={2} className="text-center">
              <div className="bg-white p-3 rounded">
                <img src="/api/placeholder/30/30" alt="Home" className="img-fluid mb-2" />
                <p className="small mb-0">Home</p>
              </div>
            </Col>
            <Col xs={3} md={2} className="text-center">
              <div className="bg-white p-3 rounded">
                <img src="/api/placeholder/30/30" alt="Children" className="img-fluid mb-2" />
                <p className="small mb-0">Children</p>
              </div>
            </Col>
          </Row>

          {/* Fundraising Cards */}
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="/api/placeholder/400/200" alt="Fundraiser" />
                <Card.Body>
                  <Card.Title className="fs-6">My daughter is fighting for her life. Please help me support to save her</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img src="/api/placeholder/30/30" alt="User" className="rounded-circle me-2" />
                    <small>By Priyanka</small>
                  </div>
                  <p className="small mt-2">Raised out of</p>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>₹100,000</small>
                    <small>₹200,000</small>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline-success" size="sm" className="w-100">
                      <small>last updated by 5minutes</small>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="/api/placeholder/400/200" alt="Fundraiser" />
                <Card.Body>
                  <Card.Title className="fs-6">Help Sangram realize Flight Living Dreams - She needs your support</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img src="/api/placeholder/30/30" alt="User" className="rounded-circle me-2" />
                    <small>By Sangram</small>
                  </div>
                  <p className="small mt-2">Raised out of</p>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '50%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>₹50,000</small>
                    <small>₹100,000</small>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline-success" size="sm" className="w-100">
                      <small>last updated by 8hours</small>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="/api/placeholder/400/200" alt="Fundraiser" />
                <Card.Body>
                  <Card.Title className="fs-6">Sunita Needs A Kidney of Love and Support - Your Help Can Save Her Life</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img src="/api/placeholder/30/30" alt="User" className="rounded-circle me-2" />
                    <small>By Kala Bhuvaniya</small>
                  </div>
                  <p className="small mt-2">Raised ₹12,345 Raised out of ₹70,000</p>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '30%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>₹12,345</small>
                    <small>₹70,000</small>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline-success" size="sm" className="w-100">
                      <small>last updated by 1day 2hour</small>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Second Row of Cards */}
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="/api/placeholder/400/200" alt="Fundraiser" />
                <Card.Body>
                  <Card.Title className="fs-6">Help My Mother - Fight Her's Auto Aggressive Cancer - She Ours Changrampalpumbe</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img src="/api/placeholder/30/30" alt="User" className="rounded-circle me-2" />
                    <small>By Fatima</small>
                  </div>
                  <p className="small mt-2">Raised out of</p>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '40%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>₹80,000</small>
                    <small>₹200,000</small>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline-success" size="sm" className="w-100">
                      <small>last updated by 5minutes</small>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="/api/placeholder/400/200" alt="Fundraiser" />
                <Card.Body>
                  <Card.Title className="fs-6">Help Secure a Bright Future for 15 Year-Old Orphaned After the Tragic Loss of her Father</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img src="/api/placeholder/30/30" alt="User" className="rounded-circle me-2" />
                    <small>By Pankaj</small>
                  </div>
                  <p className="small mt-2">Raised out of</p>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '20%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>₹30,000</small>
                    <small>₹150,000</small>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline-success" size="sm" className="w-100">
                      <small>last updated by 1hour</small>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img variant="top" src="/api/placeholder/400/200" alt="Fundraiser" />
                <Card.Body>
                  <Card.Title className="fs-6">Fund Garima's Library Fund for 13 Year-Old Learners After the Tragic Loss of her Mother</Card.Title>
                  <div className="d-flex align-items-center mt-3">
                    <img src="/api/placeholder/30/30" alt="User" className="rounded-circle me-2" />
                    <small>By Sangram</small>
                  </div>
                  <p className="small mt-2">Raised out of</p>
                  <div className="progress mb-2" style={{ height: '8px' }}>
                    <div className="progress-bar bg-success" style={{ width: '35%' }}></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>₹35,000</small>
                    <small>₹100,000</small>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline-success" size="sm" className="w-100">
                      <small>last updated by 5minutes</small>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-3">
            <Button variant="link" className="text-decoration-none">See more...</Button>
          </div>
        </Container>
      </div>

      {/* What Mitra offers */}
      <Container className="py-5">
        <h2 className="text-center mb-4">What Mitra offers?</h2>
        <Row className="justify-content-center mb-4">
          <Col md={5} className="mb-3">
            <div className="card bg-light">
              <div className="card-body d-flex align-items-center">
                <FaHeart className="text-secondary me-3" size={24} />
                <p className="mb-0 text-start">Starting a fundraiser on Mitra is absolutely free.</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="mb-3">
            <div className="card bg-light">
              <div className="card-body d-flex align-items-center">
                <FaComments className="text-secondary me-3" size={24} />
                <p className="mb-0 text-start">24×7 assistance from dedicated fundraiser managers throughout your fundraising journey...</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={5} className="mb-3">
            <div className="card bg-light">
              <div className="card-body d-flex align-items-center">
                <FaCoins className="text-secondary me-3" size={24} />
                <p className="mb-0 text-start">We accept donations in multiple currencies from anywhere in the world.</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="mb-3">
            <div className="card bg-light">
              <div className="card-body d-flex align-items-center">
                <FaArrowLeft className="text-secondary me-3" size={24} />
                <p className="mb-0 text-start">You can withdraw your funds at any point during the course of your fundraiser.</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={5} className="mb-3">
            <div className="card bg-light">
              <div className="card-body d-flex align-items-center">
                <FaComments className="text-secondary me-3" size={24} />
                <p className="mb-0 text-start">Get instant updates on your fundraiser's progress on a real-time dashboard.</p>
              </div>
            </div>
          </Col>
          <Col md={5} className="mb-3">
            <div className="card bg-light">
              <div className="card-body d-flex align-items-center">
                <FaSync className="text-secondary me-3" size={24} />
                <p className="mb-0 text-start">Accepts donations all cards, netbanking, UPI and online wallets.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">What people are saying about Mitra</h2>
          <div className="text-center mb-4">
            <span className="mx-2">•</span>
            <span className="mx-2">•</span>
            <span className="mx-2">•</span>
          </div>

          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="bg-secondary rounded-circle p-2">
                      <FaUsers className="text-white" size={24} />
                    </div>
                  </div>
                  <p>Great initiative from the team and really bold steps and the best wishes for them. All the best team and Keep Growing...</p>
                  <h6 className="mt-3">Manjunath ✓</h6>
                </Card.Body>
              </Card>

              <div className="d-flex justify-content-center mb-4">
                <Button variant="light" className="mx-2">‹</Button>
                <Button variant="light" className="mx-2">›</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4">
        <Container>
          <Row>
            <Col md={3}>
              <h5 className="text-danger">Mitra</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none text-dark">Home</a></li>
                <li><a href="#" className="text-decoration-none text-dark">About</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Support</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Others</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Contact us</a></li>
              </ul>
              <Button variant="danger" size="sm" className="rounded-pill mt-2">Donate</Button>
            </Col>

            <Col md={3}>
              <h5>Office address</h5>
              <p className="small">
                1st-6th, 87/1 Lake Front, <br />
                near panjagutta, Tolichowki, <br />
                Hyderabad, Karnataka <br />
                560037
              </p>
            </Col>

            <Col md={3}>
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-decoration-none text-dark">Medical</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Memorial</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Non-profit</a></li>
                <li><a href="#" className="text-decoration-none text-dark">Others</a></li>
              </ul>
            </Col>

            <Col md={3}>
              <h5>Contact us</h5>
              <p className="small">
                For further queries contact: <br />
                Founder: Ravi <br />
                Contact: shriventures2020@gmail.com
              </p>
              <div className="mt-3">
                <h6>Find us on</h6>
                <div className="d-flex">
                  <a href="#" className="me-2 text-dark"><FaFacebook /></a>
                  <a href="#" className="me-2 text-dark"><FaTwitter /></a>
                  <a href="#" className="me-2 text-dark"><FaInstagram /></a>
                  <a href="#" className="me-2 text-dark"><FaYoutube /></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="text-center mt-4">
          <Button variant="success" className="rounded-pill px-4">
            Contact <FaPhoneAlt className="ms-2" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default MitraWebsite;