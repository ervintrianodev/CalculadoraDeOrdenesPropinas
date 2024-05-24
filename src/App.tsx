import { ConsumeComponent } from "./components/Consume/ConsumeComponent";
import Header from "./components/Header/HeaderComponent";
import MenuItemComponent from "./components/MenuItem/MenuItemComponent";
import { TipPercentageForm } from "./components/TipPercentajeForm/TipPercentageForm";
import { TotalComponent } from "./components/Total/TotalComponent";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, setTip, tip, placeOrder } = useOrder();
  return (
    <>
      <Header />
      <main className="container mt-3 pt-2">
        <div className="row mt-3">
          <div className="col-md-6">
            <h2 className="text-center">Menu</h2>
            {menuItems.map((item) => (
              <MenuItemComponent key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
          <div className="col-md-6 border rounded">
            {order.length > 0 ? (
              <>
                <ConsumeComponent order={order} removeItem={removeItem} />
                <TipPercentageForm setTip={setTip} />
                <TotalComponent
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="text-center">La Order esta vacia</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
