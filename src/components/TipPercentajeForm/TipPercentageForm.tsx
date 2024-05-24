import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
};
export const TipPercentageForm = ({ setTip }: TipPercentageFormProps) => {
  return (
    <>
      <h3 className="fw-bold">Propina</h3>
      <form action="">
        {tipOptions.map((tip) => (
          <div key={tip.id}>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              className="me-2"
              onChange={(e) => setTip(+e.target.value)}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </>
  );
};
