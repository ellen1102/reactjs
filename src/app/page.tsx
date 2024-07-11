"use client";

import React, { useState, useEffect } from 'react';
import { Stack,Button,Card, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Moviecard from "./Moviecard";
import MovieForms from "./MovieForms";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">

      <h1 style={{ fontSize: "24px", color: "red" }}>Home Movie List</h1>
      <h2 style={{ fontSize: "20px", color: "blue"}}>Ellen Febriyani</h2>
      <h3 style={{ fontSize: "16px", color: "black" }}>Kelas Pemograman Web 2023-2024</h3>

      <Stack direction="horizontal" gap={2}>
          {/* <Button as="a" variant="primary">
           tombol link primer
         </Button>
        <Button as="a" variant="success">
          tombol link sukses
        </Button> */}
      </Stack>

      </div>
    </div>

    <div className="row">
      <div className="col-md-11,1">
        <br/>
          <MovieForms />
<br/>
          </div>
      </div>
  <div className='bg-secondary' >
        <Moviecard/>
        </div>
         </div>
  );
}
