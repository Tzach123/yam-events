import React, { useState, useEffect, useRef } from "react";
import Welcome from "../../Components/welcome/welcome";
import ServiceDescription from "../../Components/serviceDescription/serviceDescription";
import PhotosFromEvents from "../../Components/photosFromEvents/photosFromEvents";
import About from "../../Components/about/About";
import SmallCarousel from "../../Components/smallCarousel/smallCarousel";
import FloatingActions from "../../Components/floatingActions/FloatingActions";
import { HomeProps, HomeState } from "../../types";



const Home: React.FC<HomeProps> = () => {
  const [state, setState] = useState<HomeState>({
    ifPlayAnimationPhotosFromEvent: false,
    ifPlayAnimationAbout: false,
    ifPlayAnimationTo_top: false,
    ifPlayAnimationContact_us: true,
  });

  const ifPlayAnimationPhotosFromEventRef = useRef(false);
  const ifPlayAnimationAboutRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !ifPlayAnimationPhotosFromEventRef.current &&
        window.innerHeight * 0.3 <= window.pageYOffset
      ) {
        ifPlayAnimationPhotosFromEventRef.current = true;
        setState((prevState) => ({
          ...prevState,
          ifPlayAnimationPhotosFromEvent: true,
        }));
      }

      if (window.innerHeight * 1.8 <= window.pageYOffset) {
        setState((prevState) => ({
          ...prevState,
          ifPlayAnimationContact_us: false,
          ifPlayAnimationTo_top: true,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          ifPlayAnimationContact_us: true,
          ifPlayAnimationTo_top: false,
        }));
      }

      if (
        !ifPlayAnimationAboutRef.current &&
        window.innerHeight * 1.8 <= window.pageYOffset
      ) {
        ifPlayAnimationAboutRef.current = true;
        setState((prevState) => ({ ...prevState, ifPlayAnimationAbout: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Welcome />
      <FloatingActions
        showContactUs={state.ifPlayAnimationContact_us}
        showToTop={state.ifPlayAnimationTo_top}
      />
      <ServiceDescription />
      <PhotosFromEvents
        ifPlayAnimationPhotosFromEvent={state.ifPlayAnimationPhotosFromEvent}
      />
      <SmallCarousel />
      <About ifPlayAnimationAbout={state.ifPlayAnimationAbout} />
    </div>
  );
};

export default Home;
