import "./App.css";
import { useState } from "react";

const data = [
  { name: "Product A", price: 300 },
  { name: "Product B", price: 200 },
  { name: "Product C", price: 700 },
  { name: "Product D", price: 500 },
  { name: "Product E", price: 650 },
  { name: "Product F", price: 800 },
];
function Showdata({ name, price }) {
  return (
    <div>
      <h1 style={{ fontSize: "15px" }}>{name}</h1>
      <h1>{price}</h1>
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {opened === false
          ? data
              .filter(
                (d) =>
                  d.name === "Product A" ||
                  d.name === "Product B" ||
                  d.name === "Product C"
              )
              .map((item) => {
                return (
                  <Showdata
                    key={item.name}
                    price={item.price}
                    name={item.name}
                  />
                );
              })
          : data.map((i) => (
              <Showdata key={i.name} price={i.price} name={i.name} />
            ))}

        {opened ? (
          <button onClick={() => setOpened((o) => !o)}>Collapse</button>
        ) : (
          <button onClick={() => setOpened((o) => !o)}>View All</button>
        )}

        {/* <button onClick={() => setOpened((o) => !o)}>
          {opened ? "Collapse" : "View All"}
        </button> */}
      </div>
    </div>
  );
}

export default App;
