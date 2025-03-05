import { useState } from "react";
import "./styles.css";

const App = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay(""); // Réinitialise l'affichage
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Évalue l'expression (attention à eval en prod)
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value); // Ajoute la valeur à l'affichage
    }
  };

  return (
    <div className="calculator">
      <div className="screen">{display || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
          
          btn === "/" || btn === "-" || btn === "+" || btn === "*" ? 
          <button key={btn} className="btn operator" onClick={() => handleButtonClick(btn)}>{btn}</button> : 
          <button key={btn} className="btn" onClick={() => handleButtonClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
};

export default App;
