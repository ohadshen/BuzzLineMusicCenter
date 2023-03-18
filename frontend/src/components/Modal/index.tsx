import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

export default function CheckoutModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  const navigate = useNavigate();

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Buzzzzinga!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your order is on the way - it'll drop in up to 7 days.
        </Modal.Body>
        <Modal.Footer className="justify-center">
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              navigate("/");
            }}
          >
            Explore More Instruments
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
