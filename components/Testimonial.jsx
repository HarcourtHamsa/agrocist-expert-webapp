import React, { useState } from "react";
import styles from "../styles/sass/testimonial.module.scss";

import { MdChevronRight, MdChevronLeft } from "react-icons/md";

function CarouselItem({ children, width }) {
  return (
    <div className={styles.carousel_item} style={{ width: width }}>
      {children}
    </div>
  );
}

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="indicators">
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <MdChevronLeft size={30}  color="white"/>
        </button>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <MdChevronRight size={30}  color="white"/>
        </button>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <>
    <h3 className={styles.h3}>What our customers say</h3>
    <Carousel>
      <CarouselItem>
        <div className="card">
          <p>&quot;This app has helped me saved a lot of money on my farm&quot;</p>

          <ul>
            <li>Adamu Kenny</li>
          </ul>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="card">
          <p>&quot;My Animals are now responding very and no more death&quot;</p>

          <ul>
            <li>Ajibade Garba</li>
          </ul>
        </div>
      </CarouselItem>
    </Carousel>
    </>
  );
}

export default Testimonial;
