"use client";

import React, { useState, useEffect } from 'react';
import { Stack, Button, Card, CardText, Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Moviecard from "./Moviecard";
import MovieForms from "./MovieForms";
import MovieSlide from './MovieSlide';
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ellen Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#review-film">Review Film</Nav.Link>
              <Nav.Link href="#hasil-review">Hasil Review</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className='Text' style={{ marginTop: '30px' }}> {/* Mengatur margin-top tulisan Home Movie List di sini */}
              <Container className='d-flex justify-content-center
              align-items-center'>
                <Row>
                  <Col>
                  <h2 style={{ 
              fontSize: "3rem", 
              color: "white", 
              fontWeight: "800",
              textDecoration: "underline",
              lineHeight: "1",
              textShadow: "2px 2px black",
              letterSpacing: "3px",
            }}>Home Movie List</h2>
            <h3 style={{ 
              fontSize: "1.5rem", 
              color: "white", 
              fontWeight: "800",
              lineHeight: "1",
              textShadow: "2px 2px black",
            }}>Kelas Pemograman Web 2023-2024</h3>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
          <br />
          <MovieSlide />
          <br />
          <br />
          <br />
          <br />
          <div id='review-film'>
          <div>
          <h2 style={{ color: "white", fontWeight: "800",
              lineHeight: "1",textShadow: "3px 3px purple" }}>Review Film</h2>
          </div>
          <MovieForms />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          </div>
        </div>
      </div>
        
        <div id='hasil-review'> {/* Tambahkan id di sini */}
        <div>
          <h2 style={{ color: "white", fontWeight: "800",
              lineHeight: "1",textShadow: "2px 4px black" }}>Hasil Review Film</h2>
          </div>
          <Moviecard />
        </div>
      </div>
    </div>
  );
}

