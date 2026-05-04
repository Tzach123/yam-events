import React from "react";
import classNames from "classnames";
import classes from "./FloatingActions.module.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

interface FloatingActionsProps {
  showContactUs: boolean;
  showToTop: boolean;
}

const FloatingActions: React.FC<FloatingActionsProps> = ({
  showContactUs,
  showToTop,
}) => {
  return (
    <>
      <div
        className={classNames(classes.contact_us, {
          [classes.ifPlayAnimationContact_us]: showContactUs,
        })}
      >
        <a href="https://www.facebook.com/profile.php?id=100004933061558" target="_blank" rel="noreferrer">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/yam1event/" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGzXhpGHGnRqTsjtjscxGQXnqZRdGNjgvJBqgGzXJRlhpRfFBKCBRwGDdNrxwNlRgKSnG">
          <AiFillMail />
        </a>
        <a href="tel:0523757040">
          <AiFillPhone />
        </a>
        <a href="https://api.whatsapp.com/send?phone=0523757040" target="_blank" rel="noreferrer">
          <RiWhatsappFill />
        </a>
      </div>
      <a
        href="#"
        className={classNames(classes.to_top, {
          [classes.AnimationTo_top]: showToTop,
        })}
      />
    </>
  );
};

export default FloatingActions;
