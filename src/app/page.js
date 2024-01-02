"use client";
import React, { useEffect, useRef } from 'react';
import '../styles/PageStyles.css';
import lottie from 'lottie-web';

import Button from '@mui/material/Button';
import FaceIcon from '@mui/icons-material/Face';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';

export default function Home() {
  const foodAnimationRef = useRef(null);
  const coffeeAnimationRef = useRef(null);
  const hairAnimationRef = useRef(null);
  const bookAnimationRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: foodAnimationRef.current, // 애니메이션을 적용할 요소
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/svgs/foodAnimation.json' // 애니메이션 파일 경로
    });
    lottie.loadAnimation({
      container: coffeeAnimationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/svgs/coffeeAnimation.json' // 커피 애니메이션 파일 경로
    });
    lottie.loadAnimation({
      container: hairAnimationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/svgs/hairAnimation.json' // 미용 애니메이션 파일 경로
    });
    lottie.loadAnimation({
      container: bookAnimationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/svgs/bookAnimation.json' // 미용 애니메이션 파일 경로
    });
  }, []);
  return (
    <div className="button-container">
      <Button color="primary" className="animated-button">
        <div className="animation-container" ref={hairAnimationRef}></div>
        <span className="button-text">미용</span>
      </Button>
      <Button color="primary" className="animated-button">
        <div className="animation-container" ref={coffeeAnimationRef}></div>
        <span className="button-text">카페</span>
      </Button>
      <Button color="primary" className="animated-button">
        <div className="animation-container" ref={foodAnimationRef}></div>
        <span className="button-text">음식</span>
      </Button>
      <Button color="primary" className="animated-button">
        <div className="animation-container" ref={bookAnimationRef}></div>
        <span className="button-text">숙박</span>
      </Button>
    </div>
  );
}
