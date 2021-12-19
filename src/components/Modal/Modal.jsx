import { useEffect } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";

import s from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", close);

    return () => {
      window.addEventListener("keydown", close);
    };
  }, []);

  const close = (e) => {
    if (e.code === "Escape") {
      return closeModal();
    }
    const { currentTarget, target } = e;
    if (currentTarget === target) {
      closeModal();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={close}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
