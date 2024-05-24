import { useMemo } from "react";
import { OrderItem } from "../../types";
import { formatCurrency } from "../../helpers";

type TotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export const TotalComponent = ({ order, tip, placeOrder }: TotalProps) => {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);
  return (
    <>
      <div>
        <h4>Totales y propinas</h4>
        <p>
          Subtotal a pagar:
          <span className="fw-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:
          <span className="fw-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:
          <span className="fw-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="btn btn-primary w-100 text-uppercase"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </>
  );
};
