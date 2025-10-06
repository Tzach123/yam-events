import React from 'react'

import classes from './modal.module.css'
import Backdrop from '../backdrop/backdrop'

interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? classes.modal + ' ' + classes.display__block
    : classes.modal + ' ' + classes.display__none
  return (
    <>
      <Backdrop show={show} clicked={handleClose} />
      <div className={showHideClassName}>
        <div className={classes.modal__main}>{children}</div>
      </div>
    </>
  )
}

export default Modal
