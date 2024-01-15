"use client";
import React, { useState, useRef } from 'react';
import '../styles/PageStyles.css';
import Button from '@mui/material/Button';
import AdCarousel from './_components/slide';

export default function Home() {
  return (
    <>
    <AdCarousel/>
    <div className="button-container">
      <Button color="primary" className="animated-button">
        <img src="/images/menu_001.png" alt="한식" />
        <span className="button-text">한식</span>
      </Button>
      <Button color="primary" className="animated-button">
        <img src="/images/menu_002.png" alt="일식" />
        <span className="button-text">일식</span>
      </Button>
      <Button color="primary" className="animated-button">
        <img src="/images/menu_003.png" alt="중식" />
        <span className="button-text">중식</span>
      </Button>
      <Button color="primary" className="animated-button">
        <img src="/images/menu_004.png" alt="디저트" />
        <span className="button-text">디저트</span>
      </Button>
    </div>
    </>
  );
}
