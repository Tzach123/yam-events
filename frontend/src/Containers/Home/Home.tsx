import React, { useState, useEffect, useRef } from "react";
import classes from "./Home.module.css";
import Welcome from "../../Components/welcome/welcome";
import ServiceDescription from "../../Components/serviceDescription/serviceDescription";
import PhotosFromEvents from "../../Components/photosFromEvents/photosFromEvents";
import About from "../../Components/about/About";
import SmallCarousel from "../../Components/smallCarousel/smallCarousel";
import { HomeProps, HomeState, ServiceDescriptionCard } from "../../types";

import classNames from "classnames";

import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const serviceDescriptionCardsArr: ServiceDescriptionCard[] = [
  {
    icon: <AiOutlineClear />,
    title: "ציוד מתוחזק ונקי",
    description: (
      <article dir="rtl">
        הציוד מתוחזק על הצד הטוב ביותר! <br /> לאחר כל אירוע הציוד עובר ניקוי
        ושיפוץ כדי שתהנו מציוד במצב חדש
      </article>
    ),
  },
  {
    icon: <FaTruckMoving />,
    title: "שינוע",
    description: <article dir="rtl">הובלה לכל חלקי הארץ</article>,
  },
  {
    icon: <FaHandsHelping />,
    title: "שירות אמין",
    description: <article dir="rtl">23 שנה של שירות אמין, מסור ואדיב</article>,
  },
  {
    icon: <GrServices />,
    title: "שירות למגוון האוכלוסייה",
    description: (
      <ul dir="rtl">
        <li>אוכלוסיה מהמגזר הפרטי</li>
        <li>קייטרינגים</li>
        <li>מפיקים</li>
      </ul>
    ),
  },
];

const Home: React.FC<HomeProps> = () => {
  const getCountImg = (): number => {
    let visibleSlides = 5;
    const width = window.innerWidth;
    if (width < 600) {
      visibleSlides = 1;
    } else if (width < 1000) {
      visibleSlides = 2;
    } else if (width < 1200) {
      visibleSlides = 3;
    } else if (width < 1500) {
      visibleSlides = 4;
    }
    return visibleSlides;
  };

  const [visibleSlides, setVisibleSlides] = useState(getCountImg());

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

    const handleResize = () => {
      setVisibleSlides(getCountImg());
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
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
      <ServiceDescription
        serviceDescriptionCardsArr={serviceDescriptionCardsArr}
      />
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
      <SmallCarousel visibleSlides={visibleSlides} />
      <About ifPlayAnimationAbout={state.ifPlayAnimationAbout} />
    </div>
  );
};

export default Home;
