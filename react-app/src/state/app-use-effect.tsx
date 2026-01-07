import React, { useEffect, useState } from "react";

const App = () => {
  const [countValue, setCountValue] = useState(10);

  let [counter2, setCounter2] = useState(10);

  // counter2 = countValue;

  //setCounter2(countValue);

  useEffect(() => {
    console.log("Hello REACT, only once!");
  }, []);

  useEffect(() => {
    console.log("Hello React, something changed!");
  });

  useEffect(() => {
    if (countValue > 10) {
      console.log("countValue changed to", countValue);
      setCounter2(countValue);
    }

    return () => {
      console.log("Cleanup for countValue:", countValue);
    };
  }, [countValue, counter2]);

  const countUp = () => {
    // countValue += 1;
    setCountValue(countValue + 1);
  };

  const countDown = () => {
    // countValue -= 1;
    setCountValue(countValue - 1);
    // console.log({ countValue });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: countValue % 2 == 0 ? "darkblue" : "brown",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",

        color: "white",
      }}
    >
      <div style={{ paddingTop: "5%" }}>
        <div style={{ fontSize: 30, fontWeight: "bold" }}>Counter App</div>
      </div>

      <div style={{ paddingTop: "5%", display: "flex", alignItems: "center" }}>
        <div style={styles.button} onClick={countUp}>
          +
        </div>

        <div id="counterElement" style={{ fontSize: 30, padding: 20 }}>
          {countValue}
        </div>
        <div style={styles.button} onClick={countDown}>
          {" "}
          -
        </div>

        <div onClick={() => setCounter2(counter2 + 1)}>
          {" "}
          Counter2: {counter2}
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    cursor: "pointer",
    backgroundColor: "white",
    color: "black",

    fontWeight: "bold",

    fontSize: 30,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
};

export default App;
