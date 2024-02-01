import React from 'react'
import { useSwiper } from 'swiper/react';
import './BtnSlider.css'
import { GrNext, GrPrevious } from 'react-icons/gr';
export default function BtnSlider() {
    const swiper = useSwiper()
  return (
    <div className="siperBtn my-3">
      <button onClick={() => swiper.slideNext()}>
        <GrNext size="20px" />
      </button>
      <button onClick={() => swiper.slidePrev()}>
        <GrPrevious size="20px" />
      </button>
    </div>
  );
}
