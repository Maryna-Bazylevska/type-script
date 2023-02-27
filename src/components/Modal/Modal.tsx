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
  const checkOverlay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={checkOverlay}>
      <ModalBackdrop>{children}</ModalBackdrop>
    </Overlay>,
    modalRoot
  );
}
export default Modal;
