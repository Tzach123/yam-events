import React, { useState, useEffect, useRef } from "react";
import classes from "./Home.module.css";
import Welcome from "../../Components/welcome/welcome";
import ServiceDescription from "../../Components/serviceDescription/serviceDescription";
import PhotosFromEvents from "../../Components/photosFromEvents/photosFromEvents";
import About from "../../Components/about/About";
import SmallCarousel from "../../Components/smallCarousel/smallCarousel";
import { HomeProps, HomeState } from "../../types";
import classNames from "classnames";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";



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
      <div
        className={classNames({
          [classes.contact_us]: true,
          [classes.ifPlayAnimationContact_us]: state.ifPlayAnimationContact_us,
        })}
      >
        <div>
          <a href="https://www.facebook.com/profile.php?id=100004933061558">
            <AiFillFacebook />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/yam1event/">
            <AiFillInstagram />
          </a>
        </div>
        <div>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGzXhpGHGnRqTsjtjscxGQXnqZRdGNjgvJBqgGzXJRlhpRfFBKCBRwGDdNrxwNlRgKSnG">
            <AiFillMail />
          </a>
        </div>
        <div>
          <a href="tel:0523757040">
            <AiFillPhone />
          </a>
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=0523757040">
            <RiWhatsappFill />
          </a>
        </div>
      </div>
      <ServiceDescription />
      <PhotosFromEvents
        ifPlayAnimationPhotosFromEvent={state.ifPlayAnimationPhotosFromEvent}
      />
      <a
        href="#"
        className={classNames({
          [classes.to_top]: true,
          [classes.AnimationTo_top]: state.ifPlayAnimationTo_top,
        })}
      ></a>
      <SmallCarousel />
      <About ifPlayAnimationAbout={state.ifPlayAnimationAbout} />
    </div>
  );
};

export default Home;
