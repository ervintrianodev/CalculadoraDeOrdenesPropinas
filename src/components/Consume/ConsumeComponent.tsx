import { formatCurrency } from "../../helpers";
import { MenuItem, OrderItem } from "../../types";

type ConsumeProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};
export const ConsumeComponent = ({ order, removeItem }: ConsumeProps) => {
  return (
    <div>
      <h2 className="text-center">Consumo</h2>
      {order.length == 0 ? (
        <p>El consumo esta vacio</p>
      ) : (
        order.map((orderItem) => (
          <div
            key={orderItem.id}
            className="d-flex justify-content-between border-top pt-2"
          >
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <p>{orderItem.name}</p>
                <p className="fw-bold">{formatCurrency(orderItem.price)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Cantidad: {orderItem.quantity}</p>
                <p className="text-body-secondary">
                  {formatCurrency(orderItem.price * orderItem.quantity)}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center p-3">
              <button
                className="btn btn-danger rounded-circle"
                onClick={() => removeItem(orderItem.id)}
              >
                x
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
