import { MenuItem } from "../../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export default function MenuItemComponent({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="w-100 d-flex justify-content-between align-items-center mt-1 btn btn-outline-primary"
      onClick={() => addItem(item)}
    >
      <p className="">{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
}
