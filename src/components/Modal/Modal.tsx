import React, { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalBackdrop } from "./Modal.styled";
type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};
const modalRoot = document.querySelector("#modal-root")!;
function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalBackdrop>{children}</ModalBackdrop>
    </Overlay>,
    modalRoot
  );
}
export default Modal;
