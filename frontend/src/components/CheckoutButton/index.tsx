import React from "react";
import { Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import "./index.css";

export default function CheckoutButton({
  disabled = false,
  onClick,
}: {
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      className="checkoutButton"
      disabled={disabled}
      variant="outline-secondary"
      onClick={onClick}
    >
      <FiShoppingCart className="checkoutIcon" />
      <div className="checkoutText">Click To Buy</div>
    </Button>
  );
}
